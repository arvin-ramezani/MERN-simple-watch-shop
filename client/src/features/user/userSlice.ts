import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import { loginApi, registerApi } from "../../Api/authApi";
import { RootState } from "../../app/store";
import { ILogin, IRegister, IUserState } from "../../interfaces/interfaces";

const initialState: IUserState = {
  userInfo: null,
  status: "idle",
};

// Register
export const registerAsync = createAsyncThunk(
  "user/register",

  async (userInfo: IRegister) => {
    const response = await registerApi(userInfo);

    return response.data;
  }
);

// Login
export const loginAsync = createAsyncThunk(
  "user/login",

  async (userInfo: ILogin) => {
    const response = await loginApi(userInfo);

    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    logoutUser: (state) => {
      state.userInfo = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerAsync.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.userInfo = payload;
        localStorage.setItem("accessToken", payload.accessToken);
      });

    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = "loading";
      })

      .addCase(loginAsync.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.userInfo = payload;
      })

      .addCase(loginAsync.rejected, (state, Error) => {
        state.status = "failed";
        console.log(Error);
      });

    builder.addCase(PURGE, (state) => {
      state = initialState;
    });
  },
});

export const { logoutUser } = userSlice.actions;

// User Selector
export const selectUser = (state: RootState) => state.user.userInfo;

// Status Selector
export const selectUserStatus = (state: RootState) => state.user.status;

export default userSlice.reducer;

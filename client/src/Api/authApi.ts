import axios from "axios";
import { ILogin } from "../interfaces/interfaces";
import { IRegister } from "../interfaces/interfaces";
import { IRegistered } from "../interfaces/interfaces";

const base_url = "http://localhost:5000/api/auth";

const authApi = axios.create({
  baseURL: base_url,
});

// Register
export const registerApi = (userInfo: IRegister) => {
  console.log(userInfo);
  return authApi.post<IRegistered>("/register", userInfo);
};

// Login
export const loginApi = async (loginInfo: ILogin) =>
  authApi.post<IRegistered>("/login", loginInfo);

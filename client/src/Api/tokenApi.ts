import axios from "axios";
import { ITokens } from "../interfaces/interfaces";
// const userInfo = localStorage.getItem("accessToken");

// const accessToken = JSON.parse(userInfo)?.accessToken;

export const API = axios.create({
  baseURL: "http://localhost:5000/api/test",
  // headers:  { Authorization: `Bearer ${accessToken}` },
});

export const refreshTokenApiInstance = axios.create({
  baseURL: "http://localhost:5000/api/tokens/refresh",
});

// export const testApi = (accessToken: string) => {
//   console.log("accessToken", accessToken);
//   return API.post("/", { headers: { Authorization: `Bearer ${accessToken}` } });
// };

export const refreshTokenApi = (tokens: ITokens) => {
  return refreshTokenApiInstance.post<ITokens>("/", tokens);
};

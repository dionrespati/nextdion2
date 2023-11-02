import axios, { AxiosResponse } from "axios";
import { IUserInfo } from "@types";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getInfoUser(searchTerm: string): Promise<IUserInfo> {
  let paramSearch = "";
  if (searchTerm !== "") {
    paramSearch = `1`;
  }
  return axios
    .get(`${apiUrl}/users/${paramSearch}`)
    .then((response: AxiosResponse<IUserInfo>) => response.data)
    .catch((error) => {
      throw new Error(error.response?.data?.message || "Failed to fetch user");
    });
}

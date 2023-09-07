import axios, { AxiosResponse } from "axios";
import { IProduct, IProductListResponse } from "@types";

export async function getListProducts(
  searchTerm: string
): Promise<IProductListResponse> {
  let paramSearch = "";
  if (searchTerm !== "") {
    paramSearch = `/search?q=${searchTerm}`;
  }
  return axios
    .get(`https://dummyjson.com/products${paramSearch}`)
    .then((response: AxiosResponse<IProductListResponse>) => response.data)
    .catch((error) => {
      throw new Error(
        error.response?.data?.message || "Failed to fetch products"
      );
    });
}

export async function getListAllProductCategories(): Promise<Array<string>> {
  return axios
    .get(`https://dummyjson.com/products/categories`)
    .then((response: AxiosResponse<Array<string>>) => response.data)
    .catch((error) => {
      throw new Error(
        error.response?.data?.message || "Failed to fetch products categories"
      );
    });
}

export async function getDetailProductById(id: number): Promise<IProduct> {
  return axios
    .get(`https://dummyjson.com/products/${id}`)
    .then((response: AxiosResponse<IProduct>) => response.data)
    .catch((error) => {
      throw new Error(
        error.response?.data?.message || "Failed to fetch products"
      );
    });
}

export async function getListProductsByCategory(
  categoryName: string
): Promise<IProductListResponse> {
  console.log({ categoryName });
  return axios
    .get(`https://dummyjson.com/products/category/${categoryName}`)
    .then((response: AxiosResponse<IProductListResponse>) => response.data)
    .catch((error) => {
      throw new Error(
        error.response?.data?.message || "Failed to fetch products"
      );
    });
}

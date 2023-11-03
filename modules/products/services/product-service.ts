import axios, { AxiosResponse } from "axios";
import { IProduct, IProductListResponse } from "@modules";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiUrl2 = process.env.NEXT_PUBLIC_API_PRODUCT;

export async function getListProducts(
  searchTerm: string
): Promise<IProductListResponse> {
  let paramSearch = "";
  if (searchTerm !== "") {
    paramSearch = `/search?q=${searchTerm}`;
  }
  return axios
    .get(`${apiUrl}/products${paramSearch}`)
    .then((response: AxiosResponse<IProductListResponse>) => response.data)
    .catch((error) => {
      throw new Error(
        error.response?.data?.message || "Failed to fetch products"
      );
    });
}

export async function getListAllProductCategories(): Promise<Array<string>> {
  return axios
    .get(`${apiUrl}/products/categories`)
    .then((response: AxiosResponse<Array<string>>) => response.data)
    .catch((error) => {
      throw new Error(
        error.response?.data?.message || "Failed to fetch products categories"
      );
    });
}

export async function getDetailProductById(id: number): Promise<IProduct> {
  return axios
    .get(`${apiUrl2}/products/${id}`)
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
    .get(`${apiUrl}/products/category/${categoryName}`)
    .then((response: AxiosResponse<IProductListResponse>) => response.data)
    .catch((error) => {
      throw new Error(
        error.response?.data?.message || "Failed to fetch products"
      );
    });
}

import { ResponseData } from "@/types/Home";
import { baseURL } from "@/utils/base-url";
import { GET_PRODUCTS } from "@/utils/queries";
import request from "graphql-request";

export async function getAllProducts(filter?: string): Promise<ResponseData> {
  try {
    const data: ResponseData = await request(baseURL, GET_PRODUCTS(filter));
    return data;
  } catch (err) {
    throw new Error("Erro ao buscar os produtos");
  }
}

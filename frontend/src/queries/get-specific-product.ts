import { ResponseData } from "@/types/Home";
import { baseURL } from "@/utils/base-url";
import { GET_PRODUCT } from "@/utils/queries";
import request from "graphql-request";

export async function getSpecificProduct(id: string) {
  try {
    const data: ResponseData = await request(baseURL, GET_PRODUCT(id));
    return data;
  } catch (err) {
    throw new Error("Erro ao buscar os produtos");
  }
}

import { ProductContext } from "@/contexts/Product";
import { useContext } from "react";

export function useProduct() {
  const { items, setItems } = useContext(ProductContext);
  return { items, setItems };
}

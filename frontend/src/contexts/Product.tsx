"use client"

import { Product } from "@/types/Home";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface Props {
  children: ReactNode;
}
export interface ProductItem extends Product{
  quantity: number;
}
interface IProductContext {
  items: Array<ProductItem>;
  setItems: Dispatch<SetStateAction<ProductItem[]>>;
}
export const ProductContext = createContext({} as IProductContext);

export function ProductProvider({ children }: Props) {
  const [items, setItems] = useState<ProductItem[]>([]);
  return (
    <ProductContext.Provider value={{ items, setItems }}>
      {children}
    </ProductContext.Provider>
  );
}

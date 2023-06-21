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

interface IProductContext {
  items: Array<Product>;
  setItems: Dispatch<SetStateAction<Product[]>>;
}
export const ProductContext = createContext({} as IProductContext);

export function ProductProvider({ children }: Props) {
  const [items, setItems] = useState([{} as Product]);
  return (
    <ProductContext.Provider value={{ items, setItems }}>
      {children}
    </ProductContext.Provider>
  );
}

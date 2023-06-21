/* eslint-disable react-hooks/exhaustive-deps */
import { Product } from "@/types/Home";
import { useEffect, useState } from "react";
import { useProduct } from "./useProduct";

export function useStorage(name: string) {
  const {items, setItems} = useProduct();

  function setItemOnStorage(item: Product){
    setItems([...items, item]);
    localStorage.removeItem("products");
    localStorage.setItem("products", JSON.stringify(items));
  }
  useEffect(() => {
    if (typeof window !== undefined) {
      const itemsSaved = localStorage.getItem(name);
      if(itemsSaved){
        const itemsParsed = JSON.parse(itemsSaved);
        setItems(itemsParsed);
      }
    }
  }, []);
  return {items, setItemOnStorage };
}

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useProduct } from "./useProduct";
import { ProductItem } from "@/contexts/Product";
import { removeItem, searchIfElementHasAdded } from "@/utils/check-element";

export function useStorage() {
  const { items, setItems } = useProduct();
  const [itemsStoraged, setItemsStoraged] = useState<ProductItem[]>([]);

  function setItemOnStorage(item: ProductItem) {
    const itemsFiltered = searchIfElementHasAdded(item, items);
    if (items.length === 0) {
      setItemsStoraged([item]);
      localStorage.setItem("products", JSON.stringify([item]));
    } else if (itemsFiltered.length >= 1) {
      let newItems = items.map((currentItem) => {
        const isElementChoosed = currentItem.id === item.id;
        const element = isElementChoosed
          ? {
              ...currentItem,
              quantity: currentItem.quantity + 1,
            }
          : { ...currentItem };
        return element;
      });
      setItemsStoraged(newItems);
      localStorage.setItem("products", JSON.stringify(newItems));
    } else {
      setItemsStoraged([...items, item]);
      localStorage.setItem("products", JSON.stringify([...items, item]));
    }
  }

  function changeQuantity(item: ProductItem) {
    let itemsUpdated = items.map((currentItem) => {
      const isElementChoosed = currentItem.id === item.id;
      const element = isElementChoosed
        ? {
            ...item,
          }
        : { ...currentItem };
      return element;
    });
    setItemsStoraged(itemsUpdated);
    localStorage.setItem("products", JSON.stringify(itemsUpdated));
  }
  function removeItemOnStorage(itemId: string) {
    const newItems = removeItem(itemId, items);
    setItemsStoraged(newItems);
    localStorage.setItem("products", JSON.stringify(newItems));
  }
  useEffect(() => {
    if (typeof window !== undefined) {
      const itemsSaved = localStorage.getItem("products");
      if (itemsSaved) {
        const itemsParsed = JSON.parse(itemsSaved);
        setItems(itemsParsed);
      }
    }
  }, [itemsStoraged]);
  return { items, setItemOnStorage, removeItemOnStorage, changeQuantity };
}

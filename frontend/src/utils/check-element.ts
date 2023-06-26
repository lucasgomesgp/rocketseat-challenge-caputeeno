import { ProductItem } from "@/contexts/Product";

export function searchIfElementHasAdded(item: ProductItem, items: ProductItem[]){
    const itemsFiltered = items.filter(
      (currentItem) => currentItem.id === item.id
    );
    return itemsFiltered;
  }

  export function removeItem(itemId: string, items: ProductItem[]){
    const newItems = items.filter(
      (currentItem) => currentItem.id !== itemId
    );
    return newItems;
  }
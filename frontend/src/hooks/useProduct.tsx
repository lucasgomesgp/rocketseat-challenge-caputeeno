import { ProductContext } from "@/contexts/Product";
import { useContext } from "react";

export function useProduct() {
  const { items, setItems } = useContext(ProductContext);

  function getSubTotalPrice() {
    let price = 0;
    items.map((item) => {
      const currentItemPrice = item.price_in_cents / 100;
      price += currentItemPrice * item.quantity;
    });
    return price;
  }
  function getQuantityOfProducts() {
    let quantity = 0;
    items.map((item) => {
      quantity += item.quantity;
    });
    return quantity;
  }
  return { items, setItems, getSubTotalPrice, getQuantityOfProducts };
}

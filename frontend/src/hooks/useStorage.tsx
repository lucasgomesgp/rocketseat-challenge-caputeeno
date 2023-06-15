/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export function useStorage(name: string) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (typeof window !== undefined) {
      const itemsSaved = localStorage.getItem(name);
      const itemsParsed = itemsSaved ? JSON.parse(itemsSaved) : [];
      setItems(itemsParsed);
    }
  }, []);
  return { items, setItems };
}

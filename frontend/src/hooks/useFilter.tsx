import { FilterContext } from "@/contexts/Filter";
import { useContext, useDeferredValue } from "react";

export function useFilter() {
  const {
    data,
    searchedItem,
    setSearchedItem,
    error,
    isLoading,
    isFetched,
    queryOptions,
    setQueryOptions,
  } = useContext(FilterContext);
  const searchedItemDeferred = useDeferredValue(searchedItem);
  const filteredItems = data?.allProducts?.filter((element) =>
    element.name.toLowerCase().includes(searchedItemDeferred.toLowerCase())
  );

  return {
    data: filteredItems,
    searchedItem,
    setSearchedItem,
    error,
    isLoading,
    isFetched,
    queryOptions,
    setQueryOptions,
  };
}

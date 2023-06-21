import { FilterContext } from "@/contexts/Filter";
import { useContext } from "react";

export function useFilter() {
  const { data, error, isLoading, filterQuery, setFilterQuery } =
    useContext(FilterContext);
  return { data, error, isLoading, filterQuery, setFilterQuery };
}

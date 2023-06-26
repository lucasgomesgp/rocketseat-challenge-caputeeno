import { FilterContext } from "@/contexts/Filter";
import { useContext } from "react";

export function useFilter() {
  const { data, error, isLoading, queryOptions, setQueryOptions } =
    useContext(FilterContext);
  return { data, error, isLoading, queryOptions, setQueryOptions };
}

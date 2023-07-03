"use client";
import { getAllProducts } from "@/queries/get-all-products";
import { ResponseData } from "@/types/Home";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { useQuery } from "react-query";

interface Props {
  children: ReactNode;
}
interface QueryOptions {
  filterQuery: string;
  pageOfPagination: number;
}
interface IFilterContext {
  data: ResponseData | undefined;
  isLoading: boolean;
  isFetched: boolean;
  error: Error | null;
  queryOptions: QueryOptions;
  setQueryOptions: Dispatch<SetStateAction<QueryOptions>>;
  searchedItem: string;
  setSearchedItem: Dispatch<SetStateAction<string>>;
}
export const FilterContext = createContext({} as IFilterContext);

export function FilterProvider({ children }: Props) {
  const [searchedItem, setSearchedItem] = useState("");
  const [queryOptions, setQueryOptions] = useState({
    filterQuery: "",
    pageOfPagination: 1,
  });
  const { data, error, isLoading, isFetched } = useQuery<
    ResponseData,
    Error
  >({
    queryKey: ["products", queryOptions],
    queryFn: () =>
      getAllProducts(
        `(page: ${queryOptions.pageOfPagination}, perPage: 10)`,
        `(${queryOptions.filterQuery}, page: ${queryOptions.pageOfPagination}, perPage: 10)`
      ),
  });
  
  return (
    <FilterContext.Provider
      value={{
        data,
        searchedItem,
        setSearchedItem,
        error,
        isLoading,
        isFetched,
        queryOptions,
        setQueryOptions,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

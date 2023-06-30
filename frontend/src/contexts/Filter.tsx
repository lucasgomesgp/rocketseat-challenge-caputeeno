import { getAllProducts } from "@/queries/get-all-products";
import { ResponseData } from "@/types/Home";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
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
}
export const FilterContext = createContext({} as IFilterContext);

export function FilterProvider({ children }: Props) {
  const [queryOptions, setQueryOptions] = useState({
    filterQuery: "",
    pageOfPagination: 1,
  });
  const { data, refetch, error, isLoading ,isFetched } = useQuery<ResponseData, Error>({
    queryKey: "products",
    queryFn: () =>
      getAllProducts(
        `(page: ${queryOptions.pageOfPagination}, perPage: 10)`,
        queryOptions.filterQuery
      ),
  });
  useEffect(() => {
    refetch();
    console.log(queryOptions.filterQuery);
  }, [queryOptions, refetch]);
  return (
    <FilterContext.Provider
      value={{ data, error, isLoading, isFetched, queryOptions, setQueryOptions }}
    >
      {children}
    </FilterContext.Provider>
  );
}

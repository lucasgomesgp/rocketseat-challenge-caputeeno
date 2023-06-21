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

interface IFilterContext {
  data: ResponseData | undefined;
  isLoading: boolean;
  error: Error | null;
  filterQuery: string;
  setFilterQuery: Dispatch<SetStateAction<string>>;
}
export const FilterContext = createContext({} as IFilterContext);

export function FilterProvider({ children }: Props) {
  const [filterQuery, setFilterQuery] = useState("");
  const { data, refetch, error, isLoading } = useQuery<ResponseData, Error>({
    queryKey: "products",
    queryFn: () => getAllProducts(filterQuery),
  });
  useEffect(() => {
    refetch();
  }, [filterQuery, refetch]);
  return (
    <FilterContext.Provider value={{ data, error, isLoading, filterQuery, setFilterQuery }}>
      {children}
    </FilterContext.Provider>
  );
}

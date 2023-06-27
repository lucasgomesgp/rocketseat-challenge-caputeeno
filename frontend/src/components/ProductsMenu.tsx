import {
  ContainerMenu,
  Options,
  ProductName,
  ContainerFilters,
  FilterBy,
  Option,
} from "@/styles/ProductsMenu";
import Pagination from "./Pagination";
import { useFilter } from "@/hooks/useFilter";
import { useState } from "react";

interface Types {
  type: "" | "t-shirts" | "mugs";
}
interface TypesMenu {
  name: string;
  type: "" | "t-shirts" | "mugs";
}
export default function ProductsMenu() {
  const { setQueryOptions } = useFilter();
  const [filter, setFilter] = useState<Types>({ type: "" });
  const menuOptions : TypesMenu[] = [
    {
      name: "Todos os produtos",
      type: "",
    },
    {
      name: "Camisetas",
      type: "t-shirts",
    },
    {
      name: "Canecas",
      type: "mugs",
    },
  ];
  async function handleFilterProduct(filter: Types) {
    setFilter({ type: filter.type });
    const query = filter.type ? `(filter:{category:"${filter.type}"})` : "";
    setQueryOptions({
      filterQuery: query,
      pageOfPagination: 1,
    });
  }
  return (
    <ContainerMenu>
      <Options>
        {menuOptions.map((option) => (
          <ProductName
            onClick={() => {
              handleFilterProduct({ type: option.type });
            }}
            $isBold={option.type === filter.type}
            key={option.type}
          >
            {option.name}
          </ProductName>
        ))}
      </Options>
      <ContainerFilters>
        <FilterBy>
          <Option value="none">Organizar por</Option>
          <Option value="new">Novidades</Option>
          <Option value="highToLowPrice">Preço: Maior - menor</Option>
          <Option value="lowToHighPrice">Preço: Menor - maior</Option>
          <Option value="bestSellers">Mais vendidos</Option>
        </FilterBy>
        <Pagination />
      </ContainerFilters>
    </ContainerMenu>
  );
}

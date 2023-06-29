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
import { BaseSyntheticEvent, useState } from "react";

interface Types {
  type: "" | "t-shirts" | "mugs";
}
interface TypesMenu extends Types{
  name: string;
}
export default function ProductsMenu() {
  const todayTimestamp = new Date().toISOString();
  const { setQueryOptions } = useFilter();
  const [filter, setFilter] = useState<Types>({ type: "" });
  const menuOptions: TypesMenu[] = [
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
  function handleFilterProduct(filter: Types) {
    setFilter({ type: filter.type });
    const query = filter.type ? `(filter:{category:"${filter.type}"})` : "";
    setQueryOptions({
      filterQuery: query,
      pageOfPagination: 1,
    });
  }
  function handleOrganizeProductsByFilter(event: BaseSyntheticEvent) {
    const response = event.target.value;
    const filterQuery = response ? `(filter:{${response}})` : "";
    setQueryOptions({
      filterQuery,
      pageOfPagination: 1,
    })

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
        <FilterBy
          onChange={(event) => {
            handleOrganizeProductsByFilter(event);
          }}
        >
          <Option value="">Organizar por</Option>
          <Option value={`created_at_lt: "${todayTimestamp}"`}>
            Novidades
          </Option>
          <Option value="price_in_cents_gt: 5000">Preço: Maior - menor</Option>
          <Option value="price_in_cents_lt: 5000">Preço: Menor - maior</Option>
          <Option value="">Mais vendidos</Option>
        </FilterBy>
        <Pagination />
      </ContainerFilters>
    </ContainerMenu>
  );
}

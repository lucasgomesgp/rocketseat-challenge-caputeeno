"use client";
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
import {
  biggestToLowPrice,
  byDate,
  bySales,
  lowToBiggestPrice,
} from "@/utils/filters-select";
import { getFilterOfProduct } from "@/utils/get-filter-of-product";

interface Types {
  type: "" | "t-shirts" | "mugs";
}
interface TypesMenu extends Types {
  name: string;
}
export default function ProductsMenu() {
  const { setQueryOptions } = useFilter();
  const [filter, setFilter] = useState<Types>({ type: "" });
  const [currentPriority, setCurrentPriority] = useState("");
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
    const query = getFilterOfProduct(filter.type, currentPriority);
    setQueryOptions((prev) => ({
      ...prev,
      filterQuery: query,
    }));
  }
  function handleChangePriority(value: string) {
    setCurrentPriority(value);
    const priorityIsSelected = getFilterOfProduct(filter.type, value);
    setQueryOptions((prev) => ({
      ...prev,
      filterQuery: priorityIsSelected ? priorityIsSelected : value,
    }));
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
            handleChangePriority(event.target.value);
          }}
        >
          <Option value="">Organizar por</Option>
          <Option value={byDate}>Novidades</Option>
          <Option value={biggestToLowPrice}>Preço: Maior - menor</Option>
          <Option value={lowToBiggestPrice}>Preço: Menor - maior</Option>
          <Option value={bySales}>Mais vendidos</Option>
        </FilterBy>
        <Pagination />
      </ContainerFilters>
    </ContainerMenu>
  );
}

import {
  ContainerMenu,
  Options,
  ProductName,
  ContainerFilters,
  FilterBy,
  Option,
} from "@/styles/ProductsMenu";
import Pagination from "./Pagination";

export default function ProductsMenu() {
  return (
    <ContainerMenu>
      <Options>
        <ProductName>Todos os produtos</ProductName>
        <ProductName>Camisetas</ProductName>
        <ProductName>Canecas</ProductName>
      </Options>
      <ContainerFilters>
        <FilterBy>
          <Option value="none">
            Organizar por
          </Option>
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

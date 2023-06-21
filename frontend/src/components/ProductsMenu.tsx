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

export default function ProductsMenu() {
  const {setFilterQuery} = useFilter();
  async function handleFilterProduct(filter?: string) {
    const query = filter ? `(filter:{category:"${filter}"})` : "";
    setFilterQuery(query);
  }
  return (
    <ContainerMenu>
      <Options>
        <ProductName
          onClick={() => {
            handleFilterProduct();
          }}
        >
          Todos os produtos
        </ProductName>
        <ProductName
          onClick={() => {
            handleFilterProduct("t-shirts");
          }}
        >
          Camisetas
        </ProductName>
        <ProductName
          onClick={() => {
            handleFilterProduct("mugs");
          }}
        >
          Canecas
        </ProductName>
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

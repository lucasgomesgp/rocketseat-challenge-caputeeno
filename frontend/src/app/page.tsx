"use client"

import Pagination from "@/components/Pagination";
import ProductsMenu from "@/components/ProductsMenu";
import { HiddenDiv, Wrapper, WrapperPag } from "@/styles/Home";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <Wrapper>
      <ProductsMenu />
      <Products />
      <WrapperPag>
        <HiddenDiv />
        <Pagination />
      </WrapperPag>
    </Wrapper>
  );
}

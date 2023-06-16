"use client";
import Pagination from "@/components/Pagination";
import ProductsMenu from "@/components/ProductsMenu";
import styled from "styled-components";

const Wrapper = styled.main``;

const WrapperPag = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 11.5rem;
`;
export default function Home() {
  return (
    <Wrapper>
      <ProductsMenu />
      <WrapperPag>
        <Pagination />
      </WrapperPag>
    </Wrapper>
  );
}

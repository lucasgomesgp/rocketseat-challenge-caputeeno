"use client";
import Pagination from "@/components/Pagination";
import ProductsMenu from "@/components/ProductsMenu";
import { mobile, tablet } from "@/utils/break-points";
import styled from "styled-components";

const Wrapper = styled.main``;

const WrapperPag = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (min-width: ${mobile}){
    justify-content: space-around;
    gap: 24.4rem;
  }
`;
const HiddenDiv = styled.div`
  display: block;
`;
export default function Home() {
  return (
    <Wrapper>
      <ProductsMenu />
      <WrapperPag>
        <HiddenDiv />
        <Pagination />
      </WrapperPag>
    </Wrapper>
  );
}

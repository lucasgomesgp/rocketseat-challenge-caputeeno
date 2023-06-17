"use client";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import ProductsMenu from "@/components/ProductsMenu";
import { mobile, tablet } from "@/utils/break-points";
import styled from "styled-components";

const Wrapper = styled.main`
  padding-bottom: 2rem;
`;

const WrapperPag = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (min-width: ${mobile}) {
    justify-content: space-around;
    gap: 24.4rem;
  }
`;
const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4 ,1fr);
  gap: 2rem;
  margin-top: 2rem;
  padding: 0 10rem;
  padding-bottom: 4.5rem;
`;

const HiddenDiv = styled.div`
  display: block;
`;
export default function Home() {
  return (
    <Wrapper>
      <ProductsMenu />
      <ContainerCards>
        <Card
          image_url="https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg"
          name="caneca"
          description="Caneca para Devs"
        />
      </ContainerCards>
      <WrapperPag>
        <HiddenDiv />
        <Pagination />
      </WrapperPag>
    </Wrapper>
  );
}

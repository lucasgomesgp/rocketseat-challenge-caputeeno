"use client";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import ProductsMenu from "@/components/ProductsMenu";
import { ContainerCards, HiddenDiv, Wrapper, WrapperPag } from "@/styles/Home";

export default function Home() {
  return (
    <Wrapper>
      <ProductsMenu />
      <ContainerCards>
        <Card
          id="1"
          image_url="https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg"
          name="caneca"
          description="Caneca para Devs"
        />
        <Card
          id="1"
          image_url="https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg"
          name="caneca"
          description="Caneca para Devs"
        />
        <Card
          id="1"
          image_url="https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg"
          name="caneca"
          description="Caneca para Devs"
        />
        <Card
          id="1"
          image_url="https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg"
          name="caneca"
          description="Caneca para Devs"
        />
        <Card
          id="1"
          image_url="https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg"
          name="caneca"
          description="Caneca para Devs"
        />
        <Card
          id="1"
          image_url="https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg"
          name="caneca"
          description="Caneca para Devs"
        />
        <Card
          id="1"
          image_url="https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg"
          name="caneca"
          description="Caneca para Devs"
        />
        <Card
          id="1"
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

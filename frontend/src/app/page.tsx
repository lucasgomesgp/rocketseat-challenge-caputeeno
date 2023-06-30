"use client";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import ProductsMenu from "@/components/ProductsMenu";
import { ContainerCards, HiddenDiv, Wrapper, WrapperPag } from "@/styles/Home";
import { useFilter } from "@/hooks/useFilter";
import {SkeletonUI} from "@/components/SkeletonUI";

export default function Home() {
  const { data, isLoading, isFetched } = useFilter();
  return (
    <Wrapper>
      <ProductsMenu />
      <ContainerCards>
        {!isLoading && !isFetched ? (
          data?.allProducts.map(
            ({ id, name, image_url, description, price_in_cents }) => (
              <Card
                key={id}
                id={id}
                name={name}
                description={description}
                image_url={image_url}
                price={price_in_cents}
              />
            )
          )
        ) : (
          <SkeletonUI />
        )}
      </ContainerCards>
      <WrapperPag>
        <HiddenDiv />
        <Pagination />
      </WrapperPag>
    </Wrapper>
  );
}

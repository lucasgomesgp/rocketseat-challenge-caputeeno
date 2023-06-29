"use client";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import ProductsMenu from "@/components/ProductsMenu";
import { ContainerCards, HiddenDiv, Wrapper, WrapperPag } from "@/styles/Home";
import { useFilter } from "@/hooks/useFilter";
import { quantityItems } from "@/utils/quantity-items";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Home() {
  const { data, isLoading } = useFilter();
  return (
    <Wrapper>
      <ProductsMenu />
      <ContainerCards>
        {!isLoading ? (
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
          <>
            {quantityItems.map((qtd) => (
              <Stack spacing={0.5} key={qtd}>
                <Skeleton variant="rectangular" width={250} height={180} />
                <Skeleton variant="text" />
                <Skeleton variant="text" />
              </Stack>
            ))}
          </>
        )}
      </ContainerCards>
      <WrapperPag>
        <HiddenDiv />
        <Pagination />
      </WrapperPag>
    </Wrapper>
  );
}

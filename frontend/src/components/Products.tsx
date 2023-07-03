"use client"
import { useFilter } from "@/hooks/useFilter";
import { SkeletonUI } from "@/components/SkeletonUI";
import Card from "./Card";
import { styled } from "styled-components";
import { laptop } from "@/utils/break-points";

const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
  justify-content: center;
  padding-bottom: 4.5rem;

  @media screen and (min-width: ${laptop}) {
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    padding: 0 10rem;
    gap: 2rem;
  }
`;

export function Products() {
  const { data, isLoading } = useFilter();

  return (
    <ContainerCards>
      {!isLoading && data !== undefined ? (
        data?.map(
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
  );
}

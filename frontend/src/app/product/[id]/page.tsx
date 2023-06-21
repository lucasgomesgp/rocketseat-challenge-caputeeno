"use client";
import BackToHome from "@/components/BackToHome";
import { useStorage } from "@/hooks/useStorage";
import { getSpecificProduct } from "@/queries/get-specific-product";
import {
  Container,
  TextButton,
  WrapperInfo,
  InfoProduct,
  SmallTitle,
  CentralTitle,
  Price,
  Shipping,
  Description,
  TitleDescription,
  Details,
  TextArea,
  ImgProduct,
  BtnAddToCart,
} from "@/styles/Product";
import { ResponseData } from "@/types/Home";
import { formatToMoney } from "@/utils/format-money";
import { ShoppingBagOpen } from "@phosphor-icons/react";
import { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

interface Props {
  params: {
    id: string;
  };
}

export default function Product({ params }: Props) {
  const { items, setItemOnStorage } = useStorage("products");
  const { data, error, isLoading } = useQuery<ResponseData, Error>({
    queryKey: "product",
    queryFn: () => getSpecificProduct(params.id),
  });
  function handleAddToCart() {
    setItemOnStorage({
      id: params.id,
      category: data?.allProducts[0].category || "",
      created_at: data?.allProducts[0].created_at || "",
      description: data?.allProducts[0].description || "",
      image_url: data?.allProducts[0].image_url || "",
      name: data?.allProducts[0].name || "",
      price_in_cents: data?.allProducts[0].price_in_cents || 0,
    });

    toast.success("Produto adicionado com sucesso!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <Container>
      <BackToHome />
      {!isLoading && data?.allProducts[0].name ? (
        <WrapperInfo>
          <ImgProduct
            src={data?.allProducts[0].image_url}
            alt={data?.allProducts[0].name}
            width={280}
            height={400}
          />
          <TextArea>
            <InfoProduct>
              <SmallTitle>{data?.allProducts[0].name}</SmallTitle>
              <CentralTitle>{data?.allProducts[0].category}</CentralTitle>
              <Price>
                {formatToMoney(data?.allProducts[0].price_in_cents / 100)}
              </Price>
              <Shipping>
                *Frete de R$40,00 para todo o Brasil. Grátis para compras acima
                de R$900,00.
              </Shipping>
            </InfoProduct>

            <Description>
              <TitleDescription>Descrição</TitleDescription>
              <Details>{data?.allProducts[0].description}</Details>
            </Description>
            <BtnAddToCart onClick={handleAddToCart}>
              <ShoppingBagOpen size={24} color="#F5F5FA" />
              <TextButton>Adicionar ao carrinho</TextButton>
            </BtnAddToCart>
          </TextArea>
        </WrapperInfo>
      ) : (
        <p>Carregando...</p>
      )}
    </Container>
  );
}

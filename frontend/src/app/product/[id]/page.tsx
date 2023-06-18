"use client";
import {
  Container,
  BackToHome,
  BtnAddToCart,
  Paragraph,
  Img,
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
} from "@/styles/Product";
import { ShoppingBagOpen } from "@phosphor-icons/react";

interface Props {
  params: {
    id: string;
  };
}

export default function Product({ params }: Props) {
  return (
    <Container>
      <BackToHome href={"/"}>
        <Img
          alt="Icon back home"
          src="/icons/arrow-back.svg"
          width={32}
          height={32}
        />
        <Paragraph>Voltar</Paragraph>
      </BackToHome>

      <WrapperInfo>
        <ImgProduct
          src={
            "https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg"
          }
          alt="Product"
          width={280}
          height={400}
        />
        <TextArea>
          <InfoProduct>
            <SmallTitle>Caneca</SmallTitle>
            <CentralTitle>Caneca de cerâmica rústica</CentralTitle>
            <Price>R$ 40,00</Price>
            <Shipping>
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </Shipping>
          </InfoProduct>

          <Description>
            <TitleDescription>Descrição</TitleDescription>
            <Details>
              Aqui vem um texto descritivo do produto, esta caixa de texto
              servirá apenas de exemplo para que simule algum texto que venha a
              ser inserido nesse campo, descrevendo tal produto.
            </Details>
          </Description>
          <BtnAddToCart>
            <ShoppingBagOpen size={24} color="#F5F5FA" />
            <TextButton>Adicionar ao carrinho</TextButton>
          </BtnAddToCart>
        </TextArea>
      </WrapperInfo>
    </Container>
  );
}

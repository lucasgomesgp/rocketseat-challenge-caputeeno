"use client";

import BackToHome from "@/components/BackToHome";
import CartItem from "@/components/CartItem";
import ItemSummary from "@/components/ItemSummary";
import { useProduct } from "@/hooks/useProduct";
import {
  Container,
  WrapperItems,
  Texts,
  Title,
  Price,
  ItemsOnCart,
  CheckoutArea,
  Summary,
  CentralTitle,
  CheckoutBtn,
  LinksForHelp,
  LinkTo,
  Bold,
} from "@/styles/Cart";
import { formatToMoney } from "@/utils/format-money";
import { useEffect, useState } from "react";

export default function Cart() {
  const { items, getSubTotalPrice, getQuantityOfProducts } = useProduct();

  const [values, setValues] = useState({
    priceOfSubTotal: 0,
    totalItems: 0,
  });

  const deliveryTax = 40;

  function handleGetValues() {
    setValues({
      priceOfSubTotal: getSubTotalPrice(),
      totalItems: getQuantityOfProducts(),
    });
  }

  useEffect(() => {
    handleGetValues();
  }, [items]);
  return (
    <Container>
      <BackToHome />
      <Texts>
        <Title>Seu carrinho</Title>
        <Price>
          Total ({values.totalItems} produtos){" "}
          <Bold>{formatToMoney(values.priceOfSubTotal)}</Bold>
        </Price>
      </Texts>
      <WrapperItems>
        <ItemsOnCart>
          {items.map(
            ({
              id,
              name,
              description,
              image_url,
              price_in_cents,
              quantity,
              category,
            }) => (
              <CartItem
                key={id + "," + image_url}
                id={id}
                name={name}
                description={description}
                image_url={image_url}
                price={price_in_cents}
                quantity={quantity}
                category={category}
              />
            )
          )}
        </ItemsOnCart>
        <CheckoutArea>
          <Summary>
            <CentralTitle>Resumo do pedido</CentralTitle>
            <ItemSummary
              price={values.priceOfSubTotal}
              text="Subtotal de produtos"
            />
            <ItemSummary price={deliveryTax} text="Entrega" />
            <ItemSummary
              price={values.priceOfSubTotal + deliveryTax}
              text="Total"
              isBold={true}
            />
            <CheckoutBtn>Finalizar a compra</CheckoutBtn>
          </Summary>
          <LinksForHelp>
            <LinkTo href="/">Ajuda</LinkTo>
            <LinkTo href="/">reembolsos</LinkTo>
            <LinkTo href="/">entregas e frete</LinkTo>
            <LinkTo href="/">trocas e devoluções</LinkTo>
          </LinksForHelp>
        </CheckoutArea>
      </WrapperItems>
    </Container>
  );
}

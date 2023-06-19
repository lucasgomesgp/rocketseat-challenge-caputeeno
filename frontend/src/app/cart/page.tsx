"use client";

import BackToHome from "@/components/BackToHome";
import CartItem from "@/components/CartItem";
import ItemSummary from "@/components/ItemSummary";
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

export default function Cart() {
  return (
    <Container>
      <BackToHome />
      <Texts>
        <Title>Seu carrinho</Title>
        <Price>
          Total (3 produtos) <Bold>{formatToMoney(161)}</Bold>
        </Price>
      </Texts>
      <WrapperItems>
          <ItemsOnCart>
            <CartItem />
            <CartItem />
            <CartItem />
          </ItemsOnCart>
        <CheckoutArea>
          <Summary>
            <CentralTitle>Resumo do pedido</CentralTitle>
            <ItemSummary price={161} text="Subtotal de produtos" />
            <ItemSummary price={40} text="Entrega" />
            <ItemSummary price={201} text="Total" isBold={true} />
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

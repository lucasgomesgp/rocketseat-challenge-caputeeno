"use client";

import {
  Container,
  Img,
  Info,
  UpArea,
  Title,
  Description,
  BottomArea,
  Quantity,
  Price,
  Option,
  BtnDelete,
} from "@/styles/CartItem";
import { COLORS } from "@/utils/colors-guide";
import { formatToMoney } from "@/utils/format-money";
import { quantityItems } from "@/utils/quantity-items";
import { Trash } from "@phosphor-icons/react";

export default function CartItem() {
  return (
    <Container>
      <Img
        alt="Icon back home"
        src="https://storage.googleapis.com/xesque-dev/challenge-images/caneca-06.jpg"
        width={256}
        height={263}
      />
      <Info>
        <UpArea>
          <Title>Caneca de cerâmica rústica</Title>
          <BtnDelete>
            <Trash size={32} color={COLORS.OTHERS.delete} />
          </BtnDelete>
        </UpArea>
        <Description>
          Aqui vem um texto descritivo do produto, esta caixa de texto servirá
          apenas de exemplo para que simule algum texto que venha a ser inserido
          nesse campo, descrevendo tal produto.
        </Description>
        <BottomArea>
          <Quantity>
            {quantityItems.map((quant) => (
              <Option key={quant} value={quant}>
                {quant}
              </Option>
            ))}
          </Quantity>
          <Price>{formatToMoney(40)}</Price>
        </BottomArea>
      </Info>
    </Container>
  );
}

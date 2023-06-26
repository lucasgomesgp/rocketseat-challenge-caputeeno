"use client";

import { useStorage } from "@/hooks/useStorage";
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
import { FormEvent } from "react";

interface Props {
  id: string;
  name: string;
  image_url: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
}
export default function CartItem({
  id,
  name,
  description,
  image_url,
  price,
  quantity,
  category,
}: Props) {
  const { removeItemOnStorage, changeQuantity } = useStorage();
  function handleChangeQuantity(quant: string) {
    changeQuantity({
      id,
      category,
      description,
      image_url,
      name,
      price_in_cents: price,
      quantity: parseInt(quant),
    });
  }
  return (
    <Container>
      <Img
        alt="Icon back home"
        src={image_url || ""}
        width={256}
        height={263}
      />
      <Info>
        <UpArea>
          <Title>{name}</Title>
          <BtnDelete
            onClick={() => {
              removeItemOnStorage(id);
            }}
          >
            <Trash size={32} color={COLORS.OTHERS.delete} />
          </BtnDelete>
        </UpArea>
        <Description>{description}</Description>
        <BottomArea>
          <Quantity
            onChange={(event) => {
              handleChangeQuantity(event.target.value);
            }}
            defaultValue={quantity}
          >
            {quantityItems.map((quant) => (
              <Option key={quant} value={quant} selected={quant === quantity}>
                {quant}
              </Option>
            ))}
          </Quantity>
          <Price>{formatToMoney(price / 100)}</Price>
        </BottomArea>
      </Info>
    </Container>
  );
}

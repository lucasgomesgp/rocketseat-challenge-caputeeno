"use client";
import { ShoppingBagOpen, MagnifyingGlass } from "@phosphor-icons/react";
import { COLORS } from "@/utils/colors-guide";
import {
  Menu,
  SearchArea,
  Title,
  WrapperInput,
  InputSearch,
  Button,
  CartItems,
  CircleCountItemsInCart,
} from "@/styles/Header";
import { useStorage } from "@/hooks/useStorage";

export function Header() {
  const { items } = useStorage("cartItems");
  return (
    <Menu>
      <Title href={"/"}>capputeeno</Title>
      <SearchArea>
        <WrapperInput onSubmit={(event) => event.preventDefault()}>
          <InputSearch placeholder="Procurando por algo específico?" />
          <Button>
            <MagnifyingGlass size={25} color={COLORS.ICONS.gray_icon} />
          </Button>
        </WrapperInput>
        <CartItems>
          <ShoppingBagOpen size={32} color={COLORS.ICONS.gray_icon} />
          <CircleCountItemsInCart> {items.length || 0}</CircleCountItemsInCart>
        </CartItems>
      </SearchArea>
    </Menu>
  );
}

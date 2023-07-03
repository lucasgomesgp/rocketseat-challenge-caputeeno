"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
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
import { ShoppingBag } from "./icons/ShoppingBag";
import { useFilter } from "@/hooks/useFilter";

export function Header() {
  const { items } = useStorage();
  const {searchedItem, setSearchedItem} = useFilter();
  return (
    <Menu>
      <Title href={"/"}>capputeeno</Title>
      <SearchArea>
        <WrapperInput onSubmit={(event) => event.preventDefault()}>
          <InputSearch
            placeholder="Procurando por algo específico?"
            value={searchedItem}
            onChange={(event) => setSearchedItem(event.target.value)}
          />
          <Button>
            <MagnifyingGlass size={25} color={COLORS.ICONS.gray_icon} />
          </Button>
        </WrapperInput>
        <CartItems href={"/cart"}>
          <ShoppingBag />
          {items.length > 0 && (
            <CircleCountItemsInCart>{items.length}</CircleCountItemsInCart>
          )}
        </CartItems>
      </SearchArea>
    </Menu>
  );
}

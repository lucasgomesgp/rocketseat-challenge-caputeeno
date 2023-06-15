import styled from "styled-components";
import Link from "next/link";
import { COLORS } from "@/utils/colors-guide";
import { saira_stencil } from "@/fonts/siara-stencil";

const Menu = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1.18rem 0;
  background-color: ${COLORS.SHAPES.one};
  
`;

const SearchArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
`;

const WrapperInput = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  justify-content: center;
`;

const Button = styled.button`
  position: absolute;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Title = styled(Link)`
  font-size: 2.5rem;
  color: #5d5d6d;
  text-decoration: none;
  font-family: ${saira_stencil.style.fontFamily};
`;

const InputSearch = styled.input`
  background-color: ${COLORS.BACKGROUND.input_search};
  width: 22rem;
  max-width: 20rem;
  height: 2.625rem;
  padding: 1rem 0.625rem;
  border-radius: 8px;
  border: none;
  outline: none;
  padding-left: 1rem;
`;

const CartItems = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const CircleCountItemsInCart = styled.div`
  border-radius: 50%;
  background-color: ${COLORS.OTHERS.delete};
  color: white;
  width: 25px;
  height: 25px;
  align-items: center;
  position: absolute;
  right: -12px;
  bottom: -10px;
  line-height: 25px;
  text-align: center;
  font-weight: 700;
`;
export {
  Menu,
  SearchArea,
  WrapperInput,
  Button,
  Title,
  InputSearch,
  CartItems,
  CircleCountItemsInCart,
};

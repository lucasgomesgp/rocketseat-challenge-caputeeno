import styled from "styled-components";
import Link from "next/link";
import { COLORS } from "@/utils/colors-guide";
import { saira_stencil } from "@/fonts/siara-stencil";
import { laptop } from "@/utils/break-points";

const Menu = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom:1.18rem;
  background-color: ${COLORS.SHAPES.one};
  
  @media screen and (min-width: ${laptop}) {
    padding: 1.18rem 8rem;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SearchArea = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
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
  top: 50%;
  transform: translateY(-50%);
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

const CartItems = styled(Link)`
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const CircleCountItemsInCart = styled.div`
  border-radius: 50%;
  background-color: ${COLORS.OTHERS.delete};
  color: white;
  width: 17px;
  height: 17px;
  align-items: center;
  position: absolute;
  right: -8px;
  bottom: 0px;
  line-height: 25px;
  text-align: center;
  font-weight: 700;
  font-size:0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
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

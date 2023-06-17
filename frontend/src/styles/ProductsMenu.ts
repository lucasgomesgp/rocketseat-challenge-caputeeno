import { saira } from "@/fonts/siara-stencil";
import { COLORS } from "@/utils/colors-guide";
import styled from "styled-components";

const ContainerMenu = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Options = styled.div`
  display: flex;
`;

const ProductName = styled.button`
  background-color: transparent;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  padding: 1rem;
  color: ${COLORS.ICONS.gray_icon};
  transition: 100ms all ease;

  &:hover{
    border-bottom: 4px solid ${COLORS.OTHERS.orange_low};
  }
`;

const ContainerFilters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FilterBy = styled.select`
  outline: none;
  color: ${COLORS.ICONS.gray_icon};
  border: none;
  background-color: transparent;
  align-self: flex-end;
`;

const Option = styled.option`
  outline: none;
`;



export {
  ContainerFilters,
  ContainerMenu,
  ProductName,
  FilterBy,
  Option,
  Options,
};

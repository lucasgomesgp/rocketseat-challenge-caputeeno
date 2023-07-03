import { laptop } from "@/utils/break-points";
import { COLORS } from "@/utils/colors-guide";
import styled from "styled-components";

const ContainerMenu = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;

  @media screen and (min-width: ${laptop}) {
    gap: 0;
    padding: 0 130px;
    justify-content: space-between;
  }
`;

const Options = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const ProductName = styled.li<{ $isBold: boolean }>`
  background-color: transparent;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  color: ${COLORS.ICONS.gray_icon};
  transition: 100ms all ease;
  font-family: inherit;
  list-style: none;
  padding-bottom: 4px;
  
  &:hover {
    border-bottom: 4px solid ${COLORS.OTHERS.orange_low};
  }
  ${(props) =>
    props.$isBold
      ? `
      border-bottom: 4px solid ${COLORS.OTHERS.orange_low};
      font-weight: 600;
      color: ${COLORS.FONT.gray}
      `
      : ""};
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
  font-family: inherit;
`;

const Option = styled.option`
  outline: none;
  background-color: ${COLORS.SHAPES.one};
`;

export {
  ContainerFilters,
  ContainerMenu,
  ProductName,
  FilterBy,
  Option,
  Options,
};

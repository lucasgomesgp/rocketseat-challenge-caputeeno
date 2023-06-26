import { COLORS } from "@/utils/colors-guide";
import styled from "styled-components";

const ContainerPagination = styled.div`
  display: flex;
  gap: 2px;
`;

const NumberPagination = styled.button<{ isBold?: boolean }>`
  background-color: ${COLORS.ICONS.gray_button};
  border: none;
  width: 32px;
  height: 32px;
  cursor: pointer;
  color: ${COLORS.ICONS.gray_icon};
  border-radius: 8px;
  transition: 100ms all ease;
  ${(props) =>
    props.isBold
      ? `
      color: ${COLORS.OTHERS.orange_low};
      border: 2px solid ${COLORS.OTHERS.orange_low};
      `
      : ""};

  &:hover {
    border: 2px solid ${COLORS.OTHERS.orange_low};
    background-color: transparent;
  }
`;

export { ContainerPagination, NumberPagination };

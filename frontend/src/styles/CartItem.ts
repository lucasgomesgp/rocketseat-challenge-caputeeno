import { big_laptop, laptop, tablet } from "@/utils/break-points";
import { COLORS } from "@/utils/colors-guide";
import Image from "next/image";
import { styled } from "styled-components";

const Container = styled.section`
  background-color: ${COLORS.SHAPES.one};
  display: flex;
  flex-wrap: wrap;
  border-radius: 8px;
  gap: 1.9375rem;
  
  @media screen and (min-width: ${laptop}) {
    flex-wrap: nowrap;
    min-width: 38rem;
  }
`;
const Img = styled(Image)`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  @media screen and (min-width: ${tablet}) {
    border-radius: 8px 0 0 8px;
  }
`;
const Info = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 1rem;
  padding-bottom: 1rem;

  @media screen and (min-width: ${tablet}) {
    padding: 0;
  }
`;
const UpArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;
const Title = styled.h4`
  font-weight: 100;
  font-size: 1.25rem;
`;
const BtnDelete = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding-right: 1rem;
`;
const Description = styled.p`
  margin-bottom: 1.5625rem;
  font-size: 0.75rem;
`;
const BottomArea = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1rem;
`;
const Quantity = styled.select`
  border: 1px solid ${COLORS.ICONS.gray_option};
  color: ${COLORS.ICONS.gray_icon};
  width: 65px;
  height: 40px;
  background-color: ${COLORS.BACKGROUND.input_search};
  border-radius: 8px;
  outline: none;
  text-align: center;
`;
const Option = styled.option``;
const Price = styled.p`
  font-weight: bold;
`;

export {
  Container,
  Img,
  Info,
  UpArea,
  Title,
  BtnDelete,
  Description,
  BottomArea,
  Quantity,
  Option,
  Price,
};

import { big_laptop, laptop, tablet } from "@/utils/break-points";
import { COLORS } from "@/utils/colors-guide";
import Link from "next/link";
import { styled } from "styled-components";

const Container = styled.main`
  padding-bottom: 2rem;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: ${laptop}) {
    padding: 0 8rem 2rem 8rem;
  }
`;
const WrapperItems = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column-reverse;

  @media screen and (min-width: ${laptop}) {
    /* display: grid;
    grid-template-columns: repeat(2, 0.5fr); */
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;
const Texts = styled.div``;
const Title = styled.h3`
  text-transform: uppercase;
  color: ${COLORS.FONT.gray};
  margin-bottom: 0.375rem;
`;
const Price = styled.p`
  font-weight: 100;
`;
const Bold = styled.span`
  font-weight: bold;
  color: ${COLORS.FONT.gray};
`;
const ItemsOnCart = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.4375rem;
  padding: 0 2rem 0 0;
  width: 90%;
`;
const CheckoutArea = styled.section`
  background-color: ${COLORS.SHAPES.one};
  height: 43.75rem;
  color: ${COLORS.FONT.gray};
  display: grid;

  padding: 0 1.5rem;
  max-width: 90%;
  margin: 0 auto;

  @media screen and (min-width: ${laptop}) {
    margin: 0;
    min-width: 15.625rem;
  }
  @media screen and (min-width: ${big_laptop}) {
    margin: 0;
    min-width: 22rem;
  }
`;
const Summary = styled.section`
  min-width: 100%;
  max-width: 350px;
`;
const CentralTitle = styled.h3`
  text-transform: uppercase;
  margin-bottom: 1.8125rem;
  padding-top: 1rem;
`;
const CheckoutBtn = styled.button`
  text-align: center;
  background-color: ${COLORS.OTHERS.green};
  color: ${COLORS.SHAPES.white_low};
  border: none;
  padding: 1rem 0;
  width: 90%;
  cursor: pointer;
  border-radius: 4px;
  text-transform: uppercase;
  margin-top: 2.5rem;
  font-weight: 600;
`;
const LinksForHelp = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-self: self-end;
  padding-bottom: 1.5rem;
`;
const LinkTo = styled(Link)`
  text-transform: uppercase;
  color: ${COLORS.ICONS.gray_icon};
  font-weight: 500;
`;

export {
  Container,
  WrapperItems,
  Texts,
  Title,
  Price,
  Bold,
  ItemsOnCart,
  CheckoutArea,
  Summary,
  CentralTitle,
  CheckoutBtn,
  LinksForHelp,
  LinkTo,
};

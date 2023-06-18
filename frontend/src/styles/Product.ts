import { styled } from "styled-components";
import Link from "next/link";
import { COLORS } from "@/utils/colors-guide";
import Image from "next/image";
import { laptop, tablet } from "@/utils/break-points";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 4rem;
  color: ${COLORS.FONT.gray};

  @media screen and (min-width: ${laptop}) {
    padding: 0 10rem;
  }
`;

const BackToHome = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-top: 1.5625rem;
  margin-bottom: 1.375rem;
  align-self: flex-start;
`;

const Paragraph = styled.p`
  color: ${COLORS.TEXTS.texts};
  font-weight: 400;
`;

const Img = styled(Image)``;

const ImgProduct = styled(Image)`
  margin: 0 auto;
  @media screen and (min-width: ${tablet}) {
    width: 40rem;
    height: 36.25rem;
  }
`;

const BtnAddToCart = styled.button`
  display: flex;
  border: none;
  background-color: ${COLORS.BRAND.blue};
  align-items: center;
  justify-content: center;
  padding: 0.625rem 0;
  color: ${COLORS.SHAPES.white_low};
  cursor: pointer;
  gap: 0.75rem;
  transition: 300ms all ease-in-out;
  border-radius: 4px;

  &:hover {
    opacity: 0.8;
  }
`;

const TextButton = styled.p`
  text-transform: uppercase;
  font-weight: bold;
`;

const WrapperInfo = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;

  @media screen and (min-width: ${laptop}) {
    display: flex;
  }

`;

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

const SmallTitle = styled.p`
  padding-bottom: 0.75rem;
`;

const CentralTitle = styled.h4`
  font-size: 2rem;
  font-weight: 300;
`;

const Price = styled.p`
  color: ${COLORS.FONT.black};
  font-weight: bold;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  margin-top: 0.25rem;
`;

const Shipping = styled.p`
  margin-bottom: 3.625rem;
  font-size: 0.75rem;
`;

const Description = styled.div`
  @media screen and (min-width: ${tablet}) {
    margin-bottom: 7.5rem;
  }
`;

const TitleDescription = styled.p`
  color: ${COLORS.ICONS.gray_icon};
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-weight: 500;
`;

const Details = styled.p`
  font-size: 0.875rem;
`;
export {
  Container,
  BackToHome,
  Paragraph,
  Img,
  ImgProduct,
  BtnAddToCart,
  TextButton,
  WrapperInfo,
  TextArea,
  InfoProduct,
  SmallTitle,
  CentralTitle,
  Price,
  Shipping,
  Description,
  TitleDescription,
  Details,
};

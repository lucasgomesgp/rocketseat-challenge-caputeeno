import { COLORS } from "@/utils/colors-guide";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Container = styled(Link)`
  text-decoration: none;
`;
const Img = styled(Image)`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
const Description = styled.p`
  font-weight: 100;
  color: ${COLORS.FONT.gray};
  border-bottom: 1px solid ${COLORS.SHAPES.two};
  padding-bottom: 0.5rem;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
`;
const Price = styled.p`
  color: ${COLORS.FONT.black};
  font-size: 0.875rem;
  font-weight: bold;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
`;

export { Container, Img, Description, Price };

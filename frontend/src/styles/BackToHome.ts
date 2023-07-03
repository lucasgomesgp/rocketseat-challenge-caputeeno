import { COLORS } from "@/utils/colors-guide";
import Link from "next/link";
import { styled } from "styled-components";

const BtnBack = styled(Link)`
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


export { BtnBack, Paragraph };

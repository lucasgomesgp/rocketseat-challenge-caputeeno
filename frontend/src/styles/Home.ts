import { mobile } from "@/utils/break-points";
import styled from "styled-components";

const Wrapper = styled.main`
  padding-bottom: 2rem;
  padding-top: 2.125rem;
`;

const WrapperPag = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (min-width: ${mobile}) {
    justify-content: space-around;
    gap: 24.4rem;
  }
`;
const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  padding: 0 10rem;
  padding-bottom: 4.5rem;
`;

const HiddenDiv = styled.div`
  display: block;
`;

export { Wrapper, WrapperPag, ContainerCards, HiddenDiv };

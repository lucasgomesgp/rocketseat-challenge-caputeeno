import { big_laptop, laptop, mobile, tablet } from "@/utils/break-points";
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
    margin-top: 2rem;
  }
`;
const ContainerCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
  justify-content: center;
  padding-bottom: 4.5rem;
  
  @media screen and (min-width: ${tablet}){
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 0 10rem;
    gap: 0.5rem;
  }
  @media screen and (min-width: ${laptop}){
    gap: 2rem;
  }
`;

const HiddenDiv = styled.div`
  display: block;
`;

export { Wrapper, WrapperPag, ContainerCards, HiddenDiv };

import { laptop } from "@/utils/break-points";
import { styled } from "styled-components";

const Container = styled.div`
  margin-bottom: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: ${laptop}){
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Text = styled.p`
`;

const Price = styled.p`
`;

export { Container, Text, Price };

import { Container, Price, Text } from "@/styles/ItemSummary";
import { formatToMoney } from "@/utils/format-money";

interface Props {
  isBold?: boolean;
  text: string;
  price: number;
}

export default function ItemSummary({ isBold = false, text, price }: Props) {
  return (
    <Container>
      <Text>{text}</Text>
      <Price>{formatToMoney(price)}</Price>
    </Container>
  );
}

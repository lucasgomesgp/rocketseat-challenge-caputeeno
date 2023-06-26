import { Container, Description, Img, Price } from "@/styles/Card";
import { formatToMoney } from "@/utils/format-money";

interface Props {
  id: string;
  name: string;
  description: string;
  image_url: string;
  price: number;
}
export default function Card({
  id,
  name,
  description,
  image_url,
  price,
}: Props) {
  const money = price / 100;
  return (
    <Container href={`/product/${id}`}>
      <Img src={image_url} alt={name} width={256} height={300} priority />
      <Description>{description}</Description>
      <Price>{formatToMoney(money)}</Price>
    </Container>
  );
}

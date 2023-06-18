import { Container, Description, Img, Price } from "@/styles/Card";

interface Props {
  id: string;
  name: string;
  description: string;
  image_url: string;
}
export default function Card({id, name, description, image_url}:Props) {
  return (
    <Container href={`/product/${id}`}>
      <Img src={image_url} alt={name} width={256} height={300}/>
      <Description>{description}</Description>
      <Price>R$ 50,00</Price>
    </Container>
  );
}

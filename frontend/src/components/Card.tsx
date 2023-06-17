import { Container, Description, Img, Price } from "@/styles/Card";

interface Props {
  name: string;
  description: string;
  image_url: string;
}
export default function Card({name, description, image_url}:Props) {
  return (
    <Container>
      <Img src={image_url} alt={name} width={256} height={300}/>
      <Description>{description}</Description>
      <Price>R$ 50,00</Price>
    </Container>
  );
}

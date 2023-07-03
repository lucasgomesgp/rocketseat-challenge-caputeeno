import { BtnBack, Paragraph } from "@/styles/BackToHome";
import { IconBack } from "./icons/IconBack";

export default function BackToHome() {
  return (
    <BtnBack href={"/"}>
      <IconBack />
    <Paragraph>Voltar</Paragraph>
  </BtnBack>
  )
}

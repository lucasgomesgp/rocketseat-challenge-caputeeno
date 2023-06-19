import { BtnBack, Img, Paragraph } from "@/styles/BackToHome";

export default function BackToHome() {
  return (
    <BtnBack href={"/"}>
    <Img
      alt="Icon back home"
      src="/icons/arrow-back.svg"
      width={32}
      height={32}
    />
    <Paragraph>Voltar</Paragraph>
  </BtnBack>
  )
}

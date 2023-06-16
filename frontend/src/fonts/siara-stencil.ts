import { Saira, Saira_Stencil_One } from "next/font/google";

export const saira_stencil = Saira_Stencil_One({
  subsets: ["latin"],
  weight: "400",
});

export  const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

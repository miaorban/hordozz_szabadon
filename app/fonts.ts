import { Poppins } from "next/font/google";

const montserrat = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],   
  display: "swap",
  preload: true,
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--poppins-font",
});

export { montserrat };

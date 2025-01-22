import { Poppins, Montserrat } from "next/font/google";

const montserrat = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],   
  display: "swap",
  preload: true,
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--poppins-font",
});

const montserrat_real = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],   
  display: "swap",
  preload: true,
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--poppins-font",
});

export { montserrat, montserrat_real };

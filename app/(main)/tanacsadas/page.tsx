import React from "react";
import Introduction from "../components/consultation/Introduction";
import Consultation from "../components/consultation/Consultation";

const consultations = [
  {
    title: "Hordozóválasztó",
    subTitle: "online",
    price: "5 000 Ft",
    duration: 20,
    id: "hordozovalaszto",
    items: [
      `csatos hordozóra váltasz, de túl nagy a kínálat és nem tudod, melyik lenne jó rátok`,
      `kinéztél egy hurcit, de nem tudod megfelelő lesz-e nektek`,
      `nem akarsz napokat beleölni, hogy a hordozókat böngészd`,
      `babádat várod és már tudod, hogy hordozni szeretnéd`
    ],
    bookingUrl: "https://cal.com/hordozz-szabadon/hordozovalaszto",
    // bookingUrl: "/tanacsadas/foglalas/hordozovalaszto",
  },
  {
    title: "Mini",
    subTitle: "online/személyesen",
    price: "8 000 Ft",
    duration: 30,
    id: "mini",
    items: [
      `nem tudod, jól használod-e a hordozód`,
      `sír a babád a hordozóban`,
      "ha eddig elöl hordoztál, de már úgy érzed, ideje hátratenni a babát",
      "ha fel szeretnél próbálni két-három különböző eszközt",
      "ha nagyobb gyerkőcöt szeretnél hordozni"
    ],
    bookingUrl: "https://cal.com/hordozz-szabadon/mini",
    // bookingUrl: "/tanacsadas/foglalas/mini",
  },
  {
    title: "Maxi",
    subTitle: "online/személyesen",
    price: "20 000 Ft",
    duration: 90,
    id: "maxi",
    className: `bg-[url('/maxi_consultation_bg.png')] bg-no-repeat bg-top bg-cover pt-24`,
    items: [
      "teljesen új vagy a hordozásban és pici babát szeretnél hordozni.",
      `még nem tudod, melyik eszköz lenne jó nektek, ilyenkor megmutatok 4-5 típust és segítek dönteni`,
      `ha a hordozás alapjait szeretnéd megtanulni: hogy biztonságos,
        melyik életszakaszban milyen eszköz ajánlott, hogy öltözködjetek, mikor
        teheted hátra a babád, hogy tudod őt szoptatni vagy cumisüveggel
        táplálni hordozás közben és még sok fontos téma.`
    ],
    bookingUrl: "https://cal.com/hordozz-szabadon/maxi",
    // bookingUrl: "/tanacsadas/foglalas/maxi",
  },
];

export default function Page() {
  return (
    <>
      <Introduction />
      <div
        className="bg-[url('/intro_bg.svg')] 
        h-48 md:h-64 
        bg-cover bg-bottom
        mt-[-80px] md:mt-[-80px] 
        mb-[-80px] md:mb-[-150px]"
      ></div>
      <div
        className="bg-[url('/mini_tanacsadas.svg')] bg-no-repeat 
        bg-cover bg-center"
      >
        {consultations.map((consultation, index) => (
          <Consultation consultation={consultation} key={index} />
        ))}
      </div>
    </>
  );
}

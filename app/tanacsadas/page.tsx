import React from 'react';
import Introduction from '../components/consultation/Introduction';
import Consultation from '../components/consultation/Consultation';

const consultations = [
  {
    title: "Hordozóválasztó",
    subTitle: "online",
    price: "5 000 Ft",
    duration: 20,
    id: "hordozovalaszto",
    items: [
      `szeretnél jó minőségű, biztonságos eszközt választani`,
      `elvesztél a hordozók óriási kínálatában és tudni szeretnéd, melyik eszköz lenne nektek megfelelő`,
      `babádat várod és már tudod, hogy hordozni szeretnéd`,
      `fel szeretnél készülni, hogy mikortól, hogyan és mennyit hordozhatsz`,
      `bizonytalan vagy, hogy miért lenne jó a hordozás a babádnak és neked`,
    ],
    bookingUrl: "https://app.minup.io/book/hordozz-szabadon/service/28949",
  },
  {
    title: "Mini",
    subTitle: "online/személyesen",
    price: "8 000 Ft",
    duration: 30,
    id: "mini",
    items: [
      `már van egy eszközöd, de bizonytalan vagy, hogy jól használod-e.
        Például jól van-e a baba a kendőben vagy megfelelő-e már neki a
        csatos hordozód.`,
      `ha sír a babád a hordozóban és nem tudod, miért. Minden baba
        szereti a hordozást, úgyhogy biztos, hogy megtaláljuk az okát.`,
      "ha eddig elöl hordoztál, de már úgy érzed, ideje hátratenni a babát.",
      "ha fel szeretnél próbálni két-három különböző eszközt.",
      "ha nagyobb gyerkőcöt szeretnél hordozni.",
      "ha szoptatós, cumisüveges pozíciókat szeretnél megismerni.",
    ],
    bookingUrl: "https://app.minup.io/book/hordozz-szabadon/service/25699",
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
      `szeretnél kipróbálni többféle eszközt is, hogy megtaláljuk azt, ami
        hozzátok illik`,
      `ha a hordozás alapjait szeretnéd megtanulni: hogy biztonságos,
        melyik életszakaszban milyen eszköz ajánlott, hogy öltözködjetek, mikor
        teheted hátra a babád, hogy tudod őt szoptatni vagy cumisüveggel
        táplálni hordozás közben és még sok fontos téma.`,
      `ha úgy érzed, akkor a konzultációt két részre bonthatjuk. Miután
        minden kérdésedre választ kaptál és gyakoroltál velem, utána
        otthonod nyugalmában elkezdhetsz hordozni. Miután szereztél egy kis
        tapasztalatot és új kérdések merültek fel vagy még marad benned
        kétely, akkor személyesen vagy online a fennmaradó időben azzal
        foglalkozunk, amire szükséged van.`,
    ],
    bookingUrl: "https://app.minup.io/book/hordozz-szabadon/service/25704",
  },
];

export default function Page() {

  return (
    <>
      <Introduction />
      <div className="bg-[url('/intro_bg.svg')] 
        h-48 md:h-64 
        bg-cover bg-bottom
        mt-[-80px] md:mt-[-80px] 
        mb-[-80px] md:mb-[-150px]"></div>
      <div className="bg-[url('/mini_tanacsadas.svg')] bg-no-repeat 
        bg-cover bg-center">
        {
          consultations.map((consultation, index) => 
            <Consultation consultation={consultation} key={index}/> )
        }
      </div>
    </>
  );
}
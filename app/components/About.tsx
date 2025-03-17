import PageTitle from "@/app/components/common/PageTitle";
import Image from 'next/image';
import { Link } from "@nextui-org/react";

export default function About() {
  return (
    <div className="flex justify-center bg-[url('/bg_self_introduction.png')]
     bg-no-repeat bg-cover
     [background-position-y:50px]
     ">
      <div className="max-w-[900px]">
        <PageTitle title="RÓLAM"/>
        <div className="flex flex-col md:flex-row
          justify-center items-center
          gap-x-28
          gap-y-12
          py-8 sm:py-20
          px-8">
            <Image
              className="drop-shadow-xl rounded-full aspect-square object-cover"
              alt="Image"
              src="/profil.jpeg"
              style={{objectPosition: "0 -20px"}}
              width={300}
              height={300}
            />
            <span className="max-w-[800px]
              mb-8
              text-md md:text-xl
              text-center md:text-left
              italic
              text-primary">
                {/* <p>
                  Mikor a babámat vártam, már tudtam, hogy hordozni szeretnék. Vettem egy szövött kendőt, amivel megküzdöttünk a férjemmel, 
                  de sikerrel használtuk végül. Miközben gyakoroltunk, vettem egy félcsatost is. 
                  Amikor a kendőről váltani akartunk, akkor kölcsönöztünk egy csatos hordozót, ami szörnyen kényelmetlen volt. 
                </p> */}
                <p>
                  {/* Úgy gondolom, az útkeresésemmel nem vagyok egyedül.  */}
                  Megtalálni azt a hordozót/hordozókat, amik babánk egyes életszakaszaiban tökéletesen kiszolgálnak, 
                  nem egyszerű. Ha pedig megvan az eszköz, azt meg kell kötni, be kell állítani úgy, hogy kényelmes 
                  legyen babának és mamának is.
                  

                </p>
                <p className="my-2"></p>
                <p>Hordozási tanácsadóként célom támogató segítséget nyújtani a családoknak ezen az úton. 
                Kérdezni, megismerni őket és együtt megtalálni azt a megoldást, ami igazán illik hozzájuk.</p>
                <div className="flex pt-2 justify-center">
                  <Link href="https://hordozo.hu/" target="_blank">
                    <img src="okleveles_tanacsado.png" 
                      alt="Hordozóház logo" className="w-20"/>
                  </Link>
                  {/* <Link href="https://shop.magyarinda.hu/" target="_blank">
                    <img src="https://magyarinda.cdn.shoprenter.hu/custom/magyarinda/image/cache/w220h100m00/New_Sablon_2023/Logo/magyarinda-logo.png?v=1691843046" 
                      alt="Hordozóház logo" className="w-20"/>
                  </Link> */}
                </div>
            </span>
        </div>
      </div>
    </div>
  );
}
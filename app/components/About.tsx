import PageTitle from "@/app/components/common/PageTitle";
import Image from 'next/image';

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
                  Hordozási tanácsadóként célom támogató segítséget nyújtani a családoknak ezen az úton. 
                  Kérdezni, megismerni őket és együtt megtalálni azt a megoldást, ami igazán illik hozzájuk.

                </p>
            </span>
        </div>
      </div>
    </div>
  );
}
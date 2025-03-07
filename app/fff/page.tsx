import PageTitle from "@/app/components/common/PageTitle";
import Image from 'next/image';
import { Button, Link } from "@nextui-org/react";

export default function About({ link, name }) {
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
              src="/fit_check_kartya.jpg"
              style={{objectPosition: "0 -80px"}}
              width={300}
              height={300}
            />
            <span className="max-w-[800px]
              mb-8
              text-sm md:text-md
              text-center md:text-left
              text-primary">
                <p>
                  Kedves {name}!
                </p>
                <p className="">Köszönöm, hogy megtiszteltél bizalmaddal és hozzám fordultál! 🧡</p>
                <p className="mt-1">Amennyiben úgy érzed, más anyukáknak is hasznos lenne 
                  <i> online is igénybevehető</i> szolgáltatásaim bármelyike, 
                  </p>
                  <ul className="list-disc ml-6">
                    <li>Hordozóválasztó tanácsadás</li>
                    <li>Fit check</li>
                    <li>Mini/maxi tanácsadás</li>
                  </ul>
                  <p>akkor kérlek, oszd meg velük elérhetőségem!</p>
                <div className="flex pt-2">
                  <Button as={Link} href={link} target="_blank">
                    Videó megtekintése
                  </Button>
                </div>
            </span>
        </div>
      </div>
    </div>
  );
}
import { Link } from "@heroui/react";
import Image from 'next/image';
import hordozoEmber1 from '@/public/hordozo_ember_1.svg';

export default function Consultation() {
  return (
    <div className="bg-hordozas-brown md:py-16">
      <div className="flex flex-col md:flex-row justify-center md:justify-between py-4 md:py-10
      gap-4">

      <div className="flex flex-col sm:pl-16 md:basis-3/6">
          {/* <p className="font-medium text-4xl md:text-7xl mb-4 md:mb-16 p-8 sm:p-0 whitespace-pre-line">
          Konzultáció
          otthonodban
          vagy a stúdiómban</p> */}
          <h2 className="font-medium text-4xl md:text-7xl mb-4 md:mb-16 p-8 sm:p-0 whitespace-pre-line">
            Hordozási
            tanácsadás
            stúdiómban
          </h2>
          <div className="text-center flex flex-col mb-20 md:mb-16">
            <p className="text-xl md:text-2xl mb-4 font-medium">Mini tanácsadás</p>
            <h3 className="text-xl md:text-2xl mb-4 font-light">
              Ha csak néhány kérdésed van, segítség kell az eszközválasztásban 
              vagy valahol elakadtatok, akkor ez a konzultáció nektek szól.
            </h3>
            <div className="border-black border-2 max-w-fit p-4 text-md md:text-2xl self-center">
              <Link href="#mini-konzultacio">Több infó</Link>
            </div>
          </div>

          <div className="text-center flex flex-col">
            <p className="text-xl md:text-2xl mb-4 font-medium">Hosszú tanácsadás</p>
              <h3 className="text-xl md:text-2xl mb-4 font-light">
                  Ha azt sem tudod, hol kezdd, elvesztél az eszközök sokaságában,
                többféle kötést szeretnél megtanulni, szeretnél hordozóban szoptatni, 
                akkor ez konzultáció lesz a ti utatok.
              </h3>
            <div className="border-black border-2 max-w-fit p-4 text-md md:text-2xl self-center">
                <Link href="#hosszu-konzultacio">Több infó</Link>
            </div>
          </div>

        </div>

        <div className="flex justify-center
        p-8 xs:p-16 md:basis-1/2 h-[500px] md:h-auto">
          <div className="">
            <Image
                alt="Hordozó ember"
                src={hordozoEmber1}
                style={{
                  width: 'auto',
                  height: '100%',
                }}
              />
          </div>
        </div>

      </div>
    </div>
  );
}
  
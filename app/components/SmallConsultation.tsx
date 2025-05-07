import { Divider } from "@heroui/react";
import Image from 'next/image';
import hordozoEmber3 from '@/public/hordozo_ember_3.svg';

export default function SmallConsultation() {
  return (
    <div className="bg-hordozas-brown md:py-16 px-4">
      <div className="flex flex-col md:flex-row justify-center md:justify-between py-4 md:py-10
      gap-4">

      <div className="flex flex-col sm:pl-16 md:basis-3/6 items-center">
          <p className="font-medium text-4xl md:text-7xl mb-4 md:mb-16 p-8 sm:p-0"
            id="mini-konzultacio">
            Mini tanácsadás</p>
          <Divider className="max-w-96 mb-4 md:mb-24"/>
          <div className="relative h-full w-full min-h-[300px]">
            <Image
              alt="Hordozó ember"
              src={hordozoEmber3}
              fill
            />
          </div>
        </div>

        <div className="flex justify-center
        p-8 xs:p-16 py-4 md:basis-1/2">
          <div className="my-auto max-h-fit text-xl md:text-2xl">
            <p className="text-center mb-12">Mikor javaslom neked ezt a konzultációt?</p>
            <ul className="list-disc font-light">
              <li className="mb-4">Ha már van egy eszközöd, de bizonytalan vagy, hogy jól használod-e. 
                Például jól van-e a baba a kendőben vagy megfelelő-e már neki a csatos 
                hordozód.
              </li>
              <li className="mb-4">
                Ha sír a babád a hordozóban és nem tudod, miért. 
                Minden baba szereti a hordozást, úgyhogy biztos, hogy megtaláljuk az okát.
              </li>
              <li className="mb-4">
                Ha eddig elöl hordoztál, de már úgy érzed, ideje hátratenni a babát.
              </li>
              <li className="mb-4">
                Ha fel szeretnél próbálni egy-két típusú eszközt.
              </li>
              <li className="mb-4">
                Ha nagyobb gyerkőcöt szeretnél hordozni.
              </li>
              <li className="mb-4">
                Ha szoptatós, cumisüveges pozíciókat szeretnél megismerni.
              </li>
            </ul>
            <p className="mt-16">A konzultáció időtartama 30 perc, díja 8&nbsp;000 Ft.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
  }
  
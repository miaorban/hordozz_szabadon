import { Divider } from "@nextui-org/react";
import Image from 'next/image';
import hordozoEmber4 from '@/public/hordozo_ember_4.svg';

export default function LongConsultation() {
  return (
    <div className="bg-hordozas-brown md:py-16 px-4">
      <div className="flex flex-col md:flex-row justify-center md:justify-between py-4 md:py-10
      gap-4">

        <div className="flex justify-center
        p-8 xs:p-16 md:py-36 md:basis-1/2">
          <div className="my-auto max-h-fit text-xl md:text-2xl">
            <p className="text-center mb-12">Mikor javaslom neked ezt a konzultációt?</p>
            <ul className="list-disc font-light">
              <li className="mb-4">Ha teljesen új vagy a hordozásban és pici babát szeretnél hordozni.
              </li>
              <li className="mb-4">
                  Szeretnél kipróbálni többféle eszközt is, 
                  hogy megtaláljuk azt, ami hozzátok illik.
              </li>
              <li className="mb-4">
                Átbeszélni a hordozás alapjait: hogy biztonságos, melyik életszakaszban 
                milyen eszköz ajánlott, hogy öltözködjetek, mikor teheted hátra a babád, 
                hogy tudod őt szoptatni vagy cumisüveggel táplálni hordozás közben 
                és még sok fontos téma.
              </li>
              <li className="mb-4">
                Ha úgy érzed, akkor a konzultációt két részre bonthatjuk.
                 Miután minden kérdésedre választ kaptál és gyakoroltál velem, 
                 utána otthonod nyugalmában elkezdhetsz hordozni. 
                 Miután szereztél egy kis tapasztalatot és új kérdések merültek 
                  fel vagy még marad benned kétely, akkor személyesen vagy online
                  a fennmaradó időben azzal foglalkozunk, amire szükséged van.
              </li>
            </ul>
            <p className="mt-16">A konzultáció időtartama 90 (60+30) perc, díja 20&nbsp;000 Ft.</p>
          </div>
        </div>

        <div className="order-first md:order-last  nagyflex flex-col sm:pl-16 md:basis-3/6">
          <p className="font-medium text-4xl md:text-7xl mb-4 md:mb-16 p-8 sm:p-0"
            id="hosszu-konzultacio">
            Hosszú tanácsadás</p>
          <Divider className="max-w-96 mb-4 md:mb-24"/>
          <div className="relative bg-red h-96 max-h-[300px] md:max-h-[600px]">
            <Image
              alt="Hordozó ember"
              src={hordozoEmber4}
              fill
            />
          </div>
        </div>
        
      </div>
    </div>
  );
  }
  
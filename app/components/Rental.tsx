import { Divider } from "@heroui/react";
import Image from 'next/image';

export default function Rental() {
  return (
    <div className="py-4 md:pt-64 md:pb-24">
        <div className="font-medium text-4xl md:text-7xl mb-4 md:mb-16 p-8 sm:p-0">
          <p>Hordozóeszköz kölcsönzés</p>
        </div>
        <p className="text-xl md:text-2xl mb-4 text-center">Otthonod kényelmében próbálhatod ki,
              hogy melyik a legkényelmesebb választás
              számodra és babád számára.</p>
        <Divider className="my-4 md:my-16"/>
        <div className="flex justify-center mb-12">
          <ul className="text-xl md:text-2xl">
            <li>
              <Image className="inline mr-4" src="/logo.svg" width={20} height={20} alt="Logo"/>
              Szövött kendő
            </li>
            <li>
              <Image className="inline mr-4" src="/logo.svg" width={20} height={20} alt="Logo"/>
              Rugalmas kendő
            </li>
            <li>
              <Image className="inline mr-4" src="/logo.svg" width={20} height={20} alt="Logo"/>
              Karikás kendő
            </li>
            <li>
              <Image className="inline mr-4" src="/logo.svg" width={20} height={20} alt="Logo"/>
              Caboo
            </li>
            <li>
              <Image className="inline mr-4" src="/logo.svg" width={20} height={20} alt="Logo"/>
              Csatos hordozók újszülött kortól
            </li>
            <li>
              <Image className="inline mr-4" src="/logo.svg" width={20} height={20} alt="Logo"/>
              Félcsatos hordozók újszülött kortól
            </li>
            <li>
              <Image className="inline mr-4" src="/logo.svg" width={20} height={20} alt="Logo"/>
              Mei tai újszülött kortól
            </li>
            <li>
              <Image className="inline mr-4" src="/logo.svg" width={20} height={20} alt="Logo"/>
               Manduca XT
            </li>
            <li>
              <Image className="inline mr-4" src="/logo.svg" width={20} height={20} alt="Logo"/>
              Möbius Newborn
            </li>
            <li>
              <Image className="inline mr-4" src="/logo.svg" width={20} height={20} alt="Logo"/>
              Kibi
            </li>
            <li>
              <Image className="inline mr-4" src="/logo.svg" width={20} height={20} alt="Logo"/>
                Felli
            </li>
            <li>
              <Image className="inline mr-4" src="/logo.svg" width={20} height={20} alt="Logo"/>
              ... a teljes listáért keress üzenetben!
            </li>
          </ul>
        </div>
        {/* <div className="flex flex-wrap justify-center md:justify-evenly mb-12 md:mb-24 ">
          <div>
            <Image src="/manduca_xt.webp" alt="Manduca XT" width={300} />
            <Divider className="my-4"/>
            <div className="flex text-xl md:text-2xl mb-4">
              <div className="pr-4 font-semibold">
                <p>Név</p>
                <p>Életkor</p>
                <p>Súly</p>
              </div>
              <div className="">
                <p>Manduca XT</p>
                <p>6-8 hét → 3,5 év</p>
                <p>3,5 → 20 kg</p>
              </div>
            </div>
          </div>

          <div>
            <Image src="/liliputi_rugalmas_hordozokendo_pink_label__burgundi_7189.jpg" alt="Manduca XT" width={300} />
            <Divider className="my-4"/>
            <div className="flex text-xl md:text-2xl mb-4">
              <div className="pr-4 font-semibold">
                <p>Név</p>
                <p>Életkor</p>
                <p>Súly</p>
              </div>
              <div className="">
                <p>Rugalmas kendő</p>
                <p>bármilyen pici baba</p>
                <p>születés pillanata → 10-14kg</p>
              </div>
            </div>
          </div>

          <div>
            <Image src="/mobius_newborn.jpg" alt="Manduca XT" width={300} />
            <Divider className="my-4"/>
            <div className="flex text-xl md:text-2xl mb-4">
              <div className="pr-4 font-semibold">
                <p>Név</p>
                <p>Életkor</p>
                <p>Súly</p>
              </div>
              <div className="">
                <p>Möbius Newborn</p>
                <p>születés pillanata → 1 év</p>
                <p>3kg</p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="text-xl md:text-2xl mb-4 text-center">
            <div className="mb-4 md:mb-16">
              Közel 30 hordozóeszköz közül választhatsz, hogy biztos megtaláld azt, 
              ami igazán illik hozzátok.
            </div>
            <div className="font-light">
              Az eszközök bérlésének ára egységesen 500 Ft/nap. 
              Annyi időre viszed el, amennyire szeretnéd, nincs minimum vagy maximum 
              bérleti idő. Ha postán utazik az eszköz, akkor a bérlet lejárta utáni 
              napon kell majd feladnod.
            </div>
          </div>
    </div>
  );
}
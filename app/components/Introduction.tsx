import { Link, Button } from "@nextui-org/react";
import Image from 'next/image';

export default function Introduction() {
  return (
    // xl:pt-[10rem] 2xl:pt-[24rem]
    <div className="
    bg-[url('/Mobil.png')] sm:bg-[url('/intro_bg.png')] bg-cover 
    [background-position-x:500px] sm:bg-bottom
    flex justify-end 
    pt-28 sm:pt-74 
    pb-20 md:pb-96
    lg:py-[20%]
    px-6 md:px-48
    text-center md:text-right
    ">
      <div className="flex flex-col 
      justify-between
      w-full md:max-w-[600px]
      gap-y-12
      ">
        <div className="flex justify-center md:hidden my-8">
          <Image src="/logo_alul_nev.svg" alt="Orbán Mia babahordozási tanácsadó logo" 
              width={180} height={120} className=""/>
        </div>
        
        <div className="pt-12">
          <div className="flex-1 text-5xl font-bold
          text-[white] sm:text-secondary 
          text-center md:text-right">
            Mert a babád
            természetes 
            helye rajtad van!
          </div>
          <div className="hidden md:block text-3xl text-right italic text-primary
          mt-8">A testközelség a babák alapvető
            szükséglete, így természetes helyük rajtad,
            a testeden van.
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-6 gap-x-24
        items-center sm:justify-center
        ">
          <Button as={Link} href="/tanacsadas" size="lg"
            className="shadow-xl text-bold text-secondary font-bold bg-[white]
            w-48 lg:w-72 text-xl py-8 rounded-3xl">TANÁCSADÁS</Button>
          <Button as={Link} href="/fitcheck" size="lg" color="secondary" 
            className="shadow-xl text-bold text-[white] font-bold 
            w-48 lg:w-72 text-xl  py-8 rounded-3xl">FIT CHECK</Button>
        </div>
      </div>
    </div>
  );
}
  
import { Link, Button } from "@nextui-org/react";

export default function Introduction() {
  return (
    <div className="
    bg-[url('/kucko_bg_hullamos.png')] bg-cover bg-bottom
    [background-position-x:-180px] sm:[background-position-x:0]
    text-[color:blue]
    pt-28 md:pt-48 xl:py-72 2xl:py-72
    pb-4 md:pb-40
    px-6 lg:px-64 
    text-center md:text-right
    ">
      <div className="flex flex-wrap sm:flex-no-wrap justify-center
      gap-x-6
      text-[white]">
        <div className="text-5xl md:text-5xl font-bold
        sm:max-w-96">Hordozási tanácsadás stúdiómban</div>
        <div className="italic text-xl
          sm:max-w-96 
          sm:text-left
          mt-4 sm:mt-0">Látogass el stúdiómba, ahol együtt kiválasztjuk a számodra
          és babád számára megfelelő hordozóeszközt.
          A biztonságos és egészséges babahordozást szem előtt tartva megtanulhatod, hogyan
          állítsd be a hordozót, és hogyan helyezd bele babádat.
        </div>
      </div>
      <div className="flex
        flex-col sm:flex-row 
        gap-x-6 gap-y-6 
        justify-center items-center
        mt-12">
          <Button as={Link} href="https://app.minup.io/book/hordozz-szabadon" size="lg" 
            className="shadow-xl text-bold text-secondary font-bold bg-[white]
            w-72 text-xl py-8 rounded-3xl">SZABAD IDŐPONTOK</Button>
      </div>
      {/* <div className="flex
        flex-col sm:flex-row 
        gap-x-6 gap-y-6 
        justify-center items-center
        mt-12">
          <Button as={Link} href="/tanacsadas#mini" size="lg" color="primary" 
            className="shadow-xl text-bold text-secondary font-bold 
            w-72 text-xl">CSOMAGOK</Button>
          <Button as={Link} href="/kolcsonzes" size="lg" color="secondary" 
            className="shadow-xl text-bold text-primary font-bold 
            w-72 text-xl">ESZKÖZKÖLCSÖNZÉS</Button>
      </div> */}
    </div>
  );
}

import { Link, Button } from "@heroui/react";

export default function Introduction() {
  return (
    <div
      className="
    bg-[url('/kucko_bg_hullamos.png')] bg-cover bg-bottom
    [background-position-x:-180px] sm:[background-position-x:0]
    text-[color:blue]
    pt-28 md:pt-48 
    xl:py-72 2xl:py-72
    pb-4 md:pb-40
    px-6
    text-center
    "
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4
      text-[white] max-w-4xl mx-auto"
      >
        <div
          className="text-center
          text-4xl sm:text-5xl font-bold
                     md:text-right"
        >
          Hordozási tanácsadás online vagy Keszthelyen
        </div>
        <div
          className="text-center
          italic text-xl
          
          md:text-left
          mt-4 sm:mt-0"
        >
          Látogass el stúdiómba vagy beszéljünk online, hogy együtt kiválasszuk
          a számodra és babád számára megfelelő hordozóeszközt az egészséges és
          biztonságos hordozás szempontjait szem előtt tartva.
        </div>
      </div>
      <div
        className="flex
        flex-col sm:flex-row 
        gap-x-6 gap-y-6 
        justify-center items-center
        mt-12"
      >
        <Button
          as={Link}
          href="https://cal.com/hordozz-szabadon"
          target="_blank"
          size="lg"
          className="shadow-xl text-bold text-secondary font-bold bg-[white]
            w-72 text-xl py-8 rounded-3xl"
        >
          SZABAD IDŐPONTOK
        </Button>
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

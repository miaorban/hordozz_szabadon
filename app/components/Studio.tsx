import PageTitle from "@/app/components/common/PageTitle";
import Contacts from "@/app/components/common/Contacts";
import { Button, Link } from "@nextui-org/react";

export default function Studio() {
  return (
    <div
      className="bg-[url('/studio.png')] bg-cover bg-center
        [background-position-x:-340px] sm:[background-position-x:0]
        text-[color:white]
        py-8 sm:py-20 md:py-36
        px-8
        flex justify-center"
    >
      <div className="max-w-[900px]">
        <PageTitle title="NÁLAD VAGY NÁLAM?" />
        <div
          className="flex
          flex-col md:flex-row
          text-center sm:text-justify
          gap-x-12
          mt-12
          text-xl"
        >
          <p className="w-full sm:w-1/2">
            Szeretettel várlak a Hordozós Kuckóban, akár Keszthelyen, akár
            online csatlakozol hozzám. Nyugodt, támogató légkörben tanulhatod
            meg a különböző kötéseket, a csatos hordozók használatát, vagy épp
            azt, amire most a leginkább szükséged van. Ha személyesen érkezel,
            természetesen lehetőség van szoptatásra, cumisüveges etetésre vagy
            peluscserére is – semmi rohanás, semmi stressz.
          </p>
          <p
            className="w-full sm:w-1/2
            mt-2 sm:mt-0"
          >
            Online tanácsadás esetén is ugyanez a figyelem és segítség vár:
            élőben beszélgetünk, és gyakorlóbabával mutatom meg a technikákat.
            Te is gyakorolhatsz otthon, akár baba nélkül is. A tanulás menete:
            először a technikát átbeszéljük, demó babával gyakoroljuk, és amikor
            már magabiztos vagy, akkor kerül bele a saját babád is – akár
            személyesen, akár a képernyő másik oldalán.
          </p>
        </div>
        <div className="pt-8">
          <Contacts />
        </div>
        <div
          className="flex
        flex-col
        gap-x-6
        justify-center items-center
        mt-12"
        >
          <Button
            as={Link}
            href="https://cal.com/hordozz-szabadon"
            size="lg"
            className="shadow-xl text-bold text-secondary font-bold bg-[white]
             lg:w-72 text-xl py-8 rounded-3xl text-center"
          >
            IDŐPONTFOGLALÁS
          </Button>
          <div>
            <small>online is!</small>
          </div>
        </div>
      </div>
    </div>
  );
}

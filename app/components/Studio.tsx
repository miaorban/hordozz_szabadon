import PageTitle from "@/app/components/common/PageTitle";
import Contacts from "@/app/components/common/Contacts";
import { Button, Link } from "@nextui-org/react";

export default function Studio() {
  return (
    <div className="bg-[url('/studio.png')] bg-cover bg-center
        [background-position-x:-340px] sm:[background-position-x:0]
        text-[color:white]
        py-8 sm:py-20 md:py-36
        px-8
        flex justify-center">
      <div className="max-w-[900px]">
        <PageTitle title="HORDOZÓS KUCKÓ"/>
        <div className="flex
          flex-col md:flex-row
          text-center sm:text-justify
          gap-x-12
          mt-12
          text-xl">
            <p className="w-full sm:w-1/2">Szeretettel várlak a kuckómban, ahol nyugodt körülmények között tanulhatod
              meg a kötéseket, a csatos hordozók használatát vagy éppen amire szükséged van.
              Ha szoptatni szeretnél vagy cumisüvegből etetni, peluscserére van szükség, akkor
              azt is nyugodtan elvégezheted.
            </p>
            <p className="w-full sm:w-1/2
            mt-2 sm:mt-0">
              A hordozókat élethű gyakorló babával próbálhatod ki, hogy érezd, milyen lesz majd
              a saját babáddal. Miután megtaláltad a szimpatikus hordozót, begyakoroltad a kötést a 
              demó babával és kellően magabiztosnak érzed magad, akkor kerül bele a te babád a hordozóba.
              
            </p>
        </div>
        <div className="pt-8">
          <Contacts/>
        </div>
        <div className="flex
        flex-col
        gap-x-6
        justify-center items-center
        mt-12">
          <Button as={Link} href="https://app.minup.io/book/hordozz-szabadon" size="lg"
            className="shadow-xl text-bold text-secondary font-bold bg-[white]
             lg:w-72 text-xl py-8 rounded-3xl text-center">
              IDŐPONTFOGLALÁS
          </Button>
          <div>
            <p className="text-sm">online is!</p>
          </div>
      </div>
      </div>
    </div>
  );
}
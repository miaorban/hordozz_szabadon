import { Card, Link } from "@heroui/react";
import Image from "next/image";
import Contacts from '@/app/components/common/Contacts';

export default function PaymentSuccesful() {
  return (
    <div
      className="flex flex-col items-center justify-center md:h-screen px-8 pb-8
      bg-[url('/maxi_consultation_bg.png')] bg-no-repeat bg-bottom bg-cover
            [background-position-y:15rem] lg:[background-position-y:30rem]"
    >
      <Card
        className="max-w-[700px] p-12 text-center pb-8
            "
      >
        <h1 className="text-4xl font-bold">Sikeres jelentkezés</h1>
        <p className="text-lg">
          Sikeresen jelentkeztél az ingyenes tanácsadásra!
        </p>
        <p className="text-md my-12">
          Augusztus 31-én a jelentkezők között kisorsolok egy ingyenes tanácsadást.
          A tancsadás történhet online vagy személyesen is, ahogy neked jobb. Nem kell, hogy hordozód
          legyen, nem kell, hogy babád legyen, ha érdeklődsz a hordozás iránt vagy hordozóválasztásban
          kell segítség, akkor is szeretettel várlak!
        </p>
        <p className="text-lg mb-4">
          Addig is ne felejts el bekövetni tiktokon hasznos tartalmakért!
        </p>
        <div className="flex justify-center">
          <Link
            className="mb-4"
            href="https://www.tiktok.com/@hordozz.szabadon"
            >
            <Image width={50} height={50} alt="TikTok" src="/tiktok.png" />
          </Link>
        </div>
        <p className="text-lg mb-4">
          Hordozz Szabadon - Mia
        </p>
      </Card>
    </div>
  );
}
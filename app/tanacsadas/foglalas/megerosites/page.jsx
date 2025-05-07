import { Card } from "@heroui/react";
import Contacts from '@/app/components/common/Contacts';

export default function PaymentSuccesful() {
  return (
    <div className="flex flex-col items-center justify-center md:h-screen px-8
    pb-8
    bg-[url('/maxi_consultation_bg.png')] bg-no-repeat bg-bottom bg-cover
            [background-position-y:15rem] lg:[background-position-y:30rem]">
      <Card className='max-w-[700px] p-12 text-center'>
        <h1 className="text-4xl font-bold">Sikeres foglalás</h1>
        <p className="text-lg">Köszönöm bizalmad, hogy hozzám fordultál!</p>
        <p className="text-md my-12">Foglalásod beérkezett hozzám és igyekszem azt mielőbb megerősíteni.
          Hamarosan visszaigazoló e-mailt fogsz tőlem kapni.
        </p>
        <Contacts useBlackIcons/>
      </Card>
    </div>
  );
}
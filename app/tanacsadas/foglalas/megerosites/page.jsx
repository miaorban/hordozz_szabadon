import { Card } from "@heroui/react";
import Contacts from '@/app/components/common/Contacts';

export default function PaymentSuccesful() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-8">
      <Card className='max-w-[500px] p-12 text-center'>
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
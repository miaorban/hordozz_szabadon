import { Card } from '@nextui-org/react';
import Contacts from '@/app/components/common/Contacts';

export default function PaymentSuccesful() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-8">
      <Card className='max-w-[500px] p-12 text-center'>
        <h1 className="text-4xl font-bold">Sikeres fizetés</h1>
        <p className="text-lg">Köszönöm bizalmad, hogy kérdéseddel hozzám fordultál!</p>
        <p className="text-md my-12">A válaszvideót 2 munkanapon belül az általad megadott e-mail címre küldöm.
          Amennyiben további kérdésed van, keres bátran elérhetőségeim bármelyikén.
        </p>
        <Contacts useBlackIcons/>
      </Card>
    </div>
  );
}
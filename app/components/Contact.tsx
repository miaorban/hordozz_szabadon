import { Link, Divider } from "@nextui-org/react";
import Image from 'next/image';
import hordozoEmber5 from '@/public/hordozo_ember_5.svg';

export default function Introduction() {
  return (
    <>
      <p className="font-medium text-3xl md:text-7xl mb-4 md:mb-16 p-8 sm:p-0 
        whitespace-pre-line">
        Szeretnék Veled dolgozni.
        Ha Te is, keress meg elérhetőségeim egyikén!
      </p>
      <Divider className="border-black mb-12"/>
      <div className="flex flex-col md:flex-row justify-center md:justify-between
      gap-4 md:py-16">
        
        <div className="flex flex-col px-8 xs:px-16 md:basis-3/6">
          <div className="text-xl md:text-2xl mb-4 md:mb-16">
            <p className="font-medium uppercase">Cím</p>
            <p className="mb-4 font-light">Keszthely, Ruszek József u. 54</p>
            <p className="font-medium uppercase">Telefon</p>
            <h3 className="mb-4 font-light">+36 70 320 0967</h3>
            <p className="font-medium uppercase">Email</p>
            <h3 className="font-light">mia@hordozzszabadon.hu</h3>
          </div>
          <div className="flex">
          <Link className="mr-3 md:mr-10" href="https://www.tiktok.com/@hordozz.szabadon">
            <Image
              width={150}
              height={50}
              alt="TikTok"
              src="/tiktok.png"
            />
          </Link>
            <Link href="https://www.facebook.com/hordozz.szabadon">
              <Image
                alt="Facebook"
                src="/facebook.png"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>
        
        <div className="order-last md:order-first flex justify-center
        md:basis-1/2">
          <Image
            alt="Hordozó ember"
            src={hordozoEmber5}
            height={350}
          />
        </div>
      </div>
    </>
  );
  }
  
import Image from "next/image";
import SocialMedia from "@/app/components/common/SocialMedia";

export default function Footer() {
  return (
    <div
      className="flex justify-between
      px-8 sm:px-16 md:px-32
      py-12"
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
      }}
    >
      <div
        className="flex flex-col
          gap-y-6"
      >
        <div className="flex flex-row items-center">
          <Image src="/Location_black.svg" alt="Image" width={50} height={50} />
          <span className="ml-2 italic">Keszthely, Ruszek József u. 54</span>
        </div>

        <div className="flex flex-row items-center">
          <Image src="/Phone_black.svg" alt="Image" width={50} height={50} />
          <span className="ml-2 italic">+36 70 320 0967</span>
        </div>

        <div className="flex flex-row items-center">
          <Image src="/Mail_black.svg" alt="Image" width={50} height={50} />
          <span className="ml-2 italic">mia@hordozzszabadon.hu</span>
        </div>
      </div>
      <SocialMedia />
    </div>
  );
}

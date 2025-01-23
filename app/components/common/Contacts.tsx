
import Image from "next/image";

export default function Contacts() {
  return (
    <div className="flex
      justify-around
      flex-col md:flex-row
      gap-x-12">
      <div>
        <div className="flex justify-center mb-2">
          <Image src="/Location.svg" alt="Image" width={50} height={50}/>
        </div>
        <div className="flex justify-center text-center">
          <i>Keszthely, Ruszek József u. 54</i>
        </div>
      </div>

      <div>
        <div className="flex justify-center mb-2">
          <Image src="/Phone.svg" alt="Image" width={50} height={50}/>
        </div>
        <div className="flex justify-center">
          <i>+36 70 320 0967</i>
        </div>
      </div>

      <div>
        <div className="flex justify-center mb-2">
          <Image src="/Mail.svg" alt="Image" width={50} height={50}/>
        </div>
        <div className="flex justify-center">
          <i>miaorban@gmail.com</i>
        </div>
      </div>
    </div>
  );
}
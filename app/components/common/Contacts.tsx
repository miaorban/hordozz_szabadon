
import Image from "next/image";

export default function Contacts({ useBlackIcons = false }) {
  return (
    <div
      className="flex
      justify-around
      flex-col md:flex-row
      gap-x-12"
    >
      <div>
        <div className="flex justify-center mb-2">
          <Image
            src={`/Location${useBlackIcons ? "_black" : ""}.svg`}
            alt="Image"
            width={50}
            height={50}
          />
        </div>
        <div className="fl ex justify-center text-center">
          <p>
            <i>Keszthely, Ruszek József u. 54</i>
          </p>
          <p><i>vagy Google Meet</i></p>
        </div>
      </div>

      <div>
        <div className="flex justify-center mb-2">
          <Image
            src={`/Phone${useBlackIcons ? "_black" : ""}.svg`}
            alt="Image"
            width={50}
            height={50}
          />
        </div>
        <div className="flex justify-center">
          <i>+36 70 320 0967</i>
        </div>
      </div>

      <div>
        <div className="flex justify-center mb-2">
          <Image
            src={`/Mail${useBlackIcons ? "_black" : ""}.svg`}
            alt="Image"
            width={50}
            height={50}
          />
        </div>
        <div className="flex justify-center">
          <i>miaorban@gmail.com</i>
        </div>
      </div>
    </div>
  );
}
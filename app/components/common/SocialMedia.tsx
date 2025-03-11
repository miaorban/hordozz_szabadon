import { Link } from "@nextui-org/react";
import Image from "next/image";

export default function SocialMedia({ small }: { small: boolean }) {
  return (
    <div className="flex">
        <Link className="mr-3 md:mr-10" href="https://www.tiktok.com/@hordozz.szabadon">
          <Image
            alt="Instagram"
            src="/tiktok.png"
            width={small ? 40 : 50}
            height={small ? 40 : 50}
          />
        </Link>
        <Link href="https://www.facebook.com/hordozz.szabadon">
          <Image
            alt="Facebook"
            src="/facebook.png"
            width={small ? 40 : 50}
            height={small ? 40 : 50}
          />
        </Link>
      </div>
  );
}
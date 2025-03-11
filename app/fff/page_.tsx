import PageTitle from "@/app/components/common/PageTitle";
import Image from "next/image";
import { Button, Link, Divider } from "@nextui-org/react";
import SocialMedia from "../components/common/SocialMedia";

export default function About({ link, name }: { link: string; name: string }) {
  return (
    <div
      className="flex justify-center bg-[url('/bg_self_introduction.png')]
     bg-no-repeat bg-cover
     [background-position-y:50px]
     "
    >
      <div className="max-w-[900px]">
        <PageTitle title="RÓLAM" />
        <div
          className="flex flex-col md:flex-row
          justify-center items-center
          gap-x-28
          gap-y-12
          py-8 sm:py-20
          px-8"
        >
          <Image
            className="drop-shadow-xl rounded-full aspect-square object-cover"
            alt="Image"
            src="/fit_check_kartya.jpg"
            style={{ objectPosition: "0 -80px" }}
            width={300}
            height={300}
          />
          <span
            className="max-w-[800px]
              mb-8
              text-sm md:text-md
              text-center md:text-left
              text-primary"
          >
            <p>Kedves {name}!</p>
            <p className="mt-2">
              Az alábbi gombra kattintva éred el a fitcheck válaszvideót,
              remélem, hasznosnak találod! 😊{" "}
            </p>
            <p className="mt-4">
              Ha kérdésed merül fel vagy úgy érzed, szeretnéd tovább mélyíteni a
              tudásod a témában, akkor ajánlom figyelmedbe{" "}
              <i> online is igénybevehető</i> szolgáltatásaimat...
            </p>
            <ul className="list-disc ml-6 text-sm md:text-md mt-1">
              <li>
                <Link
                  className="text-secondary font-bold text-sm md:text-md"
                  href="https://hordozzszabadon.hu/tanacsadas#hordozovalaszto"
                >
                  Hordozóválasztó tanácsadás
                </Link>
              </li>
              <li>
                <Link
                  className="text-secondary font-bold text-sm md:text-md"
                  href="https://hordozzszabadon.hu/tanacsadas#mini"
                >
                  Mini/maxi tanácsadás
                </Link>
              </li>
            </ul>
            <div className="flex pt-2 mt-4 justify-center">
              <Button
                as={Link}
                href={link}
                target="_blank"
                color="secondary"
                className="text-[white] font-bold shadow-lg hover:shadow-md text-md
                    py-6 rounded-3xl"
              >
                Videó megtekintése
              </Button>
            </div>
            <Divider className=" bg-secondary mt-8" />
            <p className="mt-4">Ha bármi kérdésed lenne, keress bizalommal!</p>
            <p className="mt-4">Üdvözlettel,</p>
            <p>Mia</p>
            <Link
              href="www.hordozzszabadon.hu"
              className="mb-4 text-secondary font-bold"
            >
              www.hordozzszabadon.hu
            </Link>
            <SocialMedia small />
          </span>
        </div>
      </div>
    </div>
  );
}

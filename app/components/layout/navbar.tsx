'use client';
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { montserrat_real } from '@/app/fonts';

export default function App() {
  console.log('navbar');
  // eslint-disable-next-line
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  const navbarBreakpoint = "md";

  const menuItems = [
    // { title: "Rólam", href: "/rolam" },
    { title: "Hordozási Tanácsadás", href: "/tanacsadas" },
    // { title: "Kölcsönzés", href: "/kolcsonzes" },
    { title: "Fit check", href: "/fitcheck" },
    // { title: "Hordozóválasztó", href: "/hordozovalaszto" },
    { title: "Ingyen tanácsadás", href: "/ingyentanacsadas" },
    // { title: "Kapcsolat", href: "/#kapcsolat" },
    // { title: "Blog", href: "/blog" },
    // { title: "Kapcsolat", href: "/kapcsolat" }
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      className="bg-[url('/navbar_bg.svg')] bg-no-repeat bg-cover bg-center border-0 h-20"
      position="static"
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          onChange={() => setIsMenuOpen(!isMenuOpen)}
          className={`${navbarBreakpoint}:hidden`}
        />
        <NavbarBrand
          className={`text-[white] hidden ${navbarBreakpoint}:block`}
        >
          <Link href="/" className="text-[white]">
            <Image
              src="/csak_logo.svg"
              alt="Orbán Mia babahordozási tanácsadó logo"
              width={50}
              height={40}
            />
            <div className="grid grid-cols-1 pl-1">
              <div
                className={`text-[white] uppercase ${montserrat_real.className}`}
              >
                <b>Baba</b>Hordozás
              </div>
              <div
                className={`text-[white] italic ${montserrat_real.className} mt-[-7px]`}
              >
                by Orbán Mia
              </div>
            </div>
          </Link>
          <div></div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex uppercase gap-1 sm:gap-4"
        justify="center"
      >
        {menuItems.map((item, index) => (
          <NavbarItem isActive={item.href == pathName} key={`${item}-${index}`}>
            <Link
              href={item.href}
              className={`
                text-xl text-[white]
              ${item.href == pathName ? "font-bold" : ""}`}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="uppercase">
        <NavbarMenuItem className="pt-4">
          <Link
            className={`
                text-xl text-[black]
               ${"/" == pathName ? "font-bold" : ""}`}
            href="/"
            size="lg"
          >
            Kezdőlap
          </Link>
        </NavbarMenuItem>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`
                text-xl text-[black]
               ${item.href == pathName ? "font-bold" : ""}`}
              href={item.href}
              size="lg"
              onPress={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}


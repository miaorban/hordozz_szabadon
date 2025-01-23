'use client';
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { montserrat_real } from '@/app/fonts';

const ClosedIcon = () => {
  return (
    <svg viewBox="0 0 32 32" enableBackground="new 0 0 32 32" id="Editable-line" version="1.1"
    xmlns="http://www.w3.org/2000/svg"
      fill="#ffffff">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier"><line fill="none" id="XMLID_103_" stroke="#ffffff" 
        strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" x1="7" 
        x2="25" y1="16" y2="16"></line><line fill="none" id="XMLID_102_" stroke="#ffffff" 
        strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" 
        x1="7" x2="25" y1="25" y2="25"></line><line fill="none" id="XMLID_101_" stroke="#ffffff" 
        strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" 
        x1="7" x2="25" y1="7" y2="7"></line></g>
      </svg>
  );
}

const OpenIcon = () => {
  return (
    <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" 
      strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M3 21.32L21 3.32001" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" 
        strokeLinejoin="round"></path> <path d="M3 3.32001L21 21.32" stroke="#ffffff" strokeWidth="1.5"
         strokeLinecap="round" strokeLinejoin="round"></path> </g>
    </svg>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathName = usePathname();

  const menuItems = [
    // { title: "Rólam", href: "/rolam" },
    { title: "Hordozási Tanácsadás", href: "/tanacsadas" },
    // { title: "Kölcsönzés", href: "/kolcsonzes" },
    { title: "Fit check", href: "/fitcheck" },
    { title: "Kapcsolat", href: "/#kapcsolat" },
    // { title: "Blog", href: "/blog" },
    // { title: "Kapcsolat", href: "/kapcsolat" }
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}
    className="bg-[url('/navbar_bg.svg')] bg-no-repeat bg-cover bg-center border-0 h-20"
    position="static">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle 
          icon={isMenuOpen ? <OpenIcon/> : <ClosedIcon/>}
          aria-label={isMenuOpen ? "Menü bezárása" : "Menü kinyitása"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
      <NavbarBrand className="text-[white]">
          <Link href="/" className="text-[white]">
            <Image src="/csak_logo.svg" alt="Orbán Mia babahordozási tanácsadó logo" 
              width={130} height={80} className="hidden sm:block mt-16"/>
          </Link>
          <div>
            
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand className="text-[white]">
          <Link href="/" className="text-[white]">
            <Image src="/csak_logo.svg" alt="Orbán Mia babahordozási tanácsadó logo" 
              width={50} height={40} className="hidden sm:block"/>
            <div className="grid grid-cols-1 pl-1">
              <div className={`text-[white] uppercase ${montserrat_real.className}`}><b>Baba</b>Hordozás</div>
              <div className={`text-[white] italic ${montserrat_real.className} mt-[-7px]`}>by Orbán Mia</div>
            </div>
          </Link>
          <div>
            
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex uppercase" justify="center">
        {menuItems.map((item, index) => (
            <NavbarItem isActive={item.href == pathName} key={`${item}-${index}`}>
            <Link href={item.href}
              className={`
                text-xl text-[white]
              ${item.href == pathName ? 'font-bold' : ''}` 
              }>
              {item.title}
            </Link>
          </NavbarItem>
          ))}
      </NavbarContent>

      <NavbarMenu className="uppercase">
        <NavbarMenuItem className="pt-4">
            <Link
              className={`
                text-xl text-[white]
               ${'/' == pathName ? 'font-bold' : ''}` 
              }
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
                text-xl text-[white]
               ${item.href == pathName ? 'font-bold' : ''}` 
              }
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


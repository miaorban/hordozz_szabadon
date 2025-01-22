'use client';
import { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, 
  NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import Image from "next/image";
import { usePathname } from 'next/navigation';


const ClosedIcon = () => {
  return (
    <svg viewBox="0 0 32 32" enableBackground="new 0 0 32 32" id="Editable-line" version="1.1"
    xmlns="http://www.w3.org/2000/svg"
      fill="#000000">
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
        <path d="M3 21.32L21 3.32001" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" 
        strokeLinejoin="round"></path> <path d="M3 3.32001L21 21.32" stroke="#000000" strokeWidth="1.5"
         strokeLinecap="round" strokeLinejoin="round"></path> </g>
    </svg>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const pathName = usePathname();

  console.log(pathName);
  

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
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="text-white">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Menü bezárása" : "Menü kinyitása"}
          className="sm:hidden"
          icon={isMenuOpen ? <OpenIcon/> : <ClosedIcon/>}
        />
        <NavbarBrand className="text-white">
          <Link color="primary" href="/" className="">
            <Image src="/Logo_new.svg" alt="Orbán Mia babahordozási tanácsadó logo" 
              width={130} height={80} className="hidden sm:block mt-16"/>
          </Link>
          <div>
            
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 uppercase text-white" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem isActive={item.href == pathName} key={`${item}-${index}`}>
          <Link color="primary" href={item.href}
            className={`
              text-xl text-primary
             ${item.href == pathName ? 'font-bold' : ''}` 
            }>
            {item.title}
          </Link>
        </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu className="uppercase">
        <NavbarMenuItem isActive={'/' == pathName}>
          <Link
            color="primary"
            href="/"
            size="lg"
          >
            Főoldal
          </Link>
        </NavbarMenuItem>
        {menuItems.map((item, index) => (
          <NavbarMenuItem isActive={item.href == pathName} key={`${item}-${index}`}>
            <Link
              color="primary"
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

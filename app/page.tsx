import Introduction from "@/app/components/Introduction";
import Services from "@/app/components/Services";
import About from "@/app/components/About";
import Studio from "@/app/components/Studio";
import { Divider } from "@heroui/react";

export default function Home() {
  return (
    <div className="">
      <Introduction/>
      <div className="bg-[url('/intro_bg.svg')] h-64 mt-[-100px] bg-cover bg-bottom
      mb-[-100px] md:mb-[-80px]"></div>
      <Services/>
      <div className="flex justify-center p-12">
        <Divider className="border-black mb-12 max-w-[700px] "/>
      </div>
      <About/>
      <div id="kapcsolat">
        <Studio/>
      </div>
      {/* <div className="bg-[url('/kucko_ala.svg')] h-64 mt-[-100px] bg-cover bg-bottom
        mb-[-100px] md:mb-[-80px]"></div>
      <Blog/> */}
    </div>
  );
}

'use client';
import { createContext, useState } from "react";
import MiniIntroduction from "@/app/components/consultation/MiniIntroduction";
import BookingPage from "@/app/components/booking/BookingPage";

export const BookingContext = createContext();

export default function Page() {
  return (
    <>
      <MiniIntroduction />
      <div
        className="bg-[url('/intro_bg.svg')] 
        h-48 md:h-64 
        bg-cover bg-bottom
        mt-[-80px] md:mt-[-80px] 
        mb-[-80px] md:mb-[-150px]"
      ></div>
      <div
        className="bg-[url('/mini_tanacsadas.svg')] bg-no-repeat 
        bg-cover bg-center"
      >
        <BookingPage type="Mini tanácsadás"/>
      </div>
    </>
  );
}
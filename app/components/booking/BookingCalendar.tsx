'use client';
import { Calendar } from "@nextui-org/react";
import { useContext } from "react";
import { BookingContext } from "@/app/tanacsadas/foglalas/mini/page";

export default function App() {
  const { date, setDate } = useContext(BookingContext);

  return (
    <Calendar
      aria-label="Dátum"
      color="secondary"
      classNames={{
        cellButton: "data-[selected=true]:text-[white]",
      }}
      showShadow
      value={date}
      onChange={setDate}
    />
  );
}

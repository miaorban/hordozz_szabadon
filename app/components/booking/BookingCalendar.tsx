'use client';
import { Calendar } from "@heroui/react";
import { useContext } from "react";
import BookingContext from "@/app/contexts/booking";

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

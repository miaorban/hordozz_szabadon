"use client";
import { Button } from "@heroui/react";
import { useContext } from "react";
import { BookingContext } from "@/app/components/booking/BookingPage";

export default function TimePicker() {
  const { time, setTime, timeOptions } = useContext(BookingContext);
  
  return (
    <div className="grid grid-cols-3 gap-2 max-w-[500px]">
      {
        timeOptions.map((option) => {
          return (
            <Button
              className={`font-bold shadow-lg hover:shadow-xl
               rounded-3xl block ${option.value == time ? 'text-[white]' : ''}`}
              size="md"
              key={option.value}
              value={option.value}
              color="secondary" 
              variant={option.value == time ? "solid" : 'bordered'}
              onPress={() => setTime(option.value)}
            >
              {option.label}
            </Button>
          );
        })
      }
    </div>
  );
}

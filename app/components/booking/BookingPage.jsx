"use client";
import { createContext, useState } from "react";
import BookingCalendar from "@/app/components/booking/BookingCalendar";
import TimePicker from "@/app/components/booking/TimePicker";
import DataForm from "@/app/components/booking/DataForm";
import { today } from "@internationalized/date";
import { redirect } from "next/navigation";

export const BookingContext = createContext();

export default function BookingPage({ type }) {
  const timeOptions = [
    { value: "09:00", label: "09:00" },
    { value: "09:30", label: "09:30" },
    { value: "10:00", label: "10:00" },
    { value: "10:30", label: "10:30" },
    { value: "11:00", label: "11:00" },
    { value: "13:30", label: "13:30" },
    { value: "14:00", label: "14:00" },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [babyAge, setBabyAge] = useState("");
  const [babyWeight, setBabyWeight] = useState("");
  const [isOnline, setIsOnline] = useState(false);
  const [date, setDate] = useState(today("Europe/Budapest"));
  const [time, setTime] = useState(timeOptions[0].value);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const book = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      setIsError(false);
      await fetch("api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          babyAge,
          babyWeight,
          isOnline,
          date: date.toString(),
          type,
          time,
        }),
      });
      redirect("/tanacsadas/foglalas/megerosites");
    } catch () {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <BookingContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        isOnline,
        setIsOnline,
        date,
        setDate,
        time,
        setTime,
        isLoading,
        setIsLoading,
        babyAge,
        setBabyAge,
        babyWeight,
        setBabyWeight,
        timeOptions,
        book,
      }}
    >
      <div className="flex gap-12 justify-center">
        <BookingCalendar />
        <div>
          <h2 className="text-2xl font-bold text-center mb-4">Időpontok</h2>
          <TimePicker />
        </div>
      </div>
      <div className="flex justify-center">
        <DataForm />
      </div>
    </BookingContext.Provider>
  );
}

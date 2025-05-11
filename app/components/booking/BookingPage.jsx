"use client";
import { createContext, useState } from "react";
import BookingCalendar from "@/app/components/booking/BookingCalendar";
import TimePicker from "@/app/components/booking/TimePicker";
import DataForm from "@/app/components/booking/DataForm";
import { today } from "@internationalized/date"
import { addToast } from "@heroui/react";
import { useRouter } from 'next/navigation'

export const BookingContext = createContext();

const eventTypes = {
  mini: 'Mini tanácsadás',
  maxi: 'Maxi tanácsadás',
  hordozovalaszto: 'Hordozóválasztó tanácsadás',
}

export default function BookingPage({ type, timeOptions }) {
  const router = useRouter()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [babyAge, setBabyAge] = useState("");
  const [babyWeight, setBabyWeight] = useState("");
  const [description, setDescription] = useState("");
  const [isOnline, setIsOnline] = useState(type == 'hordozovalaszto');
  const [date, setDate] = useState(today("Europe/Budapest").add({ days: 1 }));
  const [time, setTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const book = async (e) => {
    e.preventDefault();
    
    try {
      setIsLoading(true);
      const res = await fetch("api", {
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
          description,
          time,
        }),
      });
      console.log('res.ok ', res.ok);
      
      if (!res.ok) {
        addToast({
              title: 'Váratlan hiba történt',
              description: 'Kérlek, vedd fel velem a kapcsolatot elérhetőségeim egyikén!',
              color: 'danger',
            })
      } else {
        router.push("/tanacsadas/foglalas/megerosites");
      }
    } catch (e) {
      addToast({
              title: 'Váratlan hiba történt',
              description: 'Kérlek, vedd fel velem a kapcsolatot elérhetőségeim egyikén!',
              color: 'danger',
            })
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
        description,
        setDescription,
        book,
        timeOptions,
        type
      }}
    >
      <div className="text-4xl sm:text-5xl font-bold text-secondary text-left mb-24 mt-12
        max-w-64">
        <h1>Időpontfoglalás</h1>
      </div>
      {/* <p class="italic font-light">{ type }</p> */}
      <div className="flex flex-wrap gap-12 justify-center">
        <BookingCalendar />
        <div>
          <TimePicker eventType={eventTypes[type]}/>
        </div>
      </div>
      <div className="flex justify-center">
        <DataForm />
      </div>
    </BookingContext.Provider>
  );
}

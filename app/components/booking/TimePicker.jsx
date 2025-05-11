"use client";
import { Button } from "@heroui/react";
import { useContext, useEffect, useState } from "react";
import { BookingContext } from "@/app/components/booking/BookingPage";
import { toTime, toTimeZone, parseAbsolute } from "@internationalized/date";

export default function TimePicker() {
  const { time, setTime, date, timeOptions } = useContext(BookingContext);
  const [times, setTimes] = useState([]);

  useEffect(() => {
    if (timeOptions[date.toString()]) {
      const times = timeOptions[date.toString()].map((option) => {
        const budapestTime = toTimeZone(parseAbsolute(option.start, "UTC"), "Europe/Budapest");
        console.log("Budapest Time: ", toTime(budapestTime).toString()); // Logs the time in Budapest timezone
        return `${toTime(budapestTime).toString().split(":")[0]}:${toTime(budapestTime).toString().split(":")[1]}`; 
      });
      setTimes(times);
      if (times.length > 0) {
        setTime(times[0]);
      }
    }
  }, [date, timeOptions]);

  useEffect(() => {
    console.log('times ', times);
  }, [times]);
  
  return (
    <div className="grid grid-cols-3 gap-2 max-w-[500px]">
      {
        times.map((option) => {
          return (
            <Button
              className={`font-bold shadow-lg hover:shadow-xl
               rounded-3xl block ${option == time ? 'text-[white]' : ''}`}
              size="md"
              key={option}
              value={option}
              color="secondary" 
              variant={option == time ? "solid" : 'bordered'}
              onPress={() => setTime(option)}
            >
              {option}
            </Button>
          );
        })
      }
    </div>
  );
}

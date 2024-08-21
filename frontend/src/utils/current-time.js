import React, { useState, useEffect } from "react";

export const useCurrentTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const minuteInterval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 100);

    return () => clearInterval(minuteInterval);
  }, []);

  const getFormattedParts = (date) => {
    const options = {
      weekday: "long",
      month: "short",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, 
    };

    const formattedDateString = date
      .toLocaleString("en-US", options)
      .replace(/,/g, ""); 

    const [weekday, month, day, year, time] = formattedDateString.split(" ");

    return {
      weekday,
      month,
      day,
      year,
      time,
    };
  };

  return getFormattedParts(currentDateTime);
};

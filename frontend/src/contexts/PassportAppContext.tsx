/** @format */

import { createContext, useState } from "react";
import { Availability } from "../typings/types";

interface User {
  name: string;
  nrcNumber?: string;
  dateOfBirth?: string;
  phoneNumber?: string;
  email?: string;
}

interface Booking {
  bookingDate: string | null;
  time: number | null;
  user: User | null;
  availability: Availability[];
  updateData: (value: any) => void;
  fetchAvailability: (month: number) => void;
}

const defaultBooking: Booking = {
  bookingDate: null,
  time: null,
  user: null,
  availability: [],
  updateData: () => {},
  fetchAvailability: () => {},
};

export const PassportAppContext = createContext<Booking>(defaultBooking);

const PassportProvider = (props: any) => {
  const [bookingData, setBookingData] = useState(defaultBooking);

  const fetchAvailability = async (month: number) => {
    console.log("hello");
    const response = await fetch(
      `http://localhost:5000/availability?month=${month}`
    );
    const responJson = await response.json();
    console.log("hi data");
    setBookingData({
      ...bookingData,
      availability: responJson.data,
    });
  };
  return (
    <PassportAppContext.Provider
      value={{
        ...bookingData,
        updateData: setBookingData,
        fetchAvailability,
      }}>
      {props.children}
    </PassportAppContext.Provider>
  );
};

export default PassportProvider;

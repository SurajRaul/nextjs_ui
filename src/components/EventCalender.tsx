"use client";
import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const data = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },]

const EventCalender = () => {
  const [value,setValue]=useState<Value>(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={setValue} value={value}/>
      <div className="flex items-center justify-between my-4">
        <h1 className="text-xl font-semibold">Events</h1>
        <Image src="/moreDark.png" alt="" width={10} height={10} />
      </div>
      <div className="flex flex-col gap-4">
        {data.map((event) => (
            <div className="rounded-md p-4 border-2 border-gray-100" key={event.id}>
                <div className="flex items-center justify-between">
                    <h1 className="font-semibold">{event.title}</h1>
                    <span>{event.time}</span>
                </div>
                <p className="text-sm">{event.description}</p>
            </div>
        )
        )}
      </div>
    </div>
  );
};

export default EventCalender;

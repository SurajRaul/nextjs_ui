import Announcements from "@/components/Announcements";
import EventCalender from "@/components/EventCalender";
import React from "react";

const InformationPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-full flex flex-col gap-8 md:flex">
        <EventCalender />
        <Announcements />
      </div>
    </div>
  );
};

export default InformationPage;

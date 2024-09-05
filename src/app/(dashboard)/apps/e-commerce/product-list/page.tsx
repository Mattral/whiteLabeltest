import CallList from "components/CallList";
//import MeetingTypeList from "components/MeetingTypeList";
import React from "react";

import Products from 'views/apps/Products';

const Recordings = () => {
  return (
    <section className="flex size-full flex-col text-black">
      <Products />
      <h1 className="text-3xl font-bold">Recordings</h1>
      <CallList type="recordings" />
      <h1 className="text-3xl font-bold">Upcoming</h1>
      <CallList type="upcoming" />
      <h1 className="text-3xl font-bold">Previous</h1>
      <CallList type="ended" />
    </section>
  );
};

export default Recordings;


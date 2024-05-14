import React from "react";
import { QueryCard } from "../../../utils";

export const QueryBox = () => {
  const data = [
    {
      query: "Refund Requested",
      queryDesc: "I have requested for refund but not received yet",
      username: "John Doe",
      date: "01/01/2022",
    },
    {
      query: "Couldn’t Make Payments",
      queryDesc:
        "I mistakenly entered my transaction pin 3 times. Now my account is frozen.",
      username: "Jane Smith",
      date: "01/02/2022",
    },
  ];

  return (
    <section className="container mx-auto py-10">
      <h1 className="pb-4 font-bold text-3xl ml-6">Recent Customer Queries</h1>
      <div>
        {data.map((query_, index) => (
          <QueryCard key={index} query={query_} />
        ))}
      </div>
    </section>
  );
};

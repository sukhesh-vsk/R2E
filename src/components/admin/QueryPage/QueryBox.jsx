import React from "react";
import { QueryCard } from "../../../utils";

export const QueryBox = () => {
  const data = [
    {
      query: "Refund Requested",
      queryDesc: "I have requested for refund but not received yet",
    },
    {
      query: "Couldn’t Make Payments",
      queryDesc:
        "I mistakenly entered my transaction pin 3 times. Now my account is freezed.",
    },
  ];

  return (
    <section className="container mx-auto py-10">
      <h1
        className="pb-4"
        style={{ fontSize: "2.5rem", marginLeft: "2.5rem", fontWeight: "600" }}
      >
        Recent Customer Queries
      </h1>
      <div>
        {data.map((query_, index) => (
          <QueryCard key={index} query={query_} />
        ))}
      </div>
    </section>
  );
};

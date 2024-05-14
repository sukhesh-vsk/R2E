import React from "react";

export const QueryCard = ({ query }) => {
  return (
    <div
      className="flex mx-6 rounded-md px-7 py-3 text-bg gap-6 mb-7"
      style={{ backgroundColor: "#D9D9D9" }}
    >
      <div className="usr-query">
        <h2 className="font-semibold text-lg">{query.query}</h2>
        <p className="mb-4" style={{ color: "#313131cc" }}>
          {query.queryDesc}
        </p>
        <p className="font-semibold text-xs" style={{ color: "#313131cc" }}>
          {query.username} | {query.date}
        </p>
      </div>
    </div>
  );
};

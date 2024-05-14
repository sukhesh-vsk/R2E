import React from "react";
import { BiFilterAlt } from "react-icons/bi";
import "./ManageOffer.css";

export const ManageOffer = () => {
  const data = [
    {
      plan: "1.5 GB/day, 84 days",
      description: "1.5 GB/day Unlimited Calls",
      offer: ["799", "599"],
      validTill: "26-07-2024",
    },
    {
      plan: "10% Cashback on EB Bills",
      description: "Pay EB bills via UPI to avail the offer",
      offer: ["10"],
      validTill: "15-06-2024",
    },
    {
      plan: "1.5 GB/day, 84 days",
      description: "1.5 GB/day Unlimited Calls",
      offer: ["20"],
      validTill: "26-07-2024",
    },
  ];

  return (
    <section className="container mx-auto">
      <div className="flex items-center justify-center my-9">
        <input
          type="checkbox"
          id="page-toggle"
          className="switch-toggle hidden"
        />
        <label
          htmlFor="page-toggle"
          className="toggle-button relative flex justify-around items-center w-48 h-12 rounded-xl border-1 focus:outline-1"
          style={{
            backgroundColor: "#575757",
            color: "rgb(250 250 250 / 43%)",
          }}
        >
          <span>Ongoing</span>
          <span>Expired</span>
        </label>
      </div>
      <div className="flex items-center justify-center mb-10">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search by plan, validity, amount..."
            className="search-offer-input relative w-96 h-10 px-5 rounded-lg bg-light text-bg border-1 focus:outline-1"
          />
          <BiFilterAlt
            className="filter-icon text-2xl absolute right-3 cursor-pointer"
            color="#a3b3ca"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="offer-table mx-0 md:mx-10 w-full bg-light sm:w-full">
          <thead
            className="caps offer-table-head text-center"
            style={{ color: "#64748B" }}
          >
            <tr>
              <th className="px-2 py-4">Plan</th>
              <th className="px-2 py-4">Description</th>
              <th className="px-2 py-4">Offer</th>
              <th className="px-2 py-4">Valid Till</th>
            </tr>
          </thead>
          <tbody className="offer-table-body text-bg">
            {data.map((offer, index) => (
              <tr key={index}>
                <td className="px-2 py-2 sm:py-4 text-center">
                  <span className="sm:hidden font-semibold text-center"></span>{" "}
                  {offer.plan}
                </td>
                <td className="px-2 py-2 sm:py-4 text-center">
                  <span className="sm:hidden font-semibold text-center"></span>{" "}
                  {offer.description}
                </td>
                <td className="px-2 py-2 sm:py-4 text-center">
                  {offer.offer.length === 1 ? (
                    <span>{offer.offer + "% Off"}</span>
                  ) : (
                    <>
                      <span className="line-through pe-2">
                        {offer.offer[0]}
                      </span>
                      {offer.offer[1]}
                    </>
                  )}
                </td>
                <td className="px-2 py-2 sm:py-4 text-center">
                  <span className="sm:hidden font-semibold"></span>{" "}
                  {offer.validTill}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

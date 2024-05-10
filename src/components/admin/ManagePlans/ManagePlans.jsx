import React from "react";

import "./ManagePlans.css";

export const ManagePlans = () => {
  const data = {
    mobile: [
      {
        operator: "Airtel",
        price: "699",
        validity: "84 days",
        plan: "1.5 GB",
        active: "Active",
      },
      {
        operator: "Jio",
        price: "599",
        validity: "56 days",
        plan: "2 GB",
        active: "Active",
      },
      {
        operator: "Airtel",
        price: "499",
        validity: "28 days",
        plan: "1 GB",
        active: "Disabled",
      },
    ],
  };
  return (
    <section className="container mx-auto">
      <div className="plan-btns flex items-center justify-center text-center py-5">
        <a className="select-btn caps w-32" href="#">
          Mobile
        </a>
        <a className="select-btn caps w-32" href="#">
          DTH
        </a>
        <a className="select-btn caps w-32" href="#">
          Postpaid
        </a>
        <a className="select-btn caps w-32" href="#">
          Electricity
        </a>
      </div>
      <div className="flex justify-end">
        <button className="add-plan-btn me-20 caps">Add Plan</button>
      </div>
      <div className="mt-5">
        <table className="table-auto w-full border-separate border-spacing-y-5">
          <thead
            className="plan-table-head"
            style={{ backgroundColor: "white" }}
          >
            <tr className="">
              <th className="px-4 py-2">S.No</th>
              <th className="px-4 py-2">Operator</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Validity</th>
              <th className="px-4 py-2">Plan</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody className="plan-table-body border-separate border-spacing-y-3 text-center">
            {data.mobile.map((plan, index) => (
              <tr key={index} style={{ backgroundColor: "white" }}>
                <td className="px-4 py-4">{index + 1}</td>
                <td className="px-4 py-4">{plan.operator}</td>
                <td className="px-4 py-4">{plan.price}</td>
                <td className="px-4 py-4">{plan.validity}</td>
                <td className="px-4 py-4">{plan.plan}</td>
                <td className="px-4 py-4 status-show">
                  <span
                    className="text-primary rounded-full px-4"
                    style={{
                      backgroundColor:
                        plan.active === "Active" ? "#04D58D" : "#F32C2C",
                      paddingTop: "0.1rem",
                      paddingBottom: "0.1rem",
                    }}
                  >
                    {plan.active}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

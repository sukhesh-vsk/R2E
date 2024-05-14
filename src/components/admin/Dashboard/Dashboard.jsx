import React from "react";

import "./Dashboard.css";

export const Dashboard = () => {
  const data = {
    activeUsers: 100,
    newUsers: 10,
    totalTransactions: 27000,
    avgTransaction: 4700,
  };

  return (
    <section className="container grid grid-cols-12 gap-4 mx-auto">
      <div className="card-overview col-span-12 px-5 py-4 bg-card-bg rounded-lg">
        <div className="card-head cols-span-12 px-5">
          <p className="pb-5">Today's Overview</p>
          <hr className="border-current text-dimmed" />
        </div>
        <div className="card-content md:grid grid-cols-4 gap-10 ms-10 mt-6 px-20 sm:flex flex-col">
          <div className="card-data col-span-1 dividerl">
            <span>{data.activeUsers}</span> <br />
            Active
            <br />
            Users
          </div>
          <div className="card-data col-span-1 dividerl">
            <span>{data.newUsers} +</span> <br />
            New <br /> Users
          </div>
          <div className="card-data col-span-1 dividerl">
            <span>{data.totalTransactions}</span> <br />
            Total <br /> Transactions
          </div>
          <div className="card-data col-span-1">
            <span>{data.avgTransaction}</span> <br />
            Avg. <br /> Transaction
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import {
  Dashboard,
  ManageOffer,
  ManagePlans,
  Navbar,
  QueryBox,
  Recharge,
} from "./index";

export const Admin = () => {
  return (
    <Router>
      <section className="container-fluid">
        <Navbar />
        <Routes>
          <Route index path="/" Component={Dashboard} />
          <Route path="plans" Component={ManagePlans} />
          <Route path="offers" Component={ManageOffer} />
          <Route path="query" Component={QueryBox} />
          <Route path="recharge" Component={Recharge} />
        </Routes>
      </section>
    </Router>
  );
};

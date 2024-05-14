import HistoryIcon from "@mui/icons-material/History";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SellIcon from "@mui/icons-material/Sell";
import React, { useState } from "react";
import "./Recharge.css";

export default function Recharge() {
  const [placeholderText, setPlaceholderText] = useState("Enter mobile number");
  const [activeBtn, setActiveBtn] = useState("Prepaid");

  const handleButtonClick = (buttonType) => {
    setActiveBtn(buttonType);
    switch (buttonType) {
      case "Prepaid":
      case "Postpaid":
        setPlaceholderText("Enter mobile number");
        break;
      case "DTH":
        setPlaceholderText("Enter DTH number");
        break;
      case "Electricity":
        setPlaceholderText("Enter House ID");
        break;
      case "Data Card":
        setPlaceholderText("Enter mobile number");
        break;
      default:
        setPlaceholderText("Enter the ID");
    }
  };

  return (
    <div className="recharge-container">
      <h1>Recharge or pay bills</h1>
      <div className="button-row">
        <button
          onClick={() => handleButtonClick("Prepaid")}
          style={{
            backgroundColor: activeBtn === "Prepaid" ? "black" : "",
            color: activeBtn === "Prepaid" ? "white" : "",
          }}
        >
          Prepaid
        </button>
        <button
          onClick={() => handleButtonClick("Postpaid")}
          style={{
            backgroundColor: activeBtn === "Postpaid" ? "black" : "",
            color: activeBtn === "Postpaid" ? "white" : "",
          }}
        >
          Postpaid
        </button>
        <button
          onClick={() => handleButtonClick("DTH")}
          style={{
            backgroundColor: activeBtn === "DTH" ? "black" : "",
            color: activeBtn === "DTH" ? "white" : "",
          }}
        >
          DTH
        </button>
        <button
          onClick={() => handleButtonClick("Electricity")}
          style={{
            backgroundColor: activeBtn === "Electricity" ? "black" : "",
            color: activeBtn === "Electricity" ? "white" : "",
          }}
        >
          Electricity
        </button>
        <button
          onClick={() => handleButtonClick("Data Card")}
          style={{
            backgroundColor: activeBtn === "Data Card" ? "black" : "",
            color: activeBtn === "Data Card" ? "white" : "",
          }}
        >
          <span>Data Card</span>
        </button>
        <button
          onClick={() => handleButtonClick("Gas")}
          style={{
            backgroundColor: activeBtn === "Gas" ? "black" : "",
            color: activeBtn === "Gas" ? "white" : "",
          }}
        >
          Gas
        </button>
        <button
          onClick={() => handleButtonClick("Insurance")}
          style={{
            backgroundColor: activeBtn === "Insurance" ? "black" : "",
            color: activeBtn === "Insurance" ? "white" : "",
          }}
        >
          Insurance
        </button>
        <button
          onClick={() => handleButtonClick("Money Transfer")}
          style={{
            backgroundColor: activeBtn === "Money Transfer" ? "black" : "",
            color: activeBtn === "Money Transfer" ? "white" : "",
          }}
        >
          Money Transfer
        </button>
      </div>
      <div className="input-container">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder={placeholderText}
          />
        </div>
      </div>
      <div className="input-container">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Operator"
          />
        </div>
      </div>
      <div className="input-container">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter amount"
          />
        </div>
      </div>
      <div className="recharge-btn">
        <button
          type="button"
          className="btn btn-dark"
          style={{ marginBottom: "3rem" }}
        >
          PROCEED
        </button>
      </div>
      <h1>More with recharges</h1>
      <div className="more-recharge">
        <div className="more-item">
          <div>
            <HistoryIcon fontSize="large" />
          </div>
          history
        </div>
        <div className="more-item">
          <div>
            <SellIcon fontSize="large" />
          </div>
          coupons
        </div>
        <div className="more-item">
          <div>
            <ReceiptLongIcon fontSize="large" />
          </div>
          pay bills
        </div>
      </div>
    </div>
  );
}

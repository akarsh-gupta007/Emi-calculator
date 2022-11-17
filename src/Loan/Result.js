import React, { useState } from "react";
import "./Style.css";
const Result = (props) => {

const [emidetail,setEmidetails]=useState([]);
  function showTable(amount, rate, month) {
    // console.log(amount, rate, month + " Akarsh");
    const interests = (amount * (rate * 0.01)) / month;
    const emipermonth = ((amount / month) + interests).toFixed(2);
    var temparray = [];
    for (let i = 1; i <= month; i++) {
      temparray.push(emipermonth);
    }
    // console.log(temparray);
    setEmidetails(temparray)
  }
  console.log(emidetail , "history");
  return (
    <>
      <div className="container">
        {props.list.map((value, index) => {
          return (
            <div className="box">
              History{index + 1} || Amount: {value.amount} |Rate of Interest:{value.rate} |
              Months: {value.months}
              <button onClick={() => { showTable(value.amount, value.rate, value.months) }}>
                Click to see EMI/Month</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Result;

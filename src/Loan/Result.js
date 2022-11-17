import React from "react";
import "./Style.css";
const Result = (props) => {
  var EmiDEtails = [];
  function showTable(amount, rate, month) {
    // console.log(amount, rate, month + " Akarsh");
    const interests = (amount * (rate * 0.01)) / month;
    const emipermonth = ((amount / month) + interests).toFixed(2);
    for (let i = 1; i <= month; i++) {
      EmiDEtails.push(emipermonth);
    }
    console.log(EmiDEtails);
  }
  console.log(EmiDEtails);
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

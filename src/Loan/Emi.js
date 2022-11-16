import React, { useState, useEffect } from 'react';
import "./Emi.css"
import Result from './Result';

const Emi = () => {
    const [employees, setEmployees] = useState([]);
    const [dates, setDates] = useState([]);
    const [emidates, setEmidates] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState({
        amount: "",
        rate: "",
        months: ""
    });

    useEffect(() => {
        let datesArray = [];
        for (let i = 1; i <= data.months; i++) {
            datesArray.push({
                month: i
            })
        }
        setDates(datesArray);

    }, [dates.months]);

    const calculate = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });

    }
    let EmiDEtails = [];
    const handleButtonClick = (event) => {
        event.preventDefault();

        const newRecord = { ...data };

        const interests = (data.amount * (data.rate * 0.01)) / data.months;

        const emipermonth = ((data.amount / data.months) + interests).toFixed(2);


        // let EmiDEtails = [];
        for (let i = 1; i <= data.months; i++) {
            EmiDEtails.push(emipermonth);
        }


        console.log(EmiDEtails, "Emi details")
        // console.log(emipermonth, interests)
        setEmployees([...employees, newRecord]);
        setData({
            amount: "",
            rate: "",
            months: ""
        })
    }
    // console.log(EmiDEtails, "Emi details")
    return (
        <div className='maindiv'>


            <div className="calculator">


                <h1>EMI Calculator</h1>
                <form onSubmit={handleButtonClick} id="sample-form" method="post" >
                    <p>Amount (₹):
                        <input id="amount" type="number" name='amount' value={data.amount} placeholder="Please Enter Your Amount" onChange={calculate} />
                    </p>
                    <p>Interest Rate  :
                        <input id="rate" type="number" name='rate' value={data.rate} placeholder="Please Enter your Rate" onChange={calculate} />
                    </p>
                    <p>Months to Pay :
                        <input id="months" type="number" name='months' value={data.months} placeholder="Please Enter your Month" onChange={calculate} />
                    </p>
                    <button type="submit">Submit</button>
                </form>


            </div>
            <div>
                <table border="2px">
                    <tr>
                        <th>Total Months</th>
                        <th>EMI per month</th>
                    </tr>
                </table>
            </div>
            <button
                onClick={() => setToggle(!toggle)}
                class="btn btn-primary mb-5">
                Click here for History
            </button>
            {toggle && (
                <Result list={employees} />
            )}

        </div>
    )
}

export default Emi;

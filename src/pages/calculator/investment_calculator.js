import { useState } from 'react';

import CustomButton from '../../components/custom/custom_button';
import CustomBtnClear from '../../components/custom/custom_btn_clear';

const InvestmentCalculator = () => {
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [time, setTime] = useState('');
    const [endBalance, setEndBalance] = useState(0);
    const [startingAmount, setStartingAmount] = useState(0);
    const [totalInterest, setTotalInterest] = useState(0);

    const calculateInvestment = () => {
        const principalValue = parseFloat(principal);
        const rateValue = parseFloat(rate) / 100;
        const timeValue = parseFloat(time);

        if (isNaN(principalValue) || isNaN(rateValue) || isNaN(timeValue)) {
          //setResultData('Please enter valid numbers');
          return;
        }

        const futureValue = principalValue * Math.pow(1 + rateValue, timeValue);
        const totalInterest = futureValue - principalValue;
        // setResult(`Future value of investment: ${futureValue.toFixed(2)}`);
        setEndBalance(futureValue.toFixed(2));
        setStartingAmount(principalValue.toFixed(2));
        setTotalInterest(totalInterest.toFixed(2));
    };

    const investmentResult = [
        {result_name: "End Balance", result: endBalance},
        {result_name: "Starting Amount", result: startingAmount},
        {result_name: "Total Interest", result: totalInterest},
    ]

    const handleClear = () => {
        setPrincipal('');
        setRate('');
        setTime('');
        setEndBalance(0);
        setStartingAmount(0);
        setTotalInterest(0);
    }

    return (
        <div className="pages_wrap">
            <div className="pages_container">
                <div className="pages_description_wrap">
                    <h1>Investement Calculator</h1>
                    <p>
                        An Investment Calculator is a powerful tool used to assess the potential 
                        growth of investments over time. It enables users to make informed decisions by estimating 
                        the future value of an investment based on factors such as the initial investment amount, 
                        expected rate of return, and investment duration. Investment calculators often incorporate 
                        features such as compound interest calculations, periodic contributions, and 
                        tax considerations to provide users with comprehensive insights into their investment 
                        strategies. 
                    </p>
                </div>

                <div className="calc_container">
                    <div className="discount_calc_wrap">
                        <div className="discount_calc_inputs_wrap">
                            <div className="discount_input_wrap">
                                <p>Principal Amount:</p>
                                <input
                                    type="number"
                                    placeholder="0"
                                    value={principal.toString()}
                                    onChange={(e) => {
                                        const value = parseFloat(e.target.value);
                                        setPrincipal(isNaN(value) ? '' : value);
                                    }}
                                />
                            </div>
                            <div className="discount_input_wrap">
                                <p>Annual Interest Rate (%)</p>
                                <input
                                    type="number"
                                    placeholder="0"
                                    value={rate.toString()}
                                    onChange={(e) => {
                                        const value = parseFloat(e.target.value);
                                        setRate(isNaN(value) ? '' : value);
                                    }}
                                />
                            </div>
                            <div className="discount_input_wrap">
                                <p>Time (Years)</p>
                                <input
                                    type="number"
                                    placeholder="0"
                                    value={time.toString()}
                                    onChange={(e) => {
                                        const value = parseFloat(e.target.value);
                                        setTime(isNaN(value) ? '' : value);
                                    }}
                                />
                            </div>
                            <div className="bmi_btn_wrap">
                                <CustomButton
                                    btn_name={"Calculate"}
                                    click={calculateInvestment}
                                />
                                <CustomBtnClear
                                    clear={handleClear}
                                />
                            </div>
                        </div>
                        <div className="calc_table_wrap">
                            <table className="bmi_table">
                                <tbody>
                                  {investmentResult.map((row, index) => (
                                    <tr key={index}>
                                      <td>{row.result_name}</td>
                                      <td>{row.result}</td>
                                    </tr>
                                  ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InvestmentCalculator;
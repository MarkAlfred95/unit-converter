import { useState } from "react"
import { motion } from "framer-motion";

import CustomButton from "../../components/custom/custom_button";
import CustomBtnClear from "../../components/custom/custom_btn_clear";
import CustomSelectSmall from "../../components/custom/custom_select_small";

const selectOptions = [
    {selectValue: "percentage_a", selectName: "What is X percent of Y?"},
    {selectValue: "percentage_b", selectName: "X is what percent of Y?"},
    {selectValue: "percentage_c", selectName: "X is Y percent of What?"},
    {selectValue: "percentage_d", selectName: "Increase X by Y percent"},
    {selectValue: "percentage_e", selectName: "Decrease X by Y percent"},
    {selectValue: "percentage_f", selectName: "Percentage Difference"},
]

const PercentageCalculator = () => {
    const [selectedOption, setSelectedOption] = useState(selectOptions[0]);
    const [result, setResult] = useState('0');

    const calculateResult = () => {
        if (selectedOption.selectValue === "percentage_a"){
            calculatePercentOf();
        } 
        else if (selectedOption.selectValue === "percentage_b"){
            calculateIsWhatPercent();
        }
        else if (selectedOption.selectValue === "percentage_c"){
            calculateXIsYPercent();
        }
        else if (selectedOption.selectValue === "percentage_d"){
            calculateIncreaseByPercent();
        }
        else if (selectedOption.selectValue === "percentage_e"){
            calculateDecreaseByPercent();
        }
        else if (selectedOption.selectValue === "percentage_f"){
            calculatePercentDiff();
        }
    };

    // What is X percent of Y?
    const [percent, setPercent] = useState('');
    const [value, setValue] = useState('');
    
    const calculatePercentOf = () => {
        const parsedPercent = parseFloat(percent);
        const parsedValue = parseFloat(value);
    
        if (!isNaN(parsedPercent) && !isNaN(parsedValue)) {
          const calculatedResult = (parsedPercent / 100) * parsedValue;
          setResult(percent + "% of " + value + " is " + calculatedResult);
        } else {
          setResult('0');
        }
    }

    // X is what percent of Y?
    const [isWhatPercentX, setIsWhatPercentX] = useState('');
    const [isWhatPercentY, setIsWhatPercentY] = useState('');

    const calculateIsWhatPercent = () => {
        const x = parseFloat(isWhatPercentX);
        const y = parseFloat(isWhatPercentY);

        if (y === 0) {
            return "Cannot divide by zero";
        }
        const percent = (x / y) * 100;
        const fixedPercent = percent.toFixed(2);
        setResult(x + " is " + fixedPercent + "% of " + y);
    }

    // X is Y percent of what?
    const [xIsYPercentX, setXIsYPercentX] = useState('');
    const [xIsYPercentY, setXIsYPercentY] = useState('');

    const calculateXIsYPercent = () => {
        const x = parseFloat(xIsYPercentX);
        const y = parseFloat(xIsYPercentY);

        if (y === 0) {
            return "Cannot divide by zero";
        }
        const number = (x * 100) / y;
        setResult(x + " is " + y + "% of " + number);
    }

    // X increase by Y percent
    const [increasePercentX, setIncreasePercentX] = useState('');
    const [increasePercentY, setIncreasePercentY] = useState('');

    const calculateIncreaseByPercent = () => {
        const x = parseFloat(increasePercentX);
        const y = parseFloat(increasePercentY);

        const increase = (x * y) / 100;
        const increaseResult =  x + increase;
        setResult(x + " increase by " + y + "% is " + increaseResult);
    }

    // X decrease by Y percent
    const [decreasePercentX, setDecreasePercentX] = useState('');
    const [decreasePercentY, setDecreasePercentY] = useState('');

    const calculateDecreaseByPercent = () => {
        const x = parseFloat(decreasePercentX);
        const y = parseFloat(decreasePercentY);

        const decrease = (x * y) / 100;
        const decreaseResult =  x - decrease;
        setResult(x + " decrease by " + y + "% is " + decreaseResult);
    }

    // Percentage Difference
    const [percentDiffX, setPercentDiffX] = useState('');
    const [percentDiffY, setPercentDiffY] = useState('');

    const calculatePercentDiff = () => {
        const x = parseFloat(percentDiffX);
        const y = parseFloat(percentDiffY);

        const difference = Math.abs(x - y);
        const average = (x + y) / 2;
        const percentageDifference = (difference / average) * 100;
        const percentDiffResult =  percentageDifference.toFixed(2);
        setResult("The Percentage Difference is " + percentDiffResult + "%");
    }

    const handleClear = () => {
        if (selectedOption.selectValue === "percentage_a"){
            setValue('');
            setPercent('');
            setResult('0');
        } 
        else if (selectedOption.selectValue === "percentage_b"){
            setIsWhatPercentX('');
            setIsWhatPercentY('');
            setResult('0');
        }
        else if (selectedOption.selectValue === "percentage_c"){
            setXIsYPercentX('');
            setXIsYPercentY('');
            setResult('0');
        }
        else if (selectedOption.selectValue === "percentage_d"){
            setIncreasePercentX('');
            setIncreasePercentY('');
            setResult('0');
        }
        else if (selectedOption.selectValue === "percentage_e"){
            setDecreasePercentX('');
            setDecreasePercentY('');
            setResult('0');
        }
        else if (selectedOption.selectValue === "percentage_f"){
            setPercentDiffX('');
            setPercentDiffY('');
            setResult('0');
        }
    }

    const percentOfResultMap = [
        {result_name: "Result", result: result},
    ]


    return (
        <>
        <div className="pages_wrap">
            <div className="pages_container">
                <div className="pages_description_wrap">
                    <h1>Percentage Calculator</h1>
                    <p>
                        A Percentage Calculator is a versatile tool used to perform calculations 
                        involving percentages. It allows users to quickly and accurately compute various 
                        percentage-related values, such as finding the percentage of a number, calculating 
                        percentage increase or decrease, determining the percentage difference between two numbers, 
                        and more. 
                    </p>
                </div>
                <div className="calc_container">
                    <div className="bmi_inputs_wrap">
                        <div className="custom_select_small_wrap">
                            <CustomSelectSmall 
                                selectOptions={selectOptions}
                                selectedOption={selectedOption}
                                setSelectedOption={setSelectedOption}
                            />
                        </div>
                        {selectedOption.selectValue === "percentage_a" &&
                        <motion.div 
                            className="percentage_wrap"
                            initial={{ opacity: 0, y: "-2rem" }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="small_input_wrap">
                                <input
                                    type="number"
                                    placeholder="0"
                                    min="0"
                                    value={percent}
                                    onChange={(e) => {
                                      setPercent(e.target.value);
                                    }}
                                />
                                <p>%</p>
                            </div>
                            <p> of </p>
                            <div className="small_input_wrap">
                                <input
                                    type="number"
                                    placeholder="0"
                                    min="0"
                                    value={value}
                                    onChange={(e) => {
                                      setValue(e.target.value);
                                    }}
                                />
                            </div>
                        </motion.div>}
                        {selectedOption.selectValue === "percentage_b" &&
                        <motion.div 
                            className="percentage_wrap"
                            initial={{ opacity: 0, y: "-2rem" }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="small_input_wrap">
                                <input
                                    type="number"
                                    placeholder="0"
                                    min="0"
                                    value={isWhatPercentX}
                                    onChange={(e) => {
                                      setIsWhatPercentX(e.target.value);
                                    }}
                                />
                            </div>
                            <p> is what % of </p>
                            <div className="small_input_wrap">
                                <input
                                    type="number"
                                    placeholder="0"
                                    min="0"
                                    value={isWhatPercentY}
                                    onChange={(e) => {
                                      setIsWhatPercentY(e.target.value);
                                    }}
                                />
                            </div>
                        </motion.div>}
                        {selectedOption.selectValue === "percentage_c" &&
                        <motion.div 
                            className="percentage_wrap"
                            initial={{ opacity: 0, y: "-2rem" }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="small_input_wrap">
                                <input
                                    type="number"
                                    placeholder="0"
                                    min="0"
                                    value={xIsYPercentX}
                                    onChange={(e) => {
                                      setXIsYPercentX(e.target.value);
                                    }}
                                />
                            </div>
                            <p> is </p>
                            <div className="small_input_wrap">
                                <input
                                    type="number"
                                    placeholder="0"
                                    min="0"
                                    value={xIsYPercentY}
                                    onChange={(e) => {
                                      setXIsYPercentY(e.target.value);
                                    }}
                                />
                                <p>%</p>
                            </div>
                            <p> of what? </p>
                        </motion.div>}
                        {selectedOption.selectValue === "percentage_d" &&
                        <motion.div 
                            className="percentage_wrap"
                            initial={{ opacity: 0, y: "-2rem" }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="small_input_wrap">
                                <input
                                    type="number"
                                    placeholder="0"
                                    min="0"
                                    value={increasePercentX}
                                    onChange={(e) => {
                                      setIncreasePercentX(e.target.value);
                                    }}
                                />
                            </div>
                            <p> increase by </p>
                            <div className="small_input_wrap">
                                <input
                                    type="number"
                                    placeholder="0"
                                    min="0"
                                    value={increasePercentY}
                                    onChange={(e) => {
                                      setIncreasePercentY(e.target.value);
                                    }}
                                />
                                <p>%</p>
                            </div>
                        </motion.div>}

                        {selectedOption.selectValue === "percentage_e" &&
                        <motion.div 
                            className="percentage_wrap"
                            initial={{ opacity: 0, y: "-2rem" }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="small_input_wrap">
                                <input
                                    type="number"
                                    placeholder="0"
                                    min="0"
                                    value={decreasePercentX}
                                    onChange={(e) => {
                                      setDecreasePercentX(e.target.value);
                                    }}
                                />
                            </div>
                            <p> decrease by </p>
                            <div className="small_input_wrap">
                                <input
                                    type="number"
                                    placeholder="0"
                                    min="0"
                                    value={decreasePercentY}
                                    onChange={(e) => {
                                      setDecreasePercentY(e.target.value);
                                    }}
                                />
                                <p>%</p>
                            </div>
                        </motion.div>}
                        {selectedOption.selectValue === "percentage_f" &&
                        <motion.div 
                            className="percentage_wrap"
                            initial={{ opacity: 0, y: "-2rem" }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <p>Between </p>
                            <div className="small_input_wrap">
                                <input
                                    type="number"
                                    placeholder="0"
                                    min="0"
                                    value={percentDiffX}
                                    onChange={(e) => {
                                      setPercentDiffX(e.target.value);
                                    }}
                                />
                            </div>
                            <p> and </p>
                            <div className="small_input_wrap">
                                <input
                                    type="number"
                                    placeholder="0"
                                    min="0"
                                    value={percentDiffY}
                                    onChange={(e) => {
                                      setPercentDiffY(e.target.value);
                                    }}
                                />
                            </div>
                        </motion.div>}
                        
                        <div className="bmi_btn_wrap">
                            <CustomButton
                                btn_name={"Calculate"}
                                click={calculateResult}
                            />
                            <CustomBtnClear
                                clear={handleClear}
                            />
                        </div>
                    </div>
                    <div className="calc_table_wrap">
                        <table className="bmi_table">
                            <tbody>
                              {percentOfResultMap.map((row, index) => (
                                <tr key={index}>
                                  <td>{row.result_name}</td>
                                  <td><b>{row.result}</b></td>
                                </tr>
                              ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default PercentageCalculator
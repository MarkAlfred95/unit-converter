import { useState } from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./converter_styles.css"
import convert_icon from "../../assets/swap_horiz.svg"
import CustomSelect from "../../components/custom/custom_select"
import CustomBtnClear from "../../components/custom/custom_btn_clear"
import CustomBtnCopy from "../../components/custom/custom_btn_copy"

const TemperatureConverter = () => {

    const selectOptions = [
        { option: "°C", option_name: "celsius" },
        { option: "°F", option_name: "fahrenheit" },
        { option: "K", option_name: "kelvin" }
    ]

    const [selectedOptionA, setSelectedOptionA] = useState(selectOptions[0]);
    const [selectedOptionB, setSelectedOptionB] = useState(selectOptions[0]);

    const [inputValueA, setInputValueA] = useState(0);
    const [inputValueB, setInputValueB] = useState(0);

    const convertValues = (newValue, fromOption, toOption) => {

        if (fromOption.option_name === "celsius" && toOption.option_name === "fahrenheit"){
            return newValue * 9 / 5 + 32;
        }
        else if (fromOption.option_name === "celsius" && toOption.option_name === "kelvin"){
            return parseFloat(newValue) + 273.15;
        }
        else if (fromOption.option_name === "fahrenheit" && toOption.option_name === "celsius"){
            return (parseFloat(newValue) - 32) * 5 / 9;
        }
        else if (fromOption.option_name === "fahrenheit" && toOption.option_name === "kelvin"){
            return (parseFloat(newValue) + 459.67) * 5 / 9;
        }
        else if (fromOption.option_name === "kelvin" && toOption.option_name === "celsius"){
            return parseFloat(newValue) - 273.15;
        }
        else if (fromOption.option_name === "kelvin" && toOption.option_name === "fahrenheit"){
            return newValue * 9 / 5 - 459.67;
        } else {
            return newValue;
        }
    };
    
    const handleInputChangeA = (e) => {
        const newValue = e.target.value;
        setInputValueA(newValue);
        setInputValueB(convertValues(newValue, selectedOptionA, selectedOptionB));
    };

    const handleInputChangeB = (e) => {
        const newValue = e.target.value;
        setInputValueB(newValue);
        setInputValueA(convertValues(newValue, selectedOptionB, selectedOptionA));
    };

    const handleUnitChange = (unit) => {
        setSelectedOptionA(unit);
        setInputValueB(convertValues(inputValueA, unit, selectedOptionB));
        console.log(unit, selectedOptionB);
    }

    const handleUnitChangeB = (unit) => {
        setSelectedOptionB(unit);
        setInputValueB(convertValues(inputValueA, selectedOptionA, unit));
        console.log(selectedOptionA, unit);
    }

    const handleClear = () => {
        setInputValueA("");
        setInputValueB("");
    }

    const copyToClipboard = (value) => {
        navigator.clipboard.writeText(value)
        .then(() => {
            toast.success('Copied to the clipboard!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })
        .catch((error) => {
            console.error("Unable to copy:", error);
        });
    };

    return (
    <>
        <div className="pages_wrap">
            <div className="pages_container">
                <div className="pages_description_wrap">
                    <h1>Temperature Converter</h1>
                    <p>
                        A Temperature Converter is a tool used to convert temperatures between 
                        different units of measurement. It facilitates the quick and precise conversion 
                        of temperatures expressed in Celsius, Fahrenheit, and Kelvin scales.
                    </p>
                </div>

                <div className="converter_container">
                    <div className="converter_wrap">
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <CustomSelect 
                                selectOptions={selectOptions}
                                selectedOption={selectedOptionA}
                                setSelectedOption={handleUnitChange}
                            />
                        </div>
                        <input 
                            type="number" 
                            placeholder="0" 
                            value={inputValueA} 
                            onChange={handleInputChangeA}
                        />
                        <div className="converter_btns_wrap">
                            <CustomBtnCopy 
                                copy={() => copyToClipboard(inputValueA)} 
                            />
                            <CustomBtnClear 
                                clear={handleClear}
                            />
                        </div>
                    </div>

                    <div className="horizontal_division"></div>
                    <div className="converter_line"></div>
                    <div className="convert_icon_wrap">
                        <img
                            className="convert_icon"
                            src={convert_icon}
                            alt="convert"
                        />
                    </div>
                    <div className="horizontal_division"></div>

                    <div className="converter_wrap">
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <CustomSelect 
                                selectOptions={selectOptions}
                                selectedOption={selectedOptionB}
                                setSelectedOption={handleUnitChangeB}
                            />
                        </div>
                        <input 
                            type="number" 
                            placeholder="0" 
                            value={inputValueB}
                            onChange={handleInputChangeB} 
                        />
                        <div className="converter_btns_wrap">
                            <CustomBtnCopy 
                                copy={() => copyToClipboard(inputValueB)} 
                            />
                            <CustomBtnClear 
                                clear={handleClear}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <ToastContainer />
    </>
    )
}

export default TemperatureConverter;
import { useState } from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./converter_styles.css"
import convert_icon from "../../assets/swap_horiz.svg"
import CustomSelect from "../../components/custom/custom_select"
import CustomBtnClear from "../../components/custom/custom_btn_clear"
import CustomBtnCopy from "../../components/custom/custom_btn_copy"
import ScrollToTop from "../../components/scrolltotop";

const LengthConverter = () => {

    const selectOptions = [
        { option: "cm", option_name: "centimeters" },
        { option: "m", option_name: "meters" },
        { option: "km", option_name: "kilometers" },
        { option: "in", option_name: "inches" },
        { option: "ft", option_name: "feet" },
        { option: "yd", option_name: "yards" },
        { option: "mi", option_name: "miles" },
    ]

    const conversionTable = {
        centimeters: {
            meters: 0.01,
            kilometers: 0.00001,
            inches: 0.393700787,
            feet: 0.032808399,
            yards: 0.010936133,
            miles: 1 / 160934.4
        },
        meters: {
            centimeters: 100,
            kilometers: 0.001,
            inches: 39.3700787,
            feet: 3.2808399,
            yards: 1.0936133,
            miles: 1 / 1609.344
        },
        kilometers: {
            centimeters: 100000,
            meters: 1000,
            inches: 39370.0787,
            feet: 3280.8399,
            yards: 1093.6133,
            miles: 1 / 1.609344
        },
        inches: {
            centimeters: 2.54,
            meters: 0.0254,
            kilometers: 1 / 39370.0787,
            feet: 1 / 12,
            yards: 1 / 36,
            miles: 1 / 63360
        },
        feet: {
            centimeters: 30.48,
            meters: 0.3048,
            kilometers: 1 / 3280.8399,
            inches: 12,
            yards: 1 / 3,
            miles: 1 / 5280
        },
        yards: {
            centimeters: 91.44,
            meters: 0.9144,
            kilometers: 1 / 1093.6133,
            inches: 36,
            feet: 3,
            miles: 1 / 1760
        },
        miles: {
            centimeters: 160934.4,
            meters: 1609.344,
            kilometers: 1.609344,
            inches: 63360,
            feet: 5280,
            yards: 1760
        }
    };

    const [selectedOptionA, setSelectedOptionA] = useState(selectOptions[0]);
    const [selectedOptionB, setSelectedOptionB] = useState(selectOptions[0]);

    const [inputValueA, setInputValueA] = useState("");
    const [inputValueB, setInputValueB] = useState("");

    const convertValues = (newValue, fromOption, toOption) => {
        const conversionFactor = conversionTable[fromOption.option_name]?.[toOption.option_name];
        // const conversionFactorRounded = parseFloat(conversionFactor.toFixed(6));
        return conversionFactor !== undefined ? newValue *  conversionFactor : newValue;
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
    }

    const handleUnitChangeB = (unit) => {
        setSelectedOptionB(unit);
        setInputValueB(convertValues(inputValueA, selectedOptionA, unit));
    }

    const handleClear = () => {
        setInputValueA("");
        setInputValueB("");
    }

    const copyToClipboard = (value) => {
        navigator.clipboard.writeText(value)
        .then(() => {
            // alert("Value copied to clipboard!");
            toast.success('Copied to the clipboard!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                // transition: Bounce,
            });
        })
        .catch((error) => {
            console.error("Unable to copy:", error);
        });
    };

    return (
    <>
        <ScrollToTop />
        <div className="pages_wrap">
            <div className="pages_container">
                <div className="pages_description_wrap">
                    <h1>Length Converter</h1>
                    <p>
                    A Length Converter is a tool used to convert distances or lengths between 
                    different units of measurement. It allows users to quickly and accurately convert 
                    measurements such as meters, feet, inches, centimeters, kilometers, miles, and more.
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

export default LengthConverter;
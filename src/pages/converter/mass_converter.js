import { useState } from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./converter_styles.css"
import convert_icon from "../../assets/swap_horiz.svg"
import CustomSelect from "../../components/custom/custom_select"
import CustomBtnClear from "../../components/custom/custom_btn_clear"
import CustomBtnCopy from "../../components/custom/custom_btn_copy"
import ScrollToTop from "../../components/scrolltotop";

const MassConverter = () => {

    const selectOptions = [
        { option: "g", option_name: "grams" },
        { option: "mg", option_name: "milligrams" },
        { option: "kg", option_name: "kilograms" },
        { option: "lb", option_name: "pounds" },
        { option: "oz", option_name: "ounces" },
        { option: "ct", option_name: "carat" },
        { option: "t", option_name: "tonne" },
    ]

    const conversionTable = {
        grams: {
            milligrams: 1000,
            kilograms: 0.001,
            pounds: 0.00220462,
            ounces: 0.035274,
            karat: 5,
            tonne: 1e-6
        },
        milligrams: {
            grams: 0.001,
            kilograms: 1e-6,
            pounds: 2.20462e-6,
            ounces: 3.5274e-5,
            karat: 0.005,
            tonne: 1e-9
        },
        kilograms: {
            grams: 1000,
            milligrams: 1e+6,
            pounds: 2.20462,
            ounces: 35.274,
            karat: 5000,
            tonne: 0.001
        },
        pounds: {
            grams: 453.592,
            milligrams: 453592,
            kilograms: 0.453592,
            ounces: 16,
            karat: 2267.96,
            tonne: 0.000453592
        },
        ounces: {
            grams: 28.3495,
            milligrams: 28349.5,
            kilograms: 0.0283495,
            pounds: 0.0625,
            karat: 141.748,
            tonne: 2.83495e-5
        },
        karat: {
            grams: 0.2,
            milligrams: 200,
            kilograms: 0.0002,
            pounds: 0.000440925,
            ounces: 0.00705479,
            tonne: 2e-7
        },
        tonne: {
            grams: 1e+6,
            milligrams: 1e+9,
            kilograms: 1000,
            pounds: 2204.62,
            ounces: 35274,
            karat: 5e+6
        }
    };

    const [selectedOptionA, setSelectedOptionA] = useState(selectOptions[0]);
    const [selectedOptionB, setSelectedOptionB] = useState(selectOptions[0]);

    const [inputValueA, setInputValueA] = useState("");
    const [inputValueB, setInputValueB] = useState("");

    const convertValues = (newValue, fromOption, toOption) => {
        const conversionFactor = conversionTable[fromOption.option_name]?.[toOption.option_name];
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
                    <h1>Mass Converter</h1>
                    <p>
                        A Mass Converter is a tool used to convert mass measurements from one unit to another. 
                        It enables users to quickly and accurately convert weights between different units 
                        such as grams, kilograms, ounces, pounds, tons, and more.
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

export default MassConverter;
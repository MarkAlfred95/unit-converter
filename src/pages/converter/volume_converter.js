import { useState } from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./converter_styles.css"
import convert_icon from "../../assets/swap_horiz.svg"
import CustomSelect from "../../components/custom/custom_select"
import CustomBtnClear from "../../components/custom/custom_btn_clear"
import CustomBtnCopy from "../../components/custom/custom_btn_copy"
import ScrollToTop from "../../components/scrolltotop";

const VolumeConverter = () => {

    const selectOptions = [
        { option: "l", option_name: "liters" },
        { option: "ml", option_name: "milliliters" },
        { option: "m³", option_name: "cubic meters" },
        { option: "cm³", option_name: "cubic centimeters" },
        { option: "in³", option_name: "cubic inches" },
        { option: "ft³", option_name: "cubic feet" },
        { option: "gal", option_name: "gallons" },
    ]

    const conversionTable = {
        liters: {
            milliliters: 1000,
            cubic_meters: 0.001,
            cubic_centimeters: 1000,
            cubic_inches: 61.0237,
            cubic_feet: 0.0353147,
            gallons: 0.264172,
        },
        milliliters: {
            liters: 0.001,
            cubic_meters: 1e-6,
            cubic_centimeters: 1,
            cubic_inches: 0.0610237,
            cubic_feet: 0.0000353147,
            gallons: 0.000264172,
        },
        cubic_meters: {
            liters: 1000,
            milliliters: 1e+6,
            cubic_centimeters: 1e+6,
            cubic_inches: 61023.7,
            cubic_feet: 35.3147,
            gallons: 264.172,
        },
        cubic_centimeters: {
            liters: 0.001,
            milliliters: 1,
            cubic_meters: 1e-6,
            cubic_inches: 0.0610237,
            cubic_feet: 0.0000353147,
            gallons: 0.000264172,
        },
        cubic_inches: {
            liters: 0.0163871,
            milliliters: 16.3871,
            cubic_meters: 1.63871e-5,
            cubic_centimeters: 16.3871,
            cubic_feet: 0.000578704,
            gallons: 0.004329,
        },
        cubic_feet: {
            liters: 28.3168,
            milliliters: 28316.8,
            cubic_meters: 0.0283168,
            cubic_centimeters: 28316.8,
            cubic_inches: 1728,
            gallons: 7.48052,
        },
        gallons: {
            liters: 3.78541,
            milliliters: 3785.41,
            cubic_meters: 0.00378541,
            cubic_centimeters: 3785.41,
            cubic_inches: 231,
            cubic_feet: 0.133681,
        },
    };
    

    const [selectedOptionA, setSelectedOptionA] = useState(selectOptions[0]);
    const [selectedOptionB, setSelectedOptionB] = useState(selectOptions[0]);

    const [inputValueA, setInputValueA] = useState("");
    const [inputValueB, setInputValueB] = useState("");

    const convertValues = (newValue, fromOption, toOption) => {
        const fromUnit = fromOption.option_name.replace(/ /g, "_");
        const toUnit = toOption.option_name.replace(/ /g, "_");
        const conversionFactor = conversionTable[fromUnit]?.[toUnit];
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
                    <h1>Volume Converter</h1>
                    <p>
                    A Volume Converter is a tool that used to convert volume measurements from one unit to 
                    another. It enables users to efficiently convert volumes expressed in units such as liters, 
                    milliliters, cubic meters, cubic feet, gallons, and ounces.
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

export default VolumeConverter;
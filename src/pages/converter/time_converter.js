import { useState } from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./converter_styles.css"
import convert_icon from "../../assets/swap_horiz.svg"
import CustomSelect from "../../components/custom/custom_select"
import CustomBtnClear from "../../components/custom/custom_btn_clear"
import CustomBtnCopy from "../../components/custom/custom_btn_copy"

const TimeConverter = () => {

    const selectOptions = [
        { option: "s", option_name: "seconds" },
        { option: "m", option_name: "minutes" },
        { option: "h", option_name: "hours" },
        { option: "ms", option_name: "milliseconds" },
        { option: "d", option_name: "days" },
        { option: "wk", option_name: "weeks" },
        { option: "y", option_name: "years" },
    ]

    const conversionTable = {
        seconds: {
            minutes: 1 / 60,
            hours: 1 / 3600,
            milliseconds: 1000,
            days: 1 / 86400,
            weeks: 1 / 604800,
            years: 1 / 31536000
        },
        minutes: {
            seconds: 60,
            hours: 1 / 60,
            milliseconds: 60000,
            days: 1 / 1440,
            weeks: 1 / 10080,
            years: 1 / 525600
        },
        hours: {
            seconds: 3600,
            minutes: 60,
            milliseconds: 3600000,
            days: 1 / 24,
            weeks: 1 / 168,
            years: 1 / 8760
        },
        milliseconds: {
            seconds: 0.001,
            minutes: 1 / 60000,
            hours: 1 / 3600000,
            days: 1 / 86400000,
            weeks: 1 / 604800000,
            years: 1 / 31536000000
        },
        days: {
            seconds: 86400,
            minutes: 1440,
            hours: 24,
            milliseconds: 86400000,
            weeks: 1 / 7,
            years: 1 / 365
        },
        weeks: {
            seconds: 604800,
            minutes: 10080,
            hours: 168,
            milliseconds: 604800000,
            days: 7,
            years: 1 / 52.143
        },
        years: {
            seconds: 31536000,
            minutes: 525600,
            hours: 8760,
            milliseconds: 31536000000,
            days: 365,
            weeks: 52.143
        }
    };
    

    const [selectedOptionA, setSelectedOptionA] = useState(selectOptions[0]);
    const [selectedOptionB, setSelectedOptionB] = useState(selectOptions[0]);

    const [inputValueA, setInputValueA] = useState(0);
    const [inputValueB, setInputValueB] = useState(0);

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
                    <h1>Time Converter</h1>
                    <p>
                        A Time Converter is a practical tool used to convert time measurements 
                        between various units of time. It enables users to efficiently convert durations 
                        expressed in units such as seconds, minutes, hours, days, weeks and years.
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

export default TimeConverter;
import { useState } from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./converter_styles.css"
import convert_icon from "../../assets/swap_horiz.svg"
import CustomSelect from "../../components/custom/custom_select"
import CustomBtnClear from "../../components/custom/custom_btn_clear"
import CustomBtnCopy from "../../components/custom/custom_btn_copy"

const DataConverter = () => {

    const selectOptions = [
        { option: "B", option_name: "bytes" },
        { option: "KB", option_name: "kilobytes" },
        { option: "MB", option_name: "megabytes" },
        { option: "GB", option_name: "gigabytes" },
        { option: "TB", option_name: "terabytes" },
        { option: "PB", option_name: "petabytes" }
    ]

    const conversionTable = {
        bytes: {
            kilobytes: 1 / 1024,
            megabytes: 1 / (1024 * 1024),
            gigabytes: 1 / (1024 * 1024 * 1024),
            terabytes: 1 / (1024 * 1024 * 1024 * 1024),
            petabytes: 1 / (1024 * 1024 * 1024 * 1024 * 1024)
        },
        kilobytes: {
            bytes: 1024,
            megabytes: 1 / 1024,
            gigabytes: 1 / (1024 * 1024),
            terabytes: 1 / (1024 * 1024 * 1024),
            petabytes: 1 / (1024 * 1024 * 1024 * 1024)
        },
        megabytes: {
            bytes: 1024 * 1024,
            kilobytes: 1024,
            gigabytes: 1 / 1024,
            terabytes: 1 / (1024 * 1024),
            petabytes: 1 / (1024 * 1024 * 1024)
        },
        gigabytes: {
            bytes: 1024 * 1024 * 1024,
            kilobytes: 1024 * 1024,
            megabytes: 1024,
            terabytes: 1 / 1024,
            petabytes: 1 / (1024 * 1024)
        },
        terabytes: {
            bytes: 1024 * 1024 * 1024 * 1024,
            kilobytes: 1024 * 1024 * 1024,
            megabytes: 1024 * 1024,
            gigabytes: 1024,
            petabytes: 1 / 1024
        },
        petabytes: {
            bytes: 1024 * 1024 * 1024 * 1024 * 1024,
            kilobytes: 1024 * 1024 * 1024 * 1024,
            megabytes: 1024 * 1024 * 1024,
            gigabytes: 1024 * 1024,
            terabytes: 1024
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
                    <h1>Data Converter</h1>
                    <p>
                        A Data Converter is a versatile tool designed to convert data storage capacities. 
                        It facilitates the seamless conversion of digital information from one scale to another, 
                        enabling users to comprehend and manage data storage requirements more effectively.
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

export default DataConverter;
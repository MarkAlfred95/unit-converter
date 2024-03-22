import { useState } from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./converter_styles.css"
import convert_icon from "../../assets/swap_horiz.svg"
import CustomSelect from "../../components/custom/custom_select"
import CustomBtnClear from "../../components/custom/custom_btn_clear"
import CustomBtnCopy from "../../components/custom/custom_btn_copy"

const SpeedConverter = () => {

    const selectOptions = [
        { option: "m/s", option_name: "meters per second" },
        { option: "km/h", option_name: "kilometers per hour" },
        { option: "km/s", option_name: "kilometers per second" },
        { option: "kn", option_name: "knots" },
        { option: "mph", option_name: "miles per hour" },
        { option: "Ma", option_name: "mach" },
        { option: "c", option_name: "lightspeed" },
    ]

    const conversionTable = {
        meters_per_second: {
            kilometers_per_hour: 3.6,
            kilometers_per_second: 0.001,
            knots: 1.94384,
            miles_per_hour: 2.23694,
            mach: 0.00293858,
            lightspeed: 3.33564e-9
        },
        kilometers_per_hour: {
            meters_per_second: 0.277778,
            kilometers_per_second: 0.000277778,
            knots: 0.539957,
            miles_per_hour: 0.621371,
            mach: 0.000816197,
            lightspeed: 9.461e-13
        },
        kilometers_per_second: {
            meters_per_second: 1000,
            kilometers_per_hour: 3600,
            knots: 1943.84,
            miles_per_hour: 2236.94,
            mach: 2.93858,
            lightspeed: 3.33564e-6
        },
        knots: {
            meters_per_second: 0.514444,
            kilometers_per_hour: 1.852,
            kilometers_per_second: 0.000514444,
            miles_per_hour: 1.15078,
            mach: 0.00151176,
            lightspeed: 1.716e-12
        },
        miles_per_hour: {
            meters_per_second: 0.44704,
            kilometers_per_hour: 1.60934,
            kilometers_per_second: 0.00044704,
            knots: 0.868976,
            mach: 0.00112672,
            lightspeed: 1.609e-12
        },
        mach: {
            meters_per_second: 340.29,
            kilometers_per_hour: 1234.8,
            kilometers_per_second: 0.34029,
            knots: 661.47,
            miles_per_hour: 761.207,
            lightspeed: 1.142e-6
        },
        lightspeed: {
            meters_per_second: 299792458,
            kilometers_per_hour: 1079252850.7,
            kilometers_per_second: 299792.458,
            knots: 582749913.3,
            miles_per_hour: 670616629.4,
            mach: 874030.489
        }
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
                    <h1>Speed Converter</h1>
                    <p>
                        A Speed Converter is a useful tool that allows users to swiftly and accurately 
                        convert velocities expressed in units such as kilometers per hour (km/h), miles 
                        per hour (mph), meters per second (m/s), and knots (nautical miles per hour).
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

export default SpeedConverter;
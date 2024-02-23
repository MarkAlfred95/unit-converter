import { useState } from "react";

import CustomInput from "../../../components/custom/custom_input";
import CustomBtnCalculate from "../../../components/custom/custom_btn_calculate";
import CustomBtnClear from "../../../components/custom/custom_btn_clear";

const AreaRectangle = ({
    selectOptions,
    modalOpen,
    open,
    close,
    setResultTitle,
    setCalculationResult,
    setSolution
}) => {

    const [inputValueRectL, setInputValueRectL] = useState(0);
    const [unitValueRectL, setUnitValueRectL] = useState("centimeters");
    const handleInputChangeRectL = (value) => {
        setInputValueRectL(value);
    };
    const handleUnitChangeRectL = (unit) => {
        setUnitValueRectL(unit);
    };
    const [inputValueRectW, setInputValueRectW] = useState(0);
    const [unitValueRectW, setUnitValueRectW] = useState("centimeters");
    const handleInputChangeRectW = (value) => {
        setInputValueRectW(value);
    };
    const handleUnitChangeRectW = (unit) => {
        setUnitValueRectW(unit);
    };
    const handleCalculateArea_Rectangle = () => {
        let calculation = 0;
        let result = "";
        if (unitValueRectL === unitValueRectW){
            calculation = inputValueRectL * inputValueRectW;
            result = calculation + " square " + unitValueRectL;
        }
        else{
            result = "Length conversion not yet available";
        }
        setResultTitle("Area of Rectangle");
        setCalculationResult(result);

        const solutionJSX = (
            <>
                <div className="result_text">Area of Rectangle Formula: <b>A = l × w</b></div>
                <div className="result_text">A = l × w</div>
                <div className="result_text">A = {inputValueRectL} × {inputValueRectW}</div>
                <div className="result_text">A = <b>{result}</b></div>
            </>
        );
        setSolution(solutionJSX);

        modalOpen ? close() : open();
    }

    const [valueL, setValueL] = useState('');
    const [unitL, setUnitL] = useState(selectOptions[0]);
    const [valueW, setValueW] = useState('');
    const [unitW, setUnitW] = useState(selectOptions[0]);

    const handleClear = () => {
        setInputValueRectL(0);
        setUnitValueRectL("centimeters");
        setInputValueRectW(0);
        setUnitValueRectW("centimeters");
        setValueL('');
        setUnitL(selectOptions[0]);
        setValueW('');
        setUnitW(selectOptions[0]);
    }
    

    return (
        <div className="calc_category_container">
            <div className="calc_category_title">Rectangle</div>
            <div className="calc_category_content_wrap">
                <div className="shape_wrap">
                    <div className="rectangle"></div>
                </div>
                <div className="input_wrap">
                    <CustomInput
                        label="Length"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeRectL}
                        onUnitChange={handleUnitChangeRectL}
                        value={valueL}
                        setValue={setValueL}
                        unit={unitL}
                        setUnit={setUnitL}
                    />
                    <CustomInput
                        label="Width"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeRectW}
                        onUnitChange={handleUnitChangeRectW}
                        value={valueW}
                        setValue={setValueW}
                        unit={unitW}
                        setUnit={setUnitW}
                    />
                </div>
                <div className="calc_category_btns">
                    <CustomBtnCalculate 
                        calculate={handleCalculateArea_Rectangle}
                    />
                    <CustomBtnClear 
                        clear={handleClear}
                    />
                </div>
            </div>
        </div>
    )
}

export default AreaRectangle;
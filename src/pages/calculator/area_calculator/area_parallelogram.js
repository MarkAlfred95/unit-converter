import { useState } from "react";

import CustomInput from "../../../components/custom/custom_input";
import CustomBtnCalculate from "../../../components/custom/custom_btn_calculate";
import CustomBtnClear from "../../../components/custom/custom_btn_clear";

import useLengthConverter from "../../../hooks/useLengthConverter";

const AreaParallelogram = ({
    selectOptions,
    modalOpen,
    open,
    close,
    setResultTitle,
    setCalculationResult,
    setSolution
}) => {

    const [inputValueParB, setInputValueParB] = useState(0);
    const [unitValueParB, setUnitValueParB] = useState("centimeters");
    const handleInputChangeParB = (value) => {
        setInputValueParB(value);
    };
    const handleUnitChangeParB = (unit) => {
        setUnitValueParB(unit);
    };
    const [inputValueParH, setInputValueParH] = useState(0);
    const [unitValueParH, setUnitValueParH] = useState("centimeters");
    const handleInputChangeParH = (value) => {
        setInputValueParH(value);
    };
    const handleUnitChangeParH = (unit) => {
        setUnitValueParH(unit);
    };

    const convertedValue = useLengthConverter(inputValueParH, unitValueParH, unitValueParB);
    const handleCalculateArea_Parallelogram = () => {
        const calculation = inputValueParB * convertedValue;
        const result = calculation + " square " + unitValueParB;

        setResultTitle("Area of Parallelogram");
        setCalculationResult(result);

        const solutionJSX = (
            <>
                <div className="result_text">Area of Parallelogram Formula: <b>A = b × h</b></div>
                <div className="result_text">A = b × h</div>
                <div className="result_text">A = {inputValueParB} × {convertedValue}</div>
                <div className="result_text">A = <b>{result}</b></div>
            </>
        );
        setSolution(solutionJSX);

        modalOpen ? close() : open();
    }

    const [valueB, setValueB] = useState('');
    const [unitB, setUnitB] = useState(selectOptions[0]);
    const [valueH, setValueH] = useState('');
    const [unitH, setUnitH] = useState(selectOptions[0]);

    const handleClear = () => {
        setInputValueParB(0);
        setUnitValueParB("centimeters");
        setInputValueParH(0);
        setUnitValueParH("centimeters");
        setValueB('');
        setUnitB(selectOptions[0]);
        setValueH('');
        setUnitH(selectOptions[0]);
    }

    return (
        <div className="calc_category_container">
            <div className="calc_category_title">Parallelogram</div>
            <div className="calc_category_content_wrap">
                <div className="shape_wrap">
                    <div className="parallelogram"></div>
                </div>
                <div className="input_wrap">
                    <CustomInput
                        label="Base"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeParB}
                        onUnitChange={handleUnitChangeParB}
                        value={valueB}
                        setValue={setValueB}
                        unit={unitB}
                        setUnit={setUnitB}
                    />
                    <CustomInput
                        label="Height"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeParH}
                        onUnitChange={handleUnitChangeParH}
                        value={valueH}
                        setValue={setValueH}
                        unit={unitH}
                        setUnit={setUnitH}
                    />
                </div>
                <div className="calc_category_btns">
                    <CustomBtnCalculate 
                        calculate={handleCalculateArea_Parallelogram}
                    />
                    <CustomBtnClear 
                        clear={handleClear}
                    />
                </div>
            </div>
        </div>
    )
}

export default AreaParallelogram;
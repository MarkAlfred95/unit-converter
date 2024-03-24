import { useState } from "react";

import CustomInput from "../../../components/custom/custom_input";
import CustomBtnCalculate from "../../../components/custom/custom_btn_calculate";
import CustomBtnClear from "../../../components/custom/custom_btn_clear";

import useLengthConverter from "../../../hooks/useLengthConverter";

const AreaTrapezoid = ({
    selectOptions,
    modalOpen,
    open,
    close,
    setResultTitle,
    setCalculationResult,
    setSolution
}) => {

    const [inputValueTraA, setInputValueTraA] = useState(0);
    const [unitValueTraA, setUnitValueTraA] = useState("centimeters");
    const handleInputChangeTraA = (value) => {
        setInputValueTraA(value);
    };
    const handleUnitChangeTraA = (unit) => {
        setUnitValueTraA(unit);
    };
    const [inputValueTraB, setInputValueTraB] = useState(0);
    const [unitValueTraB, setUnitValueTraB] = useState("centimeters");
    const handleInputChangeTraB = (value) => {
        setInputValueTraB(value);
    };
    const handleUnitChangeTraB = (unit) => {
        setUnitValueTraB(unit);
    };
    const [inputValueTraH, setInputValueTraH] = useState(0);
    const [unitValueTraH, setUnitValueTraH] = useState("centimeters");
    const handleInputChangeTraH = (value) => {
        setInputValueTraH(value);
    };
    const handleUnitChangeTraH = (unit) => {
        setUnitValueTraH(unit);
    };

    const convertedValueTraB = useLengthConverter(inputValueTraB, unitValueTraB, unitValueTraA);
    const convertedValueTraH = useLengthConverter(inputValueTraH, unitValueTraH, unitValueTraA);
    const handleCalculateArea_Trapezoid = () => {
        const a = parseFloat(inputValueTraA);
        const b = parseFloat(convertedValueTraB);
        const calculation = ((a + b) / 2) * convertedValueTraH;
        const result = calculation + " square " + unitValueTraA;
        setResultTitle("Area of Trapezoid");
        setCalculationResult(result);
        
        const solutionJSX = (
            <>
                <div className="result_text">Area of Trapezoid Formula: <b>A = [(b1 + b2) ÷ 2] × h</b></div>
                <div className="result_text">A = [(b1 + b2) ÷ 2] × h</div>
                <div className="result_text">A = [({inputValueTraA} + {convertedValueTraB}) ÷ 2] × {convertedValueTraH}</div>
                <div className="result_text">A = ({a + b} ÷ 2) × {convertedValueTraH}</div>
                <div className="result_text">A = {(a + b) / 2} × {convertedValueTraH}</div>
                <div className="result_text">A = <b>{result}</b></div>
            </>
        );
        setSolution(solutionJSX);

        modalOpen ? close() : open();
    }

    const [valueA, setValueA] = useState('');
    const [unitA, setUnitA] = useState(selectOptions[0]);
    const [valueB, setValueB] = useState('');
    const [unitB, setUnitB] = useState(selectOptions[0]);
    const [valueH, setValueH] = useState('');
    const [unitH, setUnitH] = useState(selectOptions[0]);

    const handleClear = () => {
        setInputValueTraA(0);
        setUnitValueTraA("centimeters");
        setInputValueTraB(0);
        setUnitValueTraB("centimeters");
        setInputValueTraH(0);
        setUnitValueTraH("centimeters");
        setValueA('');
        setUnitA(selectOptions[0]);
        setValueB('');
        setUnitB(selectOptions[0]);
        setValueH('');
        setUnitH(selectOptions[0]);
    }

    return (
        <div className="calc_category_container">
            <div className="calc_category_title">Trapezoid</div>
            <div className="calc_category_content_wrap">
                <div className="shape_wrap">
                    <div className="trapezoid">
                        <div className="trapezoid_inside"></div>
                    </div>
                </div>
                <div className="input_wrap">
                    <CustomInput
                        label="Base 1"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeTraA}
                        onUnitChange={handleUnitChangeTraA}
                        value={valueA}
                        setValue={setValueA}
                        unit={unitA}
                        setUnit={setUnitA}
                    />
                    <CustomInput
                        label="Base 2"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeTraB}
                        onUnitChange={handleUnitChangeTraB}
                        value={valueB}
                        setValue={setValueB}
                        unit={unitB}
                        setUnit={setUnitB}
                    />
                    <CustomInput
                        label="Height"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeTraH}
                        onUnitChange={handleUnitChangeTraH}
                        value={valueH}
                        setValue={setValueH}
                        unit={unitH}
                        setUnit={setUnitH}
                    />
                </div>
                <div className="calc_category_btns">
                    <CustomBtnCalculate 
                        calculate={handleCalculateArea_Trapezoid}
                    />
                    <CustomBtnClear 
                        clear={handleClear}
                    />
                </div>
            </div>
        </div>
    )
}

export default AreaTrapezoid;
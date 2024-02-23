import { useState } from "react";

import CustomInput from "../../../components/custom/custom_input";
import CustomBtnCalculate from "../../../components/custom/custom_btn_calculate";
import CustomBtnClear from "../../../components/custom/custom_btn_clear";

const AreaTriangle = ({
    selectOptions,
    modalOpen,
    open,
    close,
    setResultTitle,
    setCalculationResult,
    setSolution
}) => {

    const [inputValueSideA, setInputValueSideA] = useState(0);
    const [unitValueSideA, setUnitValueSideA] = useState("centimeters");
    const handleInputChangeSideA = (value) => {
        setInputValueSideA(value);
    };
    const handleUnitChangeSideA = (unit) => {
        setUnitValueSideA(unit);
    };
    const [inputValueSideB, setInputValueSideB] = useState(0);
    const [unitValueSideB, setUnitValueSideB] = useState("centimeters");
    const handleInputChangeSideB = (value) => {
        setInputValueSideB(value);
    };
    const handleUnitChangeSideB = (unit) => {
        setUnitValueSideB(unit);
    };
    const [inputValueSideC, setInputValueSideC] = useState(0);
    const [unitValueSideC, setUnitValueSideC] = useState("centimeters");
    const handleInputChangeSideC = (value) => {
        setInputValueSideC(value);
    };
    const handleUnitChangeSideC = (unit) => {
        setUnitValueSideC(unit);
    };
    const handleCalculateArea_Triangle = () => {
        let calculation = 0;
        let result = "";
        const a = parseFloat(inputValueSideA);
        const b = parseFloat(inputValueSideB);
        const c = parseFloat(inputValueSideC);
        let s = 0;
        let r = 0;
        if (unitValueSideA === unitValueSideB && unitValueSideB === unitValueSideC){
            s = (a + b + c) / 2;
            r = s * (s - a) * (s - b) * (s - c);
            calculation = Math.sqrt(r);
            result = calculation + " square " + unitValueSideA;
        }
        else{
            result = "Length conversion not yet available";
        }
        setResultTitle("Area of Triangle");
        setCalculationResult(result);
        
        const solutionJSX = (
            <>
                <div className="result_text">Area of Triangle Formula: <b>√s(s-a)(s-b)(s-c)</b></div>
                <div className="result_text">s = (a + b + c) ÷ 2</div>
                <div className="result_text">s = ({a} + {b} + {c}) ÷ 2</div>
                <div className="result_text">s = {s}</div>
                <div className="result_text">A = √s(s-a)(s-b)(s-c)</div>
                <div className="result_text">A = √{s}({s}-{a})({s}-{b})({s}-{c})</div>
                <div className="result_text">A = √{r}</div>
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
    const [valueC, setValueC] = useState('');
    const [unitC, setUnitC] = useState(selectOptions[0]);

    const handleClear = () => {
        setInputValueSideA(0);
        setUnitValueSideA("centimeters");
        setInputValueSideB(0);
        setUnitValueSideB("centimeters");
        setInputValueSideC(0);
        setUnitValueSideC("centimeters");
        setValueA('');
        setUnitA(selectOptions[0]);
        setValueB('');
        setUnitB(selectOptions[0]);
        setValueC('');
        setUnitC(selectOptions[0]);
    }

    return (
        <div className="calc_category_container">
            <div className="calc_category_title">Triangle</div>
            <div className="calc_category_content_wrap">
                <div className="shape_wrap">
                    <div className="triangle">
                        <div className="triangle_inside"></div>
                    </div>
                </div>
                <div className="input_wrap">
                    <CustomInput
                        label="Side a"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeSideA}
                        onUnitChange={handleUnitChangeSideA}
                        value={valueA}
                        setValue={setValueA}
                        unit={unitA}
                        setUnit={setUnitA}
                    />
                    <CustomInput
                        label="Side b"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeSideB}
                        onUnitChange={handleUnitChangeSideB}
                        value={valueB}
                        setValue={setValueB}
                        unit={unitB}
                        setUnit={setUnitB}
                    />
                    <CustomInput
                        label="Side c"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeSideC}
                        onUnitChange={handleUnitChangeSideC}
                        value={valueC}
                        setValue={setValueC}
                        unit={unitC}
                        setUnit={setUnitC}
                    />
                </div>
                <div className="calc_category_btns">
                    <CustomBtnCalculate 
                        calculate={handleCalculateArea_Triangle}
                    />
                    <CustomBtnClear 
                        clear={handleClear}
                    />
                </div>
            </div>
        </div>
    )
}

export default AreaTriangle;
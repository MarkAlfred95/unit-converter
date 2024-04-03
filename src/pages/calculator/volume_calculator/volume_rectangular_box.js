import { useState } from "react";

import CustomInput from "../../../components/custom/custom_input";
import CustomBtnCalculate from "../../../components/custom/custom_btn_calculate";
import CustomBtnClear from "../../../components/custom/custom_btn_clear";
import volume_figure from "../../../assets/volume_figure_box.png";

import useLengthConverter from "../../../hooks/useLengthConverter";

const VolumeRectangularBox = ({
    selectOptions,
    modalOpen,
    open,
    close,
    setResultTitle,
    setCalculationResult,
    setSolution
}) => {

    const [inputValueBoxLength, setInputValueBoxLength] = useState(0);
    const [unitValueBoxLength, setUnitValueBoxLength] = useState("centimeters");
    const handleInputChangeBoxLength = (value) => {
        setInputValueBoxLength(value);
    };
    const handleUnitChangeBoxLength = (unit) => {
        setUnitValueBoxLength(unit);
    };
    const [inputValueBoxWidth, setInputValueBoxWidth] = useState(0);
    const [unitValueBoxWidth, setUnitValueBoxWidth] = useState("centimeters");
    const handleInputChangeBoxWidth = (value) => {
        setInputValueBoxWidth(value);
    };
    const handleUnitChangeBoxWidth = (unit) => {
        setUnitValueBoxWidth(unit);
    };
    const [inputValueBoxHeight, setInputValueBoxHeight] = useState(0);
    const [unitValueBoxHeight, setUnitValueBoxHeight] = useState("centimeters");
    const handleInputChangeBoxHeight = (value) => {
        setInputValueBoxHeight(value);
    };
    const handleUnitChangeBoxHeight = (unit) => {
        setUnitValueBoxHeight(unit);
    };

    const convertedValueBoxWidth = useLengthConverter(inputValueBoxWidth, unitValueBoxWidth, unitValueBoxLength);
    const convertedValueBoxHeight = useLengthConverter(inputValueBoxHeight, unitValueBoxHeight, unitValueBoxLength);
    const handleCalculateVolume_Box = () => {
        const calculation = inputValueBoxLength * convertedValueBoxWidth * convertedValueBoxHeight;
        const result = calculation + " cubic " + unitValueBoxLength;
        setResultTitle("Volume of Rectangular Box");
        setCalculationResult(result);
        
        const solutionJSX = (
            <>
                <div className="result_text">Volume of Rectangular Box Formula: <b>V = l × w × h</b></div>
                <div className="result_text">V = l × w × h</div>
                <div className="result_text">V = {inputValueBoxLength} × {convertedValueBoxWidth} × {convertedValueBoxHeight}</div>
                <div className="result_text">V = <b>{result}</b></div>
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
        setInputValueBoxLength(0);
        setUnitValueBoxLength("centimeters");
        setInputValueBoxWidth(0);
        setUnitValueBoxWidth("centimeters");
        setInputValueBoxHeight(0);
        setUnitValueBoxHeight("centimeters");
        setValueA('');
        setUnitA(selectOptions[0]);
        setValueB('');
        setUnitB(selectOptions[0]);
        setValueH('');
        setUnitH(selectOptions[0]);
    }

    return (
        <div className="calc_category_container">
            <div className="calc_category_title">Rectangular Box</div>
            <div className="calc_category_content_wrap">
                <div className="shape_wrap">
                    <img
                        loading="lazy"
                        style={{ width: "10rem" }}
                        src={volume_figure}
                        alt="box volume" 
                    />
                </div>
                <div className="input_wrap">
                    <CustomInput
                        label="Length"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeBoxLength}
                        onUnitChange={handleUnitChangeBoxLength}
                        value={valueA}
                        setValue={setValueA}
                        unit={unitA}
                        setUnit={setUnitA}
                    />
                    <CustomInput
                        label="Width"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeBoxWidth}
                        onUnitChange={handleUnitChangeBoxWidth}
                        value={valueB}
                        setValue={setValueB}
                        unit={unitB}
                        setUnit={setUnitB}
                    />
                    <CustomInput
                        label="Height"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChangeBoxHeight}
                        onUnitChange={handleUnitChangeBoxHeight}
                        value={valueH}
                        setValue={setValueH}
                        unit={unitH}
                        setUnit={setUnitH}
                    />
                </div>
                <div className="calc_category_btns">
                    <CustomBtnCalculate 
                        calculate={handleCalculateVolume_Box}
                    />
                    <CustomBtnClear 
                        clear={handleClear}
                    />
                </div>
            </div>
        </div>
    )
}

export default VolumeRectangularBox;
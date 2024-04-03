import { useState } from "react";

import CustomInput from "../../../components/custom/custom_input";
import CustomBtnCalculate from "../../../components/custom/custom_btn_calculate";
import CustomBtnClear from "../../../components/custom/custom_btn_clear";
import volume_figure from "../../../assets/volume_figure_cube.png";

const VolumeCube = ({
    selectOptions,
    modalOpen,
    open,
    close,
    setResultTitle,
    setCalculationResult,
    setSolution
}) => {

    const [inputValue, setInputValue] = useState(0);
    const [unitValue, setUnitValue] = useState("centimeters");

    const handleInputChange = (value) => {
        setInputValue(value);
    };
    const handleUnitChange = (unit) => {
        setUnitValue(unit);
    };

    const handleCalculateVolume_Cube = () => {
        let calculation = inputValue * inputValue * inputValue;
        let result = calculation + " cubic " + unitValue;
        setResultTitle("Volume of Cube");
        setCalculationResult(result);

        const solutionJSX = (
            <>
                <div className="result_text">Volume of Cube Formula: <b>V = a³</b></div>
                <div className="result_text">V = a³</div>
                <div className="result_text">V = {inputValue}³</div>
                <div className="result_text">V = <b>{result}</b></div>
            </>
        );
        setSolution(solutionJSX);

        modalOpen ? close() : open();
    }

    const [value, setValue] = useState('');
    const [unit, setUnit] = useState(selectOptions[0]);

    const handleClear = () => {
        setInputValue(0);
        setUnitValue("centimeters");
        setValue('');
        setUnit(selectOptions[0]);
    }

    return (
        <div className="calc_category_container">
            <div className="calc_category_title">Cube</div>
            <div className="calc_category_content_wrap">
                <div className="shape_wrap">
                    <img
                        loading="lazy"
                        style={{ width: "10rem" }}
                        src={volume_figure}
                        alt="cube volume" 
                    />
                </div>
                <div className="input_wrap">
                    <CustomInput
                        label="Side"
                        unitOptions={selectOptions}
                        onInputChange={handleInputChange}
                        onUnitChange={handleUnitChange}
                        value={value}
                        setValue={setValue}
                        unit={unit}
                        setUnit={setUnit}
                    />
                </div>
                <div className="calc_category_btns">
                    <CustomBtnCalculate 
                        calculate={handleCalculateVolume_Cube}
                    />
                    <CustomBtnClear 
                        clear={handleClear}
                    />
                </div>
            </div>
        </div>
    )
}

export default VolumeCube;
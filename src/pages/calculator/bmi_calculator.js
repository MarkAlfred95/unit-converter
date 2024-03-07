import { useState } from "react";

import CustomButton from "../../components/custom/custom_button";
import CustomBtnClear from "../../components/custom/custom_btn_clear";

const BMIInput = ({
    unitLabel,
    unit,
    value,
    onChange
}) => {

    const handleChange = (e) => {
        const value = e.target.value;
        onChange(value);
    }

    return (
        <div className="bmi_input_wrap">
            <div className="bmi_input_container">
                <div className="bmi_input_text">{unitLabel}</div>
                <div className="bmi_input_input_wrap">
                    <input 
                        className="bmi_input_input"
                        type="number" 
                        placeholder="0"
                        min="0"
                        value={value}
                        onChange={handleChange}
                    />
                    <div className="bmi_input_unit">
                        {unit}
                    </div>
                </div>
            </div>
        </div>
    );
};

const BMITable = ({ data }) => {
    return (
      <table className="bmi_table">
        <thead>
          <tr>
            <th></th>
            <th>BMI</th>
            <th>BMI Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <div className="bmi_table_td_color_wrap">
                    <div className="bmi_table_td_color" style={{ background: row.color }}></div>
                </div>
              </td>
              <td>{row.bmiValue}</td>
              <td>{row.bmiCategory}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
}

const BMICalculator = () => {
    // Metric
    const [weight, setWeight] = useState(60);
    const [height, setHeight] = useState(170);
    // Imperial
    const [weightLb, setWeightLb] = useState(160);
    const [heightFt, setHeightFt] = useState(5);
    const [heightIn, setHeightIn] = useState(9);

    const [bmi, setBMI] = useState(20.8);
    const [bmiCategory, setBMICategory] = useState("Normal");
    const [bmiX, setBMIX] = useState(27.6);
    const [bmiTextColor, setBMITextColor] = useState("#6BCB77");
    const [isMetric, setIsMetric] = useState(true);

    // const handleToggleUnitSystem = () => {
    //   setIsMetric(!isMetric);
    // };

    const bmiTableData = [
        { color: '#512B81', bmiValue: 'less than 16', bmiCategory: 'Severely Underweight' },
        { color: '#4D96FF', bmiValue: '16 - 18.5', bmiCategory: 'Underweight' },
        { color: '#6BCB77', bmiValue: '18.5 - 25', bmiCategory: 'Normal' },
        { color: '#FFD93D', bmiValue: '25 - 30', bmiCategory: 'Overweight' },
        { color: '#FF6B6B', bmiValue: '30 - 35', bmiCategory: 'Moderately Obese' },
        { color: '#D04848', bmiValue: 'more than 35', bmiCategory: 'Severely Obese' },
    ];

    const calculateBMIMetric = () => {
        const weightInKg = parseFloat(weight);
        const heightInM = parseFloat(height) / 100;

        if (weightInKg > 0 && heightInM > 0) {
            const bmiValue = weightInKg / (heightInM * heightInM);
            setBMI(bmiValue.toFixed(1));

            const bmiXVal = ((bmiValue - 15) / 21) * 100;

            if (bmiValue < 16) {
                setBMICategory('Severely Underweight');
                setBMIX(0);
                setBMITextColor("#512B81");
            } 
            else if (bmiValue >= 16 && bmiValue < 18.5) {
                setBMICategory('Underweight');
                setBMIX(bmiXVal);
                setBMITextColor("#4D96FF");
            } 
            else if (bmiValue >= 18.5 && bmiValue < 25) {
                setBMICategory('Normal');
                setBMIX(bmiXVal);
                setBMITextColor("#6BCB77");
            } 
            else if (bmiValue >= 25 && bmiValue < 30) {
                setBMICategory('Overweight');
                setBMIX(bmiXVal);
                setBMITextColor("#FFD93D");
            } 
            else if (bmiValue >= 30 && bmiValue < 35) {
                setBMICategory('Moderately Obese');
                setBMIX(bmiXVal);
                setBMITextColor("#FF6B6B");
            } 
            else {
                setBMICategory('Severely Obese');
                setBMIX(100);
                setBMITextColor("#D04848");
            }

        } else {
            setBMI(0.0);
            setBMICategory("--");
            setBMIX(0);
        }
    }

    const calculateBMIImperial = () => {
        const newWeight = parseFloat(weightLb) * 0.45359237;
        const weightInKg = parseFloat(newWeight);

        const newHeightIn = (parseFloat(heightFt) * 12) + parseFloat(heightIn);
        const newHeight = parseFloat(newHeightIn) * 2.54;
        const heightInM = parseFloat(newHeight) / 100;

        if (weightInKg > 0 && heightInM > 0) {
            const bmiValue = weightInKg / (heightInM * heightInM);
            setBMI(bmiValue.toFixed(1));

            const bmiXVal = ((bmiValue - 15) / 21) * 100;

            if (bmiValue < 16) {
                setBMICategory('Severely Underweight');
                setBMIX(0);
                setBMITextColor("#512B81");
            } 
            else if (bmiValue >= 16 && bmiValue < 18.5) {
                setBMICategory('Underweight');
                setBMIX(bmiXVal);
                setBMITextColor("#4D96FF");
            } 
            else if (bmiValue >= 18.5 && bmiValue < 25) {
                setBMICategory('Normal');
                setBMIX(bmiXVal);
                setBMITextColor("#6BCB77");
            } 
            else if (bmiValue >= 25 && bmiValue < 30) {
                setBMICategory('Overweight');
                setBMIX(bmiXVal);
                setBMITextColor("#FFD93D");
            } 
            else if (bmiValue >= 30 && bmiValue < 35) {
                setBMICategory('Moderately Obese');
                setBMIX(bmiXVal);
                setBMITextColor("#FF6B6B");
            } 
            else {
                setBMICategory('Severely Obese');
                setBMIX(100);
                setBMITextColor("#D04848");
            }

        } else {
            setBMI(0.0);
            setBMICategory("--");
            setBMIX(0);
        }
    }

    const calculateBMI = () => {
        isMetric ? calculateBMIMetric() : calculateBMIImperial();
    }

    const handleClear = () => {
        isMetric ? clearMetric() : clearImperial();
    }

    const clearMetric = () => {
        setWeight('');
        setHeight('');
        setBMI(0.0);
        setBMICategory("--");
        setBMIX(0);
    }
    const clearImperial = () => {
        setWeightLb('');
        setHeightFt('');
        setHeightIn('');
        setBMI(0.0);
        setBMICategory("--");
        setBMIX(0);
    }

    const handleChangeHeightFt = (e) => {
        const value = e.target.value;
        setHeightFt(value);
    }

    const handleChangeHeightIn = (e) => {
        const value = e.target.value;
        setHeightIn(value);
    }

    return (
        <>
        <div className="pages_wrap">
            <div className="pages_container">
                <div className="pages_description_wrap">
                    <h1>BMI Calculator</h1>
                    <p>
                        A BMI (Body Mass Index) Calculator is a practical tool used to assess an individual's body 
                        composition based on their height and weight. It calculates the BMI value by dividing a person's weight by 
                        the square of their height, providing a numerical indication of their body fatness or health status.
                    </p>
                </div>    

                <div className="calc_container">
                    <div className="bmi_unit_system_select">
                        <button
                            onClick={() => setIsMetric(true)}
                            style={{
                                backgroundColor: isMetric ? '#1B262C' : 'white',
                                color: isMetric ? 'white' : '#1B262C',
                            }}
                        >Metric
                        </button>
                        <button
                            onClick={() => setIsMetric(false)}
                            style={{
                                backgroundColor: !isMetric ? '#1B262C' : 'white',
                                color: !isMetric ? 'white' : '#1B262C',
                            }}
                        >Imperial
                        </button>
                    </div>

                    <div className="bmi_inputs_wrap">
                        {isMetric ? (
                            <>
                            <BMIInput 
                            unitLabel="Height:"
                            unit="cm"
                            value={height}
                            onChange={setHeight}
                            />
                            <BMIInput 
                                unitLabel="Weight:"
                                unit="kg"
                                value={weight}
                                onChange={setWeight}
                            />
                            </>
                        ) : (
                            <>
                            <div className="bmi_input_wrap">
                                <div className="bmi_input_container">
                                    <div className="bmi_input_text">Height:</div>
                                    <div className="bmi_input_input_wrap_small">
                                        <input 
                                            className="bmi_input_input"
                                            type="number" 
                                            placeholder="0"
                                            min="0"
                                            value={heightFt}
                                            onChange={handleChangeHeightFt}
                                        />
                                        <div className="bmi_input_unit">ft</div>
                                    </div>
                                    <div className="bmi_input_input_wrap_small">
                                        <input 
                                            className="bmi_input_input"
                                            type="number" 
                                            placeholder="0"
                                            value={heightIn}
                                            min="0"
                                            max="12"
                                            onChange={handleChangeHeightIn}
                                        />
                                        <div className="bmi_input_unit">in</div>
                                    </div>
                                </div>
                            </div>
                            <BMIInput 
                                unitLabel="Weight:"
                                unit="lb"
                                value={weightLb}
                                onChange={setWeightLb}
                            />
                            </>
                        )}
                    </div>

                    <div className="bmi_btn_wrap">
                        <CustomButton
                            btn_name={"Calculate BMI"}
                            click={calculateBMI} 
                        />
                        <CustomBtnClear 
                            clear={handleClear}
                        />
                    </div>

                    <div className="bmi_result_wrap">
                        <h1>BMI</h1>
                        <div className="bmi_result">{bmi}</div>
                        <div 
                            className="bmi_result_category"
                            style={{ color: bmiTextColor}}
                        >{bmiCategory}
                        </div>
                    </div>

                    <div className="bmi_chart_wrap">
                        <div className="bmi_chart_severe_under"></div>
                        <div className="bmi_chart_underweight"></div>
                        <div className="bmi_chart_normal"></div>
                        <div className="bmi_chart_overweight"></div>
                        <div className="bmi_chart_obese"></div>
                        <div className="bmi_chart_severe"></div>

                        <div className="bmi_scale">16.0</div>
                        <div className="bmi_scale bmi_scale-b">18.5</div>
                        <div className="bmi_scale bmi_scale-c">25.0</div>
                        <div className="bmi_scale bmi_scale-d">30.0</div>
                        <div className="bmi_scale bmi_scale-e">35.0</div>

                        <div 
                            className="bmi_scale_indicator_wrap"
                            style={{ transform: `translate(calc(${bmiX}% - 3px), -2px)` }}
                        >
                            <div className="bmi_scale_indicator">  
                            </div>
                        </div>
                    </div>

                    <div className="bmi_table_wrap">
                        <BMITable data={bmiTableData} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BMICalculator;
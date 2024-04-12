import { useState } from 'react';

import CustomButton from '../../components/custom/custom_button';
import CustomBtnClear from '../../components/custom/custom_btn_clear';
import ScrollToTop from '../../components/scrolltotop';

const TimeCalculator = () => {
    
    const [isAdd, setIsAdd] = useState(true);
    const [initDays, setInitDays] = useState('');
    const [initHours, setInitHours] = useState('');
    const [initMinutes, setInitMinutes] = useState('');
    const [initSeconds, setInitSeconds] = useState('');
    const [toDays, setToDays] = useState('');
    const [toHours, setToHours] = useState('');
    const [toMinutes, setToMinutes] = useState('');
    const [toSeconds, setToSeconds] = useState('');
    const [resultDays, setResultDays] = useState('');
    const [resultHours, setResultHours] = useState('');
    const [resultMinutes, setResultMinutes] = useState('');
    const [resultSeconds, setResultSeconds] = useState('');

    const calculateTime = () => {
        let totalInitSeconds = (+initDays * 24 * 60 * 60) + (+initHours * 60 * 60) + (+initMinutes * 60) + +initSeconds;
        let totalToSeconds = (+toDays * 24 * 60 * 60) + (+toHours * 60 * 60) + (+toMinutes * 60) + +toSeconds;
        let totalResultSeconds = isAdd ? totalInitSeconds + totalToSeconds : totalInitSeconds - totalToSeconds;
    
        let days = Math.floor(totalResultSeconds / (24 * 60 * 60));
        let hours = Math.floor((totalResultSeconds % (24 * 60 * 60)) / (60 * 60));
        let minutes = Math.floor((totalResultSeconds % (60 * 60)) / 60);
        let seconds = totalResultSeconds % 60;
    
        setResultDays(days.toString());
        setResultHours(hours.toString());
        setResultMinutes(minutes.toString());
        setResultSeconds(seconds.toString());
    }
    

    const handleClear = () => {
        setInitDays('');
        setInitHours('');
        setInitMinutes('');
        setInitSeconds('');
        setToDays('');
        setToHours('');
        setToMinutes('');
        setToSeconds('');
        setResultDays('');
        setResultHours('');
        setResultMinutes('');
        setResultSeconds('');
        setIsAdd(true);
    }

    const [inputExpression, setInputExpression] = useState('1d 2h 3m 4s + 4h 5s - 2030s');
    const [resultDaysExpression, setResultDaysExpression] = useState('0');
    const [resultHoursExpression, setResultHoursExpression] = useState('0');
    const [resultMinutesExpression, setResultMinutesExpression] = useState('0');
    const [resultSecondsExpression, setResultSecondsExpression] = useState('0');

    const calculateTimeExpression = () => {
        const parts = inputExpression.split(' ');
    
        let totalSeconds = 0;
        let currentOperation = '+';

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
    
            if (part.endsWith('d')) {
                const seconds = parseInt(part.slice(0, -1)) * 24 * 60 * 60;
                totalSeconds = currentOperation === '+' ? totalSeconds + seconds : totalSeconds - seconds;
            } else if (part.endsWith('h')) {
                const seconds = parseInt(part.slice(0, -1)) * 60 * 60;
                totalSeconds = currentOperation === '+' ? totalSeconds + seconds : totalSeconds - seconds;
            } else if (part.endsWith('m')) {
                const seconds = parseInt(part.slice(0, -1)) * 60;
                totalSeconds = currentOperation === '+' ? totalSeconds + seconds : totalSeconds - seconds;
            } else if (part.endsWith('s')) {
                const seconds = parseInt(part.slice(0, -1));
                totalSeconds = currentOperation === '+' ? totalSeconds + seconds : totalSeconds - seconds;
            } else if (part === '+') {
                currentOperation = '+';
            } else if (part === '-') {
                currentOperation = '-';
            }
        }
    
        const days = Math.floor(totalSeconds / (24 * 60 * 60));
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = totalSeconds % 60;
    
        setResultDaysExpression(days.toString() + " d");
        setResultHoursExpression(hours.toString() + " h");
        setResultMinutesExpression(minutes.toString() + " m");
        setResultSecondsExpression(seconds.toString() + " s");
    }
    
    const handleClearExpression = () => {
        setInputExpression('');
        setResultDaysExpression('0');
        setResultHoursExpression('0');
        setResultMinutesExpression('0');
        setResultSecondsExpression('0');
    }

    const resultValues = [
        {result_name: "Days", result: resultDaysExpression},
        {result_name: "Hours", result: resultHoursExpression},
        {result_name: "Minutes", result: resultMinutesExpression},
        {result_name: "Seconds", result: resultSecondsExpression},
    ]
    

    return (
        <>
        <ScrollToTop />
        <div className="pages_wrap">
            <div className="pages_container">
                <div className="pages_description_wrap">
                    <h1>Time Calculator</h1>
                    <p>
                        A Time Calculator is a useful tool designed to perform calculations 
                        involving time durations, intervals, or schedules. It enables users to add, subtract, 
                        multiply, or divide time values represented in hours, minutes, and seconds, facilitating 
                        accurate time management and planning.
                    </p>
                </div>
                <div className="calc_container">
                    <h2 style={{ marginBottom: "1rem", textAlign: "center" }}>Add or Subtract Time</h2>
                    <div 
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: "0.5rem"
                        }}>
                        <div className="time_calc_inputs_wrap">
                            <div className="time_calc_input_wrap">
                                <p>Days:</p>
                                <input
                                    type="number"
                                    min={0}
                                    placeholder="0"
                                    value={initDays}
                                    onChange={(e) => setInitDays(e.target.value)}
                                />
                            </div>
                            <div className="time_calc_input_wrap">
                                <p>Hours:</p>
                                <input
                                    type="number"
                                    min={0}
                                    placeholder="0"
                                    value={initHours}
                                    onChange={(e) => setInitHours(e.target.value)}
                                />
                            </div>
                            <div className="time_calc_input_wrap">
                                <p>Minutes:</p>
                                <input
                                    type="number"
                                    min={0}
                                    placeholder="0"
                                    value={initMinutes}
                                    onChange={(e) => setInitMinutes(e.target.value)}
                                />
                            </div>
                            <div className="time_calc_input_wrap">
                                <p>Seconds:</p>
                                <input
                                    type="number"
                                    min={0}
                                    placeholder="0"
                                    value={initSeconds}
                                    onChange={(e) => setInitSeconds(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="time_calc_radiobtns">
                            <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                <div className="time_calc_radiobtn">
                                    <button
                                        onClick={() => setIsAdd(true)}
                                        style={{
                                            backgroundColor: isAdd ? '#1B262C' : 'white',
                                            color: isAdd ? 'white' : '#1B262C',
                                        }}
                                    ></button>
                                </div>
                                <p>Add(+)</p>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                                <div className="time_calc_radiobtn">
                                    <button
                                        onClick={() => setIsAdd(false)}
                                        style={{
                                            backgroundColor: !isAdd ? '#1B262C' : 'white',
                                            color: !isAdd ? 'white' : '#1B262C',
                                        }}
                                    ></button>
                                </div>
                                <p>Subtract(-)</p>
                            </div>
                        </div>

                        <div className="time_calc_inputs_wrap">
                            <div className="time_calc_input_wrap">
                                <p>Days:</p>
                                <input
                                    type="number"
                                    min={0}
                                    placeholder="0"
                                    value={toDays}
                                    onChange={(e) => setToDays(e.target.value)}
                                />
                            </div>
                            <div className="time_calc_input_wrap">
                                <p>Hours:</p>
                                <input
                                    type="number"
                                    min={0}
                                    placeholder="0"
                                    value={toHours}
                                    onChange={(e) => setToHours(e.target.value)}
                                />
                            </div>
                            <div className="time_calc_input_wrap">
                                <p>Minutes:</p>
                                <input
                                    type="number"
                                    min={0}
                                    placeholder="0"
                                    value={toMinutes}
                                    onChange={(e) => setToMinutes(e.target.value)}
                                />
                            </div>
                            <div className="time_calc_input_wrap">
                                <p>Seconds:</p>
                                <input
                                    type="number"
                                    min={0}
                                    placeholder="0"
                                    value={toSeconds}
                                    onChange={(e) => setToSeconds(e.target.value)}
                                />
                            </div>
                        </div>

                        <div style={{ fontSize: "1.5em", fontWeight: "600"}}>=</div>

                        <div className="time_calc_inputs_wrap">
                            <div className="time_calc_input_wrap" style={{display: "grid", justifyItems: "center"}}>
                                <p>Days</p>
                                <input
                                    style={{ 
                                        background: "var(--gray-color)", 
                                        textAlign: "center",
                                        fontSize: "1.3em",
                                        fontWeight: "600",
                                    }}
                                    type="text"
                                    placeholder="0"
                                    value={resultDays}
                                    readOnly
                                />
                            </div>
                            <div className="time_calc_input_wrap" style={{display: "grid", justifyItems: "center"}}>
                                <p>Hours</p>
                                <input
                                    style={{ 
                                        background: "var(--gray-color)", 
                                        textAlign: "center",
                                        fontSize: "1.3em",
                                        fontWeight: "600",
                                    }}
                                    type="text"
                                    placeholder="0"
                                    value={resultHours}
                                    readOnly
                                />
                            </div>
                            <div className="time_calc_input_wrap" style={{display: "grid", justifyItems: "center"}}>
                                <p>Minutes</p>
                                <input
                                    style={{ 
                                        background: "var(--gray-color)", 
                                        textAlign: "center",
                                        fontSize: "1.3em",
                                        fontWeight: "600",
                                    }}
                                    type="text"
                                    placeholder="0"
                                    value={resultMinutes}
                                    readOnly
                                />
                            </div>
                            <div className="time_calc_input_wrap" style={{display: "grid", justifyItems: "center"}}>
                                <p>Seconds</p>
                                <input
                                    style={{ 
                                        background: "var(--gray-color)", 
                                        textAlign: "center",
                                        fontSize: "1.3em",
                                        fontWeight: "600",
                                    }}
                                    type="text"
                                    placeholder="0"
                                    value={resultSeconds}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="bmi_btn_wrap">
                            <CustomButton
                                btn_name={"Calculate"}
                                click={calculateTime} 
                            />
                            <CustomBtnClear 
                                clear={handleClear}
                            />
                        </div>
                    </div>
                </div>

                <div className="calc_container">
                    <h2 style={{ marginBottom: "1rem", textAlign: "center" }}>Calculate Time in Expression</h2>
                    <div className="average_calc_wrap">
                        <div className="average_textarea_wrap">
                            <p style={{ marginTop: 0 }}>Add or subtract two or more time values in the form of an expression.
                            An acceptable input has d, h, m, and s following each value. The only acceptable operators are '+' and '-'.
                            (Ex. 1d 2h 3m 4s + 4h 5s - 2030s)</p>
                            <textarea
                              value={inputExpression}
                              onChange={(e) => setInputExpression(e.target.value)}
                              placeholder="Enter time expression"
                            ></textarea>
                            <div className="bmi_btn_wrap">
                                <CustomButton
                                    btn_name={"Calculate"}
                                    click={calculateTimeExpression}
                                />
                                <CustomBtnClear
                                    clear={handleClearExpression}
                                />
                            </div>
                        </div>
                        <div className="calc_table_wrap">
                            <table className="bmi_table">
                                <tbody>
                                  {resultValues.map((row, index) => (
                                    <tr key={index}>
                                      <td>{row.result_name}</td>
                                      <td>{row.result}</td>
                                    </tr>
                                  ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default TimeCalculator;

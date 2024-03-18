import { useState } from 'react';

import CustomButton from '../../components/custom/custom_button';
import CustomBtnClear from '../../components/custom/custom_btn_clear';

const SalaryCalculator = () => {
    const [salaryType, setSalaryType] = useState("hourly");
    const [salary, setSalary] = useState(25);
    const [hoursPerWeek, setHoursPerWeek] = useState(40);
    const [daysPerWeek, setDaysPerWeek] = useState(5);
    const [holidaysPerYear, setHolidaysPerYear] = useState(10);
    const [vacationsPerYear, setVacationsPerYear] = useState(15);

    const [salaryHour, setSalaryHour] = useState(0);
    const [salaryDay, setSalaryDay] = useState(0);
    const [salaryWeek, setSalaryWeek] = useState(0);
    const [salaryBiWeek, setSalaryBiWeek] = useState(0);
    const [salaryMonth, setSalaryMonth] = useState(0);
    const [salaryQuarter, setSalaryQuarter] = useState(0);
    const [salaryAnnual, setSalaryAnnual] = useState(0);

    const [salaryHourAdjusted, setSalaryHourAdjusted] = useState(0);
    const [salaryDayAdjusted, setSalaryDayAdjusted] = useState(0);
    const [salaryWeekAdjusted, setSalaryWeekAdjusted] = useState(0);
    const [salaryBiWeekAdjusted, setSalaryBiWeekAdjusted] = useState(0);
    const [salaryMonthAdjusted, setSalaryMonthAdjusted] = useState(0);
    const [salaryQuarterAdjusted, setSalaryQuarterAdjusted] = useState(0);
    const [salaryAnnualAdjusted, setSalaryAnnualAdjusted] = useState(0);


    const calculateInvestment = () => {
        const salaryValue = parseFloat(salary);
        const hoursPerWeekValue = parseFloat(hoursPerWeek);
        const daysPerWeekValue = parseFloat(daysPerWeek);
        const holidaysPerYearValue = parseFloat(holidaysPerYear);
        const vacationDaysPerYearValue = parseFloat(vacationsPerYear);

        const hoursPerDay = hoursPerWeekValue / daysPerWeekValue;
        const workingDays = 52 * daysPerWeekValue;
        const adjustedWorkingDays = workingDays - (holidaysPerYearValue + vacationDaysPerYearValue);

        if (isNaN(salaryValue) || isNaN(hoursPerWeekValue) || isNaN(daysPerWeekValue) || isNaN(holidaysPerYearValue) || isNaN(vacationDaysPerYearValue)) {
          alert('Please enter valid numbers');
          return;
        }

        
        if (salaryType === "hourly") {
            setSalaryHour(salaryValue);
            setSalaryDay(salaryValue * hoursPerDay);
            setSalaryWeek((salaryValue * hoursPerDay * workingDays) / 52);
            setSalaryBiWeek(((salaryValue * hoursPerDay * workingDays) / 52 )* 2);
            setSalaryMonth((salaryValue * hoursPerDay * workingDays) / 12);
            setSalaryQuarter((salaryValue * hoursPerDay * workingDays) / 4);
            setSalaryAnnual(salaryValue * hoursPerDay * workingDays);

            setSalaryHourAdjusted((((salaryValue * hoursPerDay * adjustedWorkingDays) / 52) / daysPerWeekValue) / hoursPerDay);
            setSalaryDayAdjusted(((salaryValue * hoursPerDay * adjustedWorkingDays) / 52) / daysPerWeekValue);
            setSalaryWeekAdjusted((salaryValue * hoursPerDay * adjustedWorkingDays) / 52);
            setSalaryBiWeekAdjusted(((salaryValue * hoursPerDay * adjustedWorkingDays) / 52 )* 2);
            setSalaryMonthAdjusted((salaryValue * hoursPerDay * adjustedWorkingDays) / 12);
            setSalaryQuarterAdjusted((salaryValue * hoursPerDay * adjustedWorkingDays) / 4);
            setSalaryAnnualAdjusted(salaryValue * hoursPerDay * adjustedWorkingDays);
        } else if (salaryType === "daily") {
            setSalaryDay(salaryValue);
            setSalaryHour(salaryValue / hoursPerDay);
            setSalaryWeek((salaryValue * workingDays) / 52);
            setSalaryBiWeek(((salaryValue * workingDays) / 52 )* 2);
            setSalaryMonth((salaryValue * workingDays) / 12);
            setSalaryQuarter((salaryValue * workingDays) / 4);
            setSalaryAnnual(salaryValue * workingDays);

            setSalaryDayAdjusted(((salaryValue * adjustedWorkingDays) / 52) / daysPerWeekValue);
            setSalaryHourAdjusted((((salaryValue * adjustedWorkingDays) / 52) / daysPerWeekValue) / hoursPerDay);
            setSalaryWeekAdjusted((salaryValue * adjustedWorkingDays) / 52);
            setSalaryBiWeekAdjusted(((salaryValue * adjustedWorkingDays) / 52 )* 2);
            setSalaryMonthAdjusted((salaryValue * adjustedWorkingDays) / 12);
            setSalaryQuarterAdjusted((salaryValue * adjustedWorkingDays) / 4);
            setSalaryAnnualAdjusted(salaryValue * adjustedWorkingDays);
        } else if (salaryType === "weekly") {
            let daysRate = salaryValue / daysPerWeekValue;
            setSalaryWeek(salaryValue);
            setSalaryDay(salaryValue / daysPerWeekValue);
            setSalaryHour((salaryValue / daysPerWeekValue) / hoursPerDay);
            setSalaryBiWeek(salaryValue * 2);
            setSalaryMonth((salaryValue * 52) / 12);
            setSalaryQuarter((salaryValue * 52) / 4);
            setSalaryAnnual(salaryValue * 52);

            setSalaryHourAdjusted((((daysRate * adjustedWorkingDays) / 52) / daysPerWeekValue) / hoursPerDay);
            setSalaryDayAdjusted(((daysRate * adjustedWorkingDays) / 52) / daysPerWeekValue);
            setSalaryWeekAdjusted((daysRate * adjustedWorkingDays) / 52);
            setSalaryBiWeekAdjusted(((daysRate * adjustedWorkingDays) / 52 )* 2);
            setSalaryMonthAdjusted((daysRate * adjustedWorkingDays) / 12);
            setSalaryQuarterAdjusted((daysRate * adjustedWorkingDays) / 4);
            setSalaryAnnualAdjusted(daysRate * adjustedWorkingDays);
        } else if (salaryType === "biweekly") {
            let daysRate = (salaryValue / daysPerWeekValue) / 2;
            setSalaryBiWeek(salaryValue);
            setSalaryWeek(salaryValue / 2);
            setSalaryDay((salaryValue / 2) / daysPerWeekValue);
            setSalaryHour(((salaryValue / 2) / daysPerWeekValue) / hoursPerDay);
            setSalaryMonth((salaryValue * 26) / 12);
            setSalaryQuarter((salaryValue * 26) / 4);
            setSalaryAnnual(salaryValue * 26);

            setSalaryHourAdjusted((((daysRate * adjustedWorkingDays) / 52) / daysPerWeekValue) / hoursPerDay);
            setSalaryDayAdjusted(((daysRate * adjustedWorkingDays) / 52) / daysPerWeekValue);
            setSalaryWeekAdjusted((daysRate * adjustedWorkingDays) / 52);
            setSalaryBiWeekAdjusted(((daysRate * adjustedWorkingDays) / 52 )* 2);
            setSalaryMonthAdjusted((daysRate * adjustedWorkingDays) / 12);
            setSalaryQuarterAdjusted((daysRate * adjustedWorkingDays) / 4);
            setSalaryAnnualAdjusted(daysRate * adjustedWorkingDays);
        } else if (salaryType === "monthly") {
            let daysRate = salaryValue / (workingDays / 12);
            setSalaryMonth(salaryValue);
            setSalaryDay((salaryValue * 12) / workingDays);
            setSalaryHour(((salaryValue * 12) / workingDays) / hoursPerDay);
            setSalaryWeek((salaryValue * 12) / (workingDays / daysPerWeekValue));
            setSalaryBiWeek((salaryValue * 12) / (workingDays / daysPerWeekValue) * 2);
            setSalaryQuarter(salaryValue * 3);
            setSalaryAnnual(salaryValue * 12);

            setSalaryHourAdjusted((((daysRate * adjustedWorkingDays) / 52) / daysPerWeekValue) / hoursPerDay);
            setSalaryDayAdjusted(((daysRate * adjustedWorkingDays) / 52) / daysPerWeekValue);
            setSalaryWeekAdjusted((daysRate * adjustedWorkingDays) / 52);
            setSalaryBiWeekAdjusted(((daysRate * adjustedWorkingDays) / 52 )* 2);
            setSalaryMonthAdjusted((daysRate * adjustedWorkingDays) / 12);
            setSalaryQuarterAdjusted((daysRate * adjustedWorkingDays) / 4);
            setSalaryAnnualAdjusted(daysRate * adjustedWorkingDays);
        } else if (salaryType === "quarterly") {
            let daysRate = ((salaryValue * 4) / 12) / (workingDays / 12);
            setSalaryQuarter(salaryValue);
            setSalaryMonth(salaryValue / 3);
            setSalaryDay((salaryValue / 3 * 12) / workingDays);
            setSalaryHour(((salaryValue / 3 * 12) / workingDays) / hoursPerDay);
            setSalaryWeek((salaryValue / 3 * 12) / (workingDays / daysPerWeekValue));
            setSalaryBiWeek((salaryValue / 3 * 12) / (workingDays / daysPerWeekValue) * 2);
            setSalaryAnnual(salaryValue * 4);

            setSalaryHourAdjusted((((daysRate * adjustedWorkingDays) / 52) / daysPerWeekValue) / hoursPerDay);
            setSalaryDayAdjusted(((daysRate * adjustedWorkingDays) / 52) / daysPerWeekValue);
            setSalaryWeekAdjusted((daysRate * adjustedWorkingDays) / 52);
            setSalaryBiWeekAdjusted(((daysRate * adjustedWorkingDays) / 52 )* 2);
            setSalaryMonthAdjusted((daysRate * adjustedWorkingDays) / 12);
            setSalaryQuarterAdjusted((daysRate * adjustedWorkingDays) / 4);
            setSalaryAnnualAdjusted(daysRate * adjustedWorkingDays);
        } else if (salaryType === "yearly") {
            let daysRate = (salaryValue / 12) / (workingDays / 12);
            setSalaryAnnual(salaryValue);
            setSalaryQuarter(salaryValue / 4);
            setSalaryMonth(salaryValue / 12);
            setSalaryDay(salaryValue / workingDays);
            setSalaryHour(salaryValue / workingDays / hoursPerDay);
            setSalaryWeek((salaryValue / workingDays) * daysPerWeekValue);
            setSalaryBiWeek(((salaryValue / workingDays) * daysPerWeekValue) * 2);

            setSalaryHourAdjusted((((daysRate * adjustedWorkingDays) / 52) / daysPerWeekValue) / hoursPerDay);
            setSalaryDayAdjusted(((daysRate * adjustedWorkingDays) / 52) / daysPerWeekValue);
            setSalaryWeekAdjusted((daysRate * adjustedWorkingDays) / 52);
            setSalaryBiWeekAdjusted(((daysRate * adjustedWorkingDays) / 52 )* 2);
            setSalaryMonthAdjusted((daysRate * adjustedWorkingDays) / 12);
            setSalaryQuarterAdjusted((daysRate * adjustedWorkingDays) / 4);
            setSalaryAnnualAdjusted(daysRate * adjustedWorkingDays);
        } else {
            alert('Invalid salary type');
        }
    };

    const salaryResult = [
        {result_name: "Hourly", result: salaryHour.toFixed(2), adjusted: salaryHourAdjusted.toFixed(2)},
        {result_name: "Daily", result: salaryDay.toFixed(2), adjusted: salaryDayAdjusted.toFixed(2)},
        {result_name: "Weekly", result: salaryWeek.toFixed(2), adjusted: salaryWeekAdjusted.toFixed(2)},
        {result_name: "Bi-Weekly", result: salaryBiWeek.toFixed(2), adjusted: salaryBiWeekAdjusted.toFixed(2)},
        {result_name: "Monthly", result: salaryMonth.toFixed(2), adjusted: salaryMonthAdjusted.toFixed(2)},
        {result_name: "Quarterly", result: salaryQuarter.toFixed(2), adjusted: salaryQuarterAdjusted.toFixed(2)},
        {result_name: "Annual", result: salaryAnnual.toFixed(2), adjusted: salaryAnnualAdjusted.toFixed(2)},
    ]

    const handleClear = () => {
        setSalaryType('Hourly');
        setSalary(0);
        setHoursPerWeek(0);
        setDaysPerWeek(0);
        setHolidaysPerYear(0);
        setVacationsPerYear(0);
    }

    return (
        <div className="pages_wrap">
            <div className="pages_container">
                <div className="pages_description_wrap">
                    <h1>Salary Calculator</h1>
                    <p>
                        A Salary Calculator is a practical tool used to estimate net pay or take-home salary 
                        after deductions from gross income. It enables individuals to determine their expected 
                        earnings based on factors such as hourly wages, annual salary, overtime hours, and 
                        applicable deductions like taxes, insurance, and retirement contributions. 
                    </p>
                </div>

                <div className="calc_container">
                    <div className="discount_calc_wrap">
                        <div className="discount_calc_inputs_wrap">
                            <div className="salary_input_wrap">
                                <p>Salary:</p>
                                <input
                                    type="number"
                                    placeholder="0"
                                    value={salary}
                                    onChange={(e) => setSalary(parseFloat(e.target.value))}
                                />
                                <select value={salaryType} onChange={(e) => setSalaryType(e.target.value)}>
                                    <option value="hourly">Hourly</option>
                                    <option value="daily">Daily</option>
                                    <option value="weekly">Weekly</option>
                                    <option value="biweekly">Bi-Weekly</option>
                                    <option value="monthly">Monthly</option>
                                    <option value="quarterly">Quarterly</option>
                                    <option value="yearly">Yearly</option>
                                </select>
                            </div>
                            <div className="discount_input_wrap">
                                <p>Hours per week:</p>
                                <input
                                    type="number"
                                    placeholder="0"
                                    value={hoursPerWeek}
                                    onChange={(e) => setHoursPerWeek(parseFloat(e.target.value))}
                                />
                            </div>
                            <div className="discount_input_wrap">
                                <p>Days per week:</p>
                                <input
                                    type="number"
                                    placeholder="0"
                                    value={daysPerWeek}
                                    onChange={(e) => setDaysPerWeek(parseFloat(e.target.value))}
                                />
                            </div>
                            <div className="discount_input_wrap">
                                <p>Holidays per year:</p>
                                <input
                                    type="number"
                                    placeholder="0"
                                    value={holidaysPerYear}
                                    onChange={(e) => setHolidaysPerYear(parseFloat(e.target.value))}
                                />
                            </div>
                            <div className="discount_input_wrap">
                                <p>Vacation days per year:</p>
                                <input
                                    type="number"
                                    placeholder="0"
                                    value={vacationsPerYear}
                                    onChange={(e) => setVacationsPerYear(parseFloat(e.target.value))}
                                />
                            </div>
                            <div className="bmi_btn_wrap">
                                <CustomButton
                                    btn_name={"Calculate"}
                                    click={calculateInvestment}
                                />
                                <CustomBtnClear
                                    clear={handleClear}
                                />
                            </div>
                        </div>
                        <div className="calc_table_wrap">
                            <table className="salary_table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Unadjusted</th>
                                        <th>Adjusted</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {salaryResult.map((row, index) => (
                                    <tr key={index}>
                                      <td>{row.result_name}</td>
                                      <td>{row.result}</td>
                                      <td>{row.adjusted}</td>
                                    </tr>
                                  ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SalaryCalculator;
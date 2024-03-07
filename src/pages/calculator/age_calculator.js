import { useState } from "react";
import { 
    format, 
    differenceInYears, 
    differenceInMonths, 
    differenceInCalendarDays, 
    differenceInWeeks,
    differenceInHours,
    differenceInMinutes 
} from "date-fns";

import cake_icon from "../../assets/cake_icon.svg";

const DatePicker = ({value, onChange }) => {
    const formattedValue = format(value, "yyyy-MM-dd");
  
    const handleChange = (event) => {
      const date = new Date(event.target.value);
      onChange(date);
    };
  
    return (
        <input 
            className="input_date"  
            type="date" 
            value={formattedValue} 
            onChange={handleChange} 
        />
    );
};

const AgeCalculator = () => {

    const today = new Date();
    const [birthDate, setBirthDate] = useState(new Date(2000, 4, 5));
    const [targetDate, setTargetDate] = useState(today);

    // For Age
    const years = differenceInYears(targetDate, birthDate);
    const months = differenceInMonths(targetDate, birthDate) % 12;
    const totalMonths = differenceInMonths(targetDate, birthDate);
    const weeks =  differenceInWeeks(targetDate, birthDate);
    const totalDays = differenceInCalendarDays(targetDate, birthDate);
    const hours = differenceInHours(targetDate, birthDate);
    const minutes = differenceInMinutes(targetDate, birthDate);
    const initdays = differenceInCalendarDays(
        targetDate,
        new Date(targetDate.getFullYear(), targetDate.getMonth(), birthDate.getDate())
    );

    // Gets the number of days that the previous months have
    const firstDayOfCurrentMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 1);
    firstDayOfCurrentMonth.setMonth(firstDayOfCurrentMonth.getMonth() - 1);
    const numberOfDaysInPreviousMonth = new Date(firstDayOfCurrentMonth.getFullYear(), firstDayOfCurrentMonth.getMonth() + 1, 0).getDate();

    let days;
    if (initdays < 0){
        days = numberOfDaysInPreviousMonth + initdays;
    } else {
        days = initdays;
    }

    // For Next Bithday
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const nextBirthday = new Date(targetDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    const nextBirthdayWeekday = weekday[nextBirthday.getDay()];
    let nextBirthdayMonth = differenceInMonths(nextBirthday, targetDate);
    const initNextBday = differenceInCalendarDays(
        nextBirthday,
        new Date(nextBirthday.getFullYear(), nextBirthday.getMonth(), targetDate.getDate())
    );

    const firstDayOfBdayMonth = new Date(nextBirthday.getFullYear(), nextBirthday.getMonth(), 1);
    firstDayOfBdayMonth.setMonth(firstDayOfCurrentMonth.getMonth() - 1);
    const numDaysInPrevMonth = new Date(firstDayOfBdayMonth.getFullYear(), firstDayOfBdayMonth.getMonth() + 1, 0).getDate();

    let nextBDays;
    if (initNextBday < 0){
        nextBDays = numDaysInPrevMonth + initNextBday;
    } 
    else if (initNextBday === 0){
        nextBDays = 0;
        nextBirthdayMonth += 1;
    }
    else {
        nextBDays = initNextBday;
    }

    return (
        <>
        <div className="pages_wrap">
            <div className="pages_container">
                <div className="pages_description_wrap">
                    <h1>Age Calculator</h1>
                    <p>
                        An Age Calculator is a convenient tool used to determine a person's age 
                        based on their date of birth and the current date. It calculates the precise age 
                        in years, months, and days, providing accurate results for any given date. 
                    </p>
                </div>    

                <div className="calc_container">
                    <div className="date_picker_container">
                        <div className="date_picker_wrap">
                            <div className="date_picker_label">Date of Birth:</div>
                            <DatePicker 
                                value={birthDate}
                                onChange={setBirthDate}
                            />
                        </div>

                        <div className="date_picker_wrap">
                            <div className="date_picker_label">Age as of:</div>
                            <DatePicker 
                                value={targetDate}
                                onChange={setTargetDate}
                            />
                        </div>
                    </div>
                    <div className="age_calculation_container">
                        <div className="age_wrap">
                            <div className="age_title_text">Age</div>
                            <div className="age_years_text">{years}</div>
                            <div className="age_years_subtext">{years <= 1 ? "year" : "years"}</div>
                            <div className="age_small_text">
                                {months} {months <= 1 ? "month" : "months"} | {days} {days <= 1 ? "day" : "days"}
                            </div>
                        </div>

                        <div className="next_birthday_wrap">
                            <div className="age_title_text">Next Birthday</div>
                            <div className="cake_icon_wrap">
                                <img className="cake_icon" src={cake_icon} alt="Birthday"/>
                            </div>
                            <div className="age_years_subtext">{nextBirthdayWeekday}</div>
                            <div className="age_small_text">
                                {nextBirthdayMonth} {nextBirthdayMonth <= 1 ? "month" : "months"} | {nextBDays} {nextBDays <= 1 ? "day" : "days"}
                            </div>
                        </div>

                        <div className="age_summary_wrap">
                            <div className="age_title_text">Summary</div>
                            <div className="age_summary_result_wrap">
                                <div className="age_summary_result">
                                    <div className="age_small_text">Years</div>
                                    <div className="age_medium_text">{years}</div>
                                </div>
                                <div className="age_summary_result">
                                    <div className="age_small_text">Months</div>
                                    <div className="age_medium_text">{totalMonths}</div>
                                </div>
                                <div className="age_summary_result">
                                    <div className="age_small_text">Weeks</div>
                                    <div className="age_medium_text">{weeks}</div>
                                </div>
                                <div className="age_summary_result">
                                    <div className="age_small_text">Days</div>
                                    <div>{totalDays}</div>
                                </div>
                                <div className="age_summary_result">
                                    <div className="age_small_text">Hours</div>
                                    <div>{hours}</div>
                                </div>
                                <div className="age_summary_result">
                                    <div className="age_small_text">Minutes</div>
                                    <div>{minutes}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default AgeCalculator;
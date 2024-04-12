import { useState} from "react";
import { 
    format
} from "date-fns";

const DatePicker = ({ value, onChange }) => {
    const formattedValue = value ? format(value, "yyyy-MM-dd") : "";
  
    const handleChange = (event) => {
        const inputValue = event.target.value;
        const date = inputValue ? new Date(inputValue) : new Date("2010-01-01");
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

const DateCalculator = () => {
    const today = new Date();
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(new Date(2025, 4, 5));

    return (
        <>
        <div className="pages_wrap">
            <div className="pages_container">
                <div className="pages_description_wrap">
                    <h1>Date Calculator</h1>
                    <p>
                        A Date Calculator is a versatile tool designed to perform calculations involving dates, 
                        durations, and time intervals. It enables users to add or subtract days, weeks, months, 
                        or years from a given date, calculate the difference between two dates, and determine future 
                        or past dates based on specific criteria.
                    </p>
                </div>
                <div className="calc_container">
                    <div 
                        style={{ 
                            width: '100%',
                            display: "flex",
                            justifyContent: 'center', 
                        }}
                    >
                        <div className="date_picker_container">
                            <div className="date_picker_wrap">
                                <div className="date_picker_label">Start Date:</div>
                                <DatePicker
                                    value={startDate}
                                    onChange={setStartDate}
                                />
                            </div>
                            <div className="date_picker_wrap">
                                <div className="date_picker_label">End Date:</div>
                                <DatePicker
                                    value={endDate}
                                    onChange={setEndDate}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DateCalculator;
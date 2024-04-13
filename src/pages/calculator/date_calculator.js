import { useState} from "react";
import { 
    format
} from "date-fns";
import CustomBtnCalculate from "../../components/custom/custom_btn_calculate";

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
    const [totalDays, setTotalDays] = useState(0);
    const [businessDays, setBusinessDays] = useState(0);

    const handleCalculate = () => {
        const start = new Date(startDate);
        const end = new Date(endDate);
    
        if (isNaN(start.getTime()) || isNaN(end.getTime())) {
            setTotalDays(null);
            setBusinessDays(null);
            alert('Please enter valid dates');
            return;
        }
    
        let totalDays = 0;
        let businessDays = 0;
    
        for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
            totalDays++;
            
            if (d.getDay() !== 0 && d.getDay() !== 6) {
                businessDays++;
            }
        }
    
        setTotalDays(totalDays);
        setBusinessDays(businessDays);
    };

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
                            flexWrap: "wrap",
                            justifyContent: 'center', 
                        }}
                    >
                        <h2 style={{ width : "100%", marginBottom: "1rem", textAlign: "center" }}>Difference Between Two Dates</h2>
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
                        <div style={{ width: "100%", display: "flex", justifyContent: 'center', gap: "3rem" }}>
                            <div style={{ display: "grid", placeContent: "center"}}>
                                <p 
                                    style={{ 
                                        margin: "3rem 0 1rem 0",
                                        fontSize: "3em",
                                        fontWeight: "600",
                                        lineHeight: "5px",
                                        textAlign: "center", 
                                    }}
                                >{totalDays}</p>
                                <p style={{ marginBottom: "2rem", textAlign: "center"}}>{totalDays > 1 ? "Calendar Days" : "Calendar Day"}</p>
                            </div>
                            <div style={{ display: "grid", placeContent: "center"}}>
                                <p 
                                    style={{ 
                                        margin: "3rem 0 1rem 0",
                                        fontSize: "3em",
                                        fontWeight: "600",
                                        lineHeight: "5px",
                                        textAlign: "center", 
                                    }}
                                >{businessDays}</p>
                                <p style={{ marginBottom: "2rem", textAlign: "center"}}>{businessDays > 1 ? "Business Days" : "Business Day"}</p>
                            </div>
                        </div>
                        <div style={{ width: "100%", display: "flex", justifyContent: 'center' }}>
                            <CustomBtnCalculate calculate={handleCalculate}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DateCalculator;
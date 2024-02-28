import './custom_input_styles.css'
import arrow_down from "../../assets/expand_more.svg"


const CustomInput = ({ 
  label, 
  unitOptions, 
  onInputChange, 
  onUnitChange,
  value,
  setValue,
  unit,
  setUnit
}) => {

    // const [value, setValue] = useState('');
    // const [unit, setUnit] = useState(unitOptions[0]);

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        if (onInputChange) {
          onInputChange(newValue);
        }
    };
    
    const handleUnitChange = (e) => {
        const newUnit = e.target.value;
        setUnit(newUnit);
        if (onUnitChange) {
          onUnitChange(newUnit);
        }
    };

    return (
        <div className="calc_category_input_wrap">
            <label className="calc_category_label">{label}:</label>
            <label className="calc_category_label-b">Unit:</label>
            <input type="number" value={value} onChange={handleInputChange} placeholder="0" />
            <div className="custom-select_wrap">
                <select value={unit} onChange={handleUnitChange}>
                    {unitOptions.map(option => (
                      <option key={option.option} value={option.option_name}>{option.option_name}</option>
                    ))}
                </select>
                {/* <div className="custom-arrow"></div> */}
                <img 
                  className="custom-arrow"
                  src={arrow_down}
                  alt="select-unit"
                />
            </div>
        </div>
    )
}

export default CustomInput;

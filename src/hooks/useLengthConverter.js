import { useState, useEffect } from "react";

const useLengthConverter = (value, fromUnit, toUnit) => {
    const [convertedValue, setConvertedValue] = useState(0);

    useEffect(() => {
        const conversionTable = {
            centimeters: {
                meters: 0.01,
                kilometers: 0.00001,
                inches: 0.393700787,
                feet: 0.032808399,
                yards: 0.010936133,
                miles: 1 / 160934.4
            },
            meters: {
                centimeters: 100,
                kilometers: 0.001,
                inches: 39.3700787,
                feet: 3.2808399,
                yards: 1.0936133,
                miles: 1 / 1609.344
            },
            kilometers: {
                centimeters: 100000,
                meters: 1000,
                inches: 39370.0787,
                feet: 3280.8399,
                yards: 1093.6133,
                miles: 1 / 1.609344
            },
            inches: {
                centimeters: 2.54,
                meters: 0.0254,
                kilometers: 1 / 39370.0787,
                feet: 1 / 12,
                yards: 1 / 36,
                miles: 1 / 63360
            },
            feet: {
                centimeters: 30.48,
                meters: 0.3048,
                kilometers: 1 / 3280.8399,
                inches: 12,
                yards: 1 / 3,
                miles: 1 / 5280
            },
            yards: {
                centimeters: 91.44,
                meters: 0.9144,
                kilometers: 1 / 1093.6133,
                inches: 36,
                feet: 3,
                miles: 1 / 1760
            },
            miles: {
                centimeters: 160934.4,
                meters: 1609.344,
                kilometers: 1.609344,
                inches: 63360,
                feet: 5280,
                yards: 1760
            }
        };
        
        const convertValues = (newValue, fromOption, toOption) => {
            const conversionFactor = conversionTable[fromOption]?.[toOption];
            return conversionFactor !== undefined ? newValue *  conversionFactor : newValue;
        };
    
        setConvertedValue(convertValues(value, fromUnit, toUnit));
    }, [value, fromUnit, toUnit]);
    

    return convertedValue;
}

export default useLengthConverter;
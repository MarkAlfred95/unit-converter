import { useState } from "react"
import { motion } from "framer-motion";

import "./converter_styles.css"
import ScrollToTop from "../../components/scrolltotop";

const api_key = "replace-with-my-api-key";

const currencyOptions = [
    { currency: "USD", currency_name: "United States Dollar" },
    { currency: "EUR", currency_name: "Euro" },
    { currency: "JPY", currency_name: "Japanese Yen" },
    { currency: "CNY", currency_name: "Chinese Yuan" },
    { currency: "GBP", currency_name: "British Pound Sterling" },
    { currency: "AED", currency_name: "United Arab Emirates Dirham" },
    { currency: "AFN", currency_name: "Afghan Afghani" },
    { currency: "XCD", currency_name: "East Caribbean Dollar" },
    { currency: "ALL", currency_name: "Albanian Lek" },
    { currency: "AMD", currency_name: "Armenian Dram" },
    { currency: "ANG", currency_name: "Netherlands Antillean Guilder" },
    { currency: "AOA", currency_name: "Angolan Kwanza" },
    { currency: "AQD", currency_name: "Antarctic Dollar" },
    { currency: "ARS", currency_name: "Argentine Peso" },
    { currency: "AUD", currency_name: "Australian Dollar" },
    { currency: "AZN", currency_name: "Azerbaijani Manat" },
    { currency: "BAM", currency_name: "Bosnia-Herzegovina Convertible Mark" },
    { currency: "BBD", currency_name: "Barbadian Dollar" },
    { currency: "BDT", currency_name: "Bangladeshi Taka" },
    { currency: "XOF", currency_name: "West African CFA Franc" },
    { currency: "BGN", currency_name: "Bulgarian Lev" },
    { currency: "BHD", currency_name: "Bahraini Dinar" },
    { currency: "BIF", currency_name: "Burundian Franc" },
    { currency: "BMD", currency_name: "Bermudian Dollar" },
    { currency: "BND", currency_name: "Brunei Dollar" },
    { currency: "BOB", currency_name: "Bolivian Boliviano" },
    { currency: "BRL", currency_name: "Brazilian Real" },
    { currency: "BSD", currency_name: "Bahamian Dollar" },
    { currency: "NOK", currency_name: "Norwegian Krone" },
    { currency: "BWP", currency_name: "Botswana Pula" },
    { currency: "BYR", currency_name: "Belarusian Ruble" },
    { currency: "BZD", currency_name: "Belize Dollar" },
    { currency: "CAD", currency_name: "Canadian Dollar" },
    { currency: "CDF", currency_name: "Congolese Franc" },
    { currency: "XAF", currency_name: "Central African CFA Franc" },
    { currency: "CHF", currency_name: "Swiss Franc" },
    { currency: "CLP", currency_name: "Chilean Peso" },
    { currency: "COP", currency_name: "Colombian Peso" },
    { currency: "CRC", currency_name: "Costa Rican Colón" },
    { currency: "CUP", currency_name: "Cuban Peso" },
    { currency: "CVE", currency_name: "Cape Verdean Escudo" },
    { currency: "CYP", currency_name: "Cypriot Pound" },
    { currency: "CZK", currency_name: "Czech Republic Koruna" },
    { currency: "DJF", currency_name: "Djiboutian Franc" },
    { currency: "DKK", currency_name: "Danish Krone" },
    { currency: "DOP", currency_name: "Dominican Peso" },
    { currency: "DZD", currency_name: "Algerian Dinar" },
    { currency: "ECS", currency_name: "Ecuadorian Sucre" },
    { currency: "EEK", currency_name: "Estonian Kroon" },
    { currency: "EGP", currency_name: "Egyptian Pound" },
    { currency: "ETB", currency_name: "Ethiopian Birr" },
    { currency: "FJD", currency_name: "Fijian Dollar" },
    { currency: "FKP", currency_name: "Falkland Islands Pound" },
    { currency: "GEL", currency_name: "Georgian Lari" },
    { currency: "GGP", currency_name: "Guernsey Pound" },
    { currency: "GHS", currency_name: "Ghanaian Cedi" },
    { currency: "GIP", currency_name: "Gibraltar Pound" },
    { currency: "GMD", currency_name: "Gambian Dalasi" },
    { currency: "GNF", currency_name: "Guinean Franc" },
    { currency: "GTQ", currency_name: "Guatemalan Quetzal" },
    { currency: "GYD", currency_name: "Guyanaese Dollar" },
    { currency: "HKD", currency_name: "Hong Kong Dollar" },
    { currency: "HNL", currency_name: "Honduran Lempira" },
    { currency: "HRK", currency_name: "Croatian Kuna" },
    { currency: "HTG", currency_name: "Haitian Gourde" },
    { currency: "HUF", currency_name: "Hungarian Forint" },
    { currency: "IDR", currency_name: "Indonesian Rupiah" },
    { currency: "ILS", currency_name: "Israeli New Shekel" },
    { currency: "INR", currency_name: "Indian Rupee" },
    { currency: "IQD", currency_name: "Iraqi Dinar" },
    { currency: "IRR", currency_name: "Iranian Rial" },
    { currency: "ISK", currency_name: "Icelandic Króna" },
    { currency: "JMD", currency_name: "Jamaican Dollar" },
    { currency: "JOD", currency_name: "Jordanian Dinar" },
    { currency: "KES", currency_name: "Kenyan Shilling" },
    { currency: "KGS", currency_name: "Kyrgystani Som" },
    { currency: "KHR", currency_name: "Cambodian Riel" },
    { currency: "KMF", currency_name: "Comorian Franc" },
    { currency: "KPW", currency_name: "North Korean Won" },
    { currency: "KRW", currency_name: "South Korean Won" },
    { currency: "KWD", currency_name: "Kuwaiti Dinar" },
    { currency: "KYD", currency_name: "Cayman Islands Dollar" },
    { currency: "KZT", currency_name: "Kazakhstani Tenge" },
    { currency: "LAK", currency_name: "Laotian Kip" },
    { currency: "LBP", currency_name: "Lebanese Pound" },
    { currency: "LKR", currency_name: "Sri Lankan Rupee" },
    { currency: "LRD", currency_name: "Liberian Dollar" },
    { currency: "LSL", currency_name: "Lesotho Loti" },
    { currency: "LTL", currency_name: "Lithuanian Litas" },
    { currency: "LVL", currency_name: "Latvian Lats" },
    { currency: "LYD", currency_name: "Libyan Dinar" },
    { currency: "MAD", currency_name: "Moroccan Dirham" },
    { currency: "MDL", currency_name: "Moldovan Leu" },
    { currency: "MGA", currency_name: "Malagasy Ariary" },
    { currency: "MKD", currency_name: "Macedonian Denar" },
    { currency: "MMK", currency_name: "Myanmar Kyat" },
    { currency: "MNT", currency_name: "Mongolian Tugrik" },
    { currency: "MOP", currency_name: "Macanese Pataca" },
    { currency: "MRO", currency_name: "Mauritanian Ouguiya" },
    { currency: "MTL", currency_name: "Maltese Lira" },
    { currency: "MUR", currency_name: "Mauritian Rupee" },
    { currency: "MVR", currency_name: "Maldivian Rufiyaa" },
    { currency: "MWK", currency_name: "Malawian Kwacha" },
    { currency: "MXN", currency_name: "Mexican Peso" },
    { currency: "MYR", currency_name: "Malaysian Ringgit" },
    { currency: "MZN", currency_name: "Mozambican Metical" },
    { currency: "NAD", currency_name: "Namibian Dollar" },
    { currency: "XPF", currency_name: "CFP Franc" },
    { currency: "NGN", currency_name: "Nigerian Naira" },
    { currency: "NIO", currency_name: "Nicaraguan Córdoba" },
    { currency: "NPR", currency_name: "Nepalese Rupee" },
    { currency: "NZD", currency_name: "New Zealand Dollar" },
    { currency: "OMR", currency_name: "Omani Rial" },
    { currency: "PAB", currency_name: "Panamanian Balboa" },
    { currency: "PEN", currency_name: "Peruvian Nuevo Sol" },
    { currency: "PGK", currency_name: "Papua New Guinean Kina" },
    { currency: "PHP", currency_name: "Philippine Peso" },
    { currency: "PKR", currency_name: "Pakistani Rupee" },
    { currency: "PLN", currency_name: "Polish Zloty" },
    { currency: "PYG", currency_name: "Paraguayan Guarani" },
    { currency: "QAR", currency_name: "Qatari Rial" },
    { currency: "RON", currency_name: "Romanian Leu" },
    { currency: "RSD", currency_name: "Serbian Dinar" },
    { currency: "RUB", currency_name: "Russian Ruble" },
    { currency: "RWF", currency_name: "Rwandan Franc" },
    { currency: "SAR", currency_name: "Saudi Riyal" },
    { currency: "SBD", currency_name: "Solomon Islands Dollar" },
    { currency: "SCR", currency_name: "Seychellois Rupee" },
    { currency: "SDG", currency_name: "Sudanese Pound" },
    { currency: "SEK", currency_name: "Swedish Krona" },
    { currency: "SGD", currency_name: "Singapore Dollar" },
    { currency: "SKK", currency_name: "Slovak Koruna" },
    { currency: "SLL", currency_name: "Sierra Leonean Leone" },
    { currency: "SOS", currency_name: "Somali Shilling" },
    { currency: "SRD", currency_name: "Surinamese Dollar" },
    { currency: "STD", currency_name: "São Tomé and Príncipe Dobra" },
    { currency: "SVC", currency_name: "Salvadoran Colón" },
    { currency: "SYP", currency_name: "Syrian Pound" },
    { currency: "SZL", currency_name: "Swazi Lilangeni" },
    { currency: "THB", currency_name: "Thai Baht" },
    { currency: "TJS", currency_name: "Tajikistani Somoni" },
    { currency: "TMT", currency_name: "Turkmenistani Manat" },
    { currency: "TND", currency_name: "Tunisian Dinar" },
    { currency: "TOP", currency_name: "Tongan Pa'anga" },
    { currency: "TRY", currency_name: "Turkish Lira" },
    { currency: "TTD", currency_name: "Trinidad and Tobago Dollar" },
    { currency: "TWD", currency_name: "New Taiwan Dollar" },
    { currency: "TZS", currency_name: "Tanzanian Shilling" },
    { currency: "UAH", currency_name: "Ukrainian Hryvnia" },
    { currency: "UGX", currency_name: "Ugandan Shilling" },
    { currency: "UYU", currency_name: "Uruguayan Peso" },
    { currency: "UZS", currency_name: "Uzbekistan Som" },
    { currency: "VEF", currency_name: "Venezuelan Bolívar" },
    { currency: "VND", currency_name: "Vietnamese Dong" },
    { currency: "VUV", currency_name: "Vanuatu Vatu" },
    { currency: "YER", currency_name: "Yemeni Rial" },
    { currency: "ZAR", currency_name: "South African Rand" },
    { currency: "ZMK", currency_name: "Zambian Kwacha" },
    { currency: "ZWD", currency_name: "Zimbabwean Dollar" }
];


const CurrencyConverter = () => {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState(currencyOptions[0].currency);
    const [toCurrency, setToCurrency] = useState(currencyOptions[1].currency);
    const [exchangeRate, setExchangeRate] = useState("1 USD = 0.92 EUR");

    const calculateExchangeRate = () => {
        let url = `https://v6.exchangerate-api.com/v6/${api_key}/latest/${fromCurrency}`;
        fetch(url).then(response => response.json()).then(result =>{
            let exchangeRate = result.conversion_rates[toCurrency];
            let totalExRate = (amount * exchangeRate).toFixed(2);
            setExchangeRate(amount + " " + fromCurrency + " = " + totalExRate + " " + toCurrency);
        }).catch(() =>{
            setExchangeRate("Something went wrong");
        });
    }

    return (
    <>
        <ScrollToTop />
        <div className="pages_wrap">
            <div className="pages_container">
                <div className="pages_description_wrap">
                    <h1>Currency Converter</h1>
                    <p>
                        A Currency Converter is a valuable tool used to convert the value of one currency into 
                        another at the current exchange rate. It allows users to swiftly and accurately convert 
                        monetary amounts between different currencies, facilitating international transactions, 
                        travel planning, and financial management. 
                    </p>
                </div>

                <div className="converter_container">
                    <div className="converter_wrap_center">
                        <div className="converter_input_wrap">
                            <p>Enter Amount:</p>
                            <input
                                type="number"
                                placeholder="0"
                                value={amount}
                                onChange={(e) => setAmount(parseFloat(e.target.value))}
                            />
                        </div>
                        <div className="currency_select_wrap">
                            <div className="currency_select_container">
                                <p>From:</p>
                                <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                                    {currencyOptions.map(option => (
                                      <option key={option.currency} value={option.currency}>{option.currency_name} ({option.currency})</option>
                                    ))}
                                </select>
                            </div>

                            {/* <div className="convert_icon_wrap-black">
                                <img
                                    className="convert_icon-black" 
                                    src={convert_icon} 
                                    alt="convert"
                                />
                            </div> */}


                            <div className="currency_select_container">
                                <p>To:</p>
                                <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                                    {currencyOptions.map(option => (
                                      <option key={option.currency} value={option.currency}>{option.currency_name} ({option.currency})</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        
                        <div className="exchange_rate_wrap">
                            {exchangeRate}
                        </div>

                        <motion.button
                            whileHover={{scale: 1.05}} 
                            whileTap={{scale: 0.95}}
                            onClick={calculateExchangeRate}
                        >Get Exchange Rate
                        </motion.button>
                    </div>
                </div>

            </div>
        </div>
        {/* <ToastContainer /> */}
    </>
    )
}

export default CurrencyConverter;
import { useState, useEffect } from "react"
import { fetchData } from "./fetchData.jsx"
import style from './converter.module.css'
import sendVariable from "./sendVariable.jsx"

function Converter(){
    const [currentCurrency, setCurrentCurr] = useState("INR") 
    const [targetCurrency, setTargetCurr] = useState("INR")
    const [amount, setAmount] = useState(1);
    const [cost, setCost] = useState(1)
    const [rate, setRate] = useState(1)

    useEffect(()=>{
        sendVariable(currentCurrency);
        async function getRate() {
            const newRate = await fetchData(targetCurrency)
            setRate(newRate)
        }
        getRate()
    },[currentCurrency, targetCurrency])

    useEffect(() => {
        setCost(rate*amount)
    },[amount, rate]) 

    return(
        <div className={style.body}>
            <p className={style.title}>CURRENCY CONVERTER</p>
            <br/>
            <div className={style.box}>
                <div className={style.select}>
                <div className={style.from} >
                    <select onChange={(e) => setCurrentCurr(e.target.value)}>
                        <option value="INR">INR – Indian Rupee (₹)</option>
                        <option value="USD">USD – US Dollar ($)</option>
                        <option value="EUR">EUR – Euro (€)</option>
                        <option value="GBP">GBP – British Pound (£)</option>
                        <option value="JPY">JPY – Japanese Yen (¥)</option>
                        <option value="CAD">CAD – Canadian Dollar (C$)</option>
                        <option value="AUD">AUD – Australian Dollar (A$)</option>
                        <option value="CNY">CNY – Chinese Yuan (¥)</option>
                        <option value="SGD">SGD – Singapore Dollar (S$)</option>
                        <option value="CHF">CHF – Swiss Franc (CHF)</option>
                        <option value="HKD">HKD – Hong Kong Dollar (HK$)</option>
                        <option value="ZAR">ZAR – South African Rand (R)</option>
                        <option value="BRL">BRL – Brazilian Real (R$)</option>
                        <option value="MXN">MXN – Mexican Peso (Mex$)</option>
                        <option value="KRW">KRW – South Korean Won (₩)</option>
                        <option value="IDR">IDR – Indonesian Rupiah (Rp)</option>
                        <option value="MYR">MYR – Malaysian Ringgit (RM)</option>
                        <option value="THB">THB – Thai Baht (฿)</option>
                        <option value="VND">VND – Vietnamese Dong (₫)</option>
                        <option value="PHP">PHP – Philippine Peso (₱)</option>
                        <option value="SEK">SEK – Swedish Krona (kr)</option>
                        <option value="NOK">NOK – Norwegian Krone (kr)</option>
                        <option value="DKK">DKK – Danish Krone (kr)</option>
                        <option value="PLN">PLN – Polish Złoty (zł)</option>
                        <option value="HUF">HUF – Hungarian Forint (Ft)</option>
                        <option value="CZK">CZK – Czech Koruna (Kč)</option>
                        <option value="AED">AED – United Arab Emirates Dirham (د.إ)</option>
                        <option value="SAR">SAR – Saudi Riyal (﷼)</option>
                        <option value="QAR">QAR – Qatari Riyal (﷼)</option>
                        <option value="EGP">EGP – Egyptian Pound (E£)</option>
                        <option value="IRR">IRR – Iranian Rial (﷼)</option>
                        <option value="NGN">NGN – Nigerian Naira (₦)</option>
                        <option value="KES">KES – Kenyan Shilling (KSh)</option>
                        <option value="GHS">GHS – Ghanaian Cedi (₵)</option>
                        <option value="ARS">ARS – Argentine Peso (ARS$)</option>
                        <option value="CLP">CLP – Chilean Peso (CLP$)</option>
                        <option value="COP">COP – Colombian Peso (COL$)</option>
                        <option value="PEN">PEN – Peruvian Sol (S/.)</option>
                    </select>
                    <input type="number" value={amount} onChange={(e) => {setAmount(e.target.value)}}/>
                </div>
                <p>⇌</p>
                <div className={style.from}>
                    <select onChange={(e) => setTargetCurr(e.target.value)}>
                        <option value="INR">INR – Indian Rupee (₹)</option>
                        <option value="USD">USD – US Dollar ($)</option>
                        <option value="EUR">EUR – Euro (€)</option>
                        <option value="GBP">GBP – British Pound (£)</option>
                        <option value="JPY">JPY – Japanese Yen (¥)</option>
                        <option value="CAD">CAD – Canadian Dollar (C$)</option>
                        <option value="AUD">AUD – Australian Dollar (A$)</option>
                        <option value="CNY">CNY – Chinese Yuan (¥)</option>
                        <option value="SGD">SGD – Singapore Dollar (S$)</option>
                        <option value="CHF">CHF – Swiss Franc (CHF)</option>
                        <option value="HKD">HKD – Hong Kong Dollar (HK$)</option>
                        <option value="ZAR">ZAR – South African Rand (R)</option>
                        <option value="BRL">BRL – Brazilian Real (R$)</option>
                        <option value="MXN">MXN – Mexican Peso (Mex$)</option>
                        <option value="KRW">KRW – South Korean Won (₩)</option>
                        <option value="IDR">IDR – Indonesian Rupiah (Rp)</option>
                        <option value="MYR">MYR – Malaysian Ringgit (RM)</option>
                        <option value="THB">THB – Thai Baht (฿)</option>
                        <option value="VND">VND – Vietnamese Dong (₫)</option>
                        <option value="PHP">PHP – Philippine Peso (₱)</option>
                        <option value="SEK">SEK – Swedish Krona (kr)</option>
                        <option value="NOK">NOK – Norwegian Krone (kr)</option>
                        <option value="DKK">DKK – Danish Krone (kr)</option>
                        <option value="PLN">PLN – Polish Złoty (zł)</option>
                        <option value="HUF">HUF – Hungarian Forint (Ft)</option>
                        <option value="CZK">CZK – Czech Koruna (Kč)</option>
                        <option value="AED">AED – United Arab Emirates Dirham (د.إ)</option>
                        <option value="SAR">SAR – Saudi Riyal (﷼)</option>
                        <option value="QAR">QAR – Qatari Riyal (﷼)</option>
                        <option value="EGP">EGP – Egyptian Pound (E£)</option>
                        <option value="IRR">IRR – Iranian Rial (﷼)</option>
                        <option value="NGN">NGN – Nigerian Naira (₦)</option>
                        <option value="KES">KES – Kenyan Shilling (KSh)</option>
                        <option value="GHS">GHS – Ghanaian Cedi (₵)</option>
                        <option value="ARS">ARS – Argentine Peso (ARS$)</option>
                        <option value="CLP">CLP – Chilean Peso (CLP$)</option>
                        <option value="COP">COP – Colombian Peso (COL$)</option>
                        <option value="PEN">PEN – Peruvian Sol (S/.)</option>
                    </select>
                    <input value={cost}/>
                </div>
                </div>
                <br/>
                <p>Rate : {rate} </p>
            </div>
        </div>
    )
}

export default Converter
import { useState, useEffect } from "react"
import {fetchData} from "./fetchData.jsx"
import {sendData} from "./sendData.jsx"

import clear from "/assets/clear.png";
import clouds from "/assets/clouds.png";
import rain from "/assets/rain.png";
import snow from "/assets/snow.png";
import thunderstorm from "/assets/thunderstorm.png";
import mist from "/assets/mist.png";
import img from "/assets/img.png";
import tornado from "/assets/tornado.png"
import drizzle from "/assets/drizzle.png"

import styles from './App.module.css'

function WeatherApp(){
    const [city, setCity] = useState("")
    const [data, setData] = useState(null)
    const [backimage, setBackImage] = useState(img)
    const [emoji, setEmoji] = useState();

    useEffect( () => {
        if(!city.trim()) return;
    
        async function fetchWeather() {
            try{
                setData(null);
                console.log("sending city")
                await sendData(city);
                console.log("sent city")

                console.log("fetching data");
                let newData = await fetchData();

                if (!newData || !newData.main) {
                    console.warn("⚠️ No valid weather data received");
                    return;
                }

                setData(newData)
                console.log("Data is reset")
            } catch(error){
                console.log(`Error fetching data`, error)
            }
        }

        fetchWeather()
    },[city])

    useEffect(() => {
        if (!data || !data.weather) return;

        const weatherCondition = data.weather[0].main.toLowerCase();
    
        const weatherImages = {
            clear : clear,
            clouds: clouds,
            rain: rain,
            snow: snow,
            thunderstorm : thunderstorm,
            mist : mist,
            tornado : tornado,
            drizzle : drizzle
        };

        const weatherEmoji = {
            clear : '☀️',
            clouds : '⛅ ' ,
            rain : '🌧️',
            snow :'🌨️'  ,
            thunderstorm : '⛈️'  ,
            mist : '🌫️'  ,
            tornado : '🌪️'  ,
            drizzle : '🌦️'  
        }
        
        setEmoji(weatherEmoji[weatherCondition] || '🌡️');
        setBackImage(weatherImages[weatherCondition] || defaultImage);
    }, [data])

    return(
        <div className={styles.body} style={{
                backgroundImage: `url(${backimage})`,
                backgroundPosition : 'center',
                backgroundSize : 'cover',
            }}>
            <div className={styles.box} style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${backimage})`,
                backgroundPosition : 'center',
                backgroundSize : 'cover',
            }}>
                <div className={styles.weatherMain}>
                    <div className={styles.temp}>
                        <p className={styles.emoji}>{emoji}</p>
                        <p>{data?.main?.temp ? (data.main.temp - 273.15).toFixed(2) : "Loading..."}</p>
                        <p style={{fontSize: 16}}>°C</p>
                    </div>
                    <div>
                        <p>{data?.main?.temp_max ? (data.main.temp_max - 273.15).toFixed(2) : ""}</p>
                        <p>{data?.main?.temp_min ? (data.main.temp_min - 273.15).toFixed(2) : ""}</p>
                    </div>
                </div>
                <p>Humidity 💧: {data?.main?.humidity ? (data.main.humidity) : "" }%</p>
                <div className={styles.wind}>
                    <p>Wind: {data?.wind?.speed ? (data.main.humidity) : "" } </p>
                </div>
                <label>City Name:</label>
                <select value={city} onChange={(e) => setCity(e.target.value)}>
                    <option value="" disabled selected>Select</option>
                    <option>Delhi</option>
                    <option>Bengaluru</option>
                    <option>Hyderabad</option>
                    <option>Ahmedabad</option>
                    <option>Chennai</option>
                    <option>Kolkata</option>
                    <option>Pune</option>
                    <option>Jaipur</option>
                    <option>Lucknow</option>
                    <option>Kanpur</option>
                    <option>Nagpur</option>
                    <option>Indore</option>
                    <option>Thane</option>
                    <option>Bhopal</option>
                    <option>Visakhapatnam</option>
                    <option>Patna</option>
                    <option>Vadodara</option>
                    <option>Ghaziabad</option>
                    <option>Ludhiana</option>
                    <option>Agra</option>
                    <option>Nashik</option>
                    <option>Faridabad</option>
                    <option>Meerut</option>
                    <option>Rajkot</option>
                    <option>Kalyan-Dombivli</option>
                    <option>Vasai-Virar</option>
                    <option>Varanasi</option>
                    <option>Srinagar</option>
                    <option>Aurangabad</option>
                    <option>Dhanbad</option>
                    <option>Amritsar</option>
                    <option>Navi Mumbai</option>
                    <option>Allahabad (Prayagraj)</option>
                    <option>Ranchi</option>
                    <option>Howrah</option>
                    <option>Coimbatore</option>
                    <option>Jabalpur</option>
                    <option>Gwalior</option>
                    <option>Vijayawada</option>
                    <option>Jodhpur</option>
                    <option>Madurai</option>
                    <option>Raipur</option>
                    <option>Kota</option>
                    <option>Guwahati</option>
                    <option>Chandigarh</option>
                    <option>Solapur</option>
                    <option>Hubballi-Dharwad</option>
                    <option>Salem</option>
                    <option>Warangal</option>
                    <option>Bareilly</option>
                    <option>Tiruchirappalli</option>
                    <option>Dehradun</option>
                    <option>Jalandhar</option>
                    <option>Guntur</option>
                    <option>Amravati</option>
                    <option>Thiruvananthapuram</option>
                    <option>Bhubaneswar</option>
                    <option>Moradabad</option>
                    <option>New York</option>
                    <option>London</option>
                    <option>Tokyo</option>
                    <option>Paris</option>
                    <option>Berlin</option>
                    <option>Sydney</option>
                    <option>Los Angeles</option>
                    <option>Toronto</option>
                    <option>Mumbai</option>
                    <option>Mexico City</option>
                    <option>Jakarta</option>
                    <option>Seoul</option>
                    <option>Cairo</option>
                    <option>Johannesburg</option>
                    <option>Bangkok</option>
                    <option>Reykjavik</option>
                    <option>Antarctica</option>
                    <option>Dubai</option>
                    <option>Moscow</option>
                    <option>Beijing</option>
                    <option>São Paulo</option>
                </select>
            </div>
        </div>
    )
}

export default WeatherApp
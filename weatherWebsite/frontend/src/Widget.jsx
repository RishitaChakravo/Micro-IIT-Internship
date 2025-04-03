import { useEffect, useState,useContext } from 'react'
import styles from './App.module.css'
import { myContext } from './cityName';

function Widget(){
    const {city} = useContext(myContext) 

    const now = new Date();
    const day = now.getDay(); 
    const month = now.getMonth(); 
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = daysOfWeek[day];
    const monthsOfYear = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    const monthName = monthsOfYear[month];

    return(
        <div className={styles.widgetBox}>
            <p className={styles.cityName}>{city}</p>
            <p>{dayName} | {monthName} {now.getDay()}, {now.getFullYear()}</p>
        </div>
    )
}

export  default Widget
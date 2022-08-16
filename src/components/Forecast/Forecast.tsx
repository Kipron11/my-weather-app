import React from 'react';
import styles from './Forecast.module.scss'
import {
    Accordion,
    AccordionItem,
    AccordionItemPanel,
    AccordionItemHeading,
    AccordionItemButton
} from "react-accessible-accordion";

const Days = [
    "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
];

const Forecast = ({data}) => {

    const dayInAWeek = new Date().getDay();
    const forecastDays = Days.slice(dayInAWeek,Days.length).concat(Days.slice(0,dayInAWeek))

    return (
        <section className={styles.ForecastComp}>
            <label className={styles.title}>Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0,7).map((item,index)=>(
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className={styles.dailyItem}>
                                    <img alt="weather" className={styles.dailyIcon} src={`/icons/${item.weather[0].icon}.png`}/>
                                    <label className={styles.day}>
                                        {forecastDays[index]}
                                    </label>
                                    <label className={styles.description}>
                                        {item.weather[0].description}
                                    </label>
                                    <label className={styles.temp}>
                                        {Math.round(item.main.temp_min)}℃ / {Math.round(item.main.temp_max)}℃
                                    </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className={styles.dailyDetails}>
                                <div className={styles.dailyDetailsItem}>
                                    <label>Pressure : </label>
                                    <label>{item.main.pressure}</label>
                                </div>
                                <div className={styles.dailyDetailsItem}>
                                    <label>Humidity : </label>
                                    <label>{item.main.humidity}</label>
                                </div>
                                <div className={styles.dailyDetailsItem}>
                                    <label>Clouds : </label>
                                    <label>{item.clouds.all}</label>
                                </div>
                                <div className={styles.dailyDetailsItem}>
                                    <label>Wind Speed : </label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className={styles.dailyDetailsItem}>
                                    <label>Sea Level : </label>
                                    <label>{item.main.sea_level} m</label>
                                </div>
                                <div className={styles.dailyDetailsItem}>
                                    <label>Feels Like : </label>
                                    <label>{Math.round(item.main.feels_like)} ℃</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}

            </Accordion>
        </section>
    );
};

export default Forecast;

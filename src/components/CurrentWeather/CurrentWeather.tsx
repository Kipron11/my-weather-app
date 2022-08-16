import React from 'react';
import styles from './CurrentWeather.module.scss'

const CurrentWeather = ({data}) => {
    console.log('CurrWeat')
    return (
        <section className={styles.CurrentWeatherComp}>
            <div className={styles.top}>
                <div>
                    <p className={styles.city}>{data.city}</p>
                    <p className={styles.weather}>{data.weather[0].description}</p>
                </div>
                <img alt="Weather" className={styles.weather_icon} src={`/icons/${data.weather[0].icon}.png`}/>
            </div>
            <div className={styles.bottom}>
                <p className={styles.temperature}>{Math.round(data.main.temp)}℃</p>
                <div className={styles.details}>
                    <div className={styles.param_row}>
                        <span className={styles.param_label}>Details</span>
                    </div>
                    <div className={styles.param_row}>
                        <span className={styles.param_label}>Feels Like</span>
                        <span className={styles.param_value}>{Math.round(data.main.feels_like)} ℃</span>
                    </div>
                    <div className={styles.param_row}>
                        <span className={styles.param_label}>Wind</span>
                        <span className={styles.param_value}>{data.wind.speed} m/s</span>
                    </div>
                    <div className={styles.param_row}>
                        <span className={styles.param_label}>Humidity</span>
                        <span className={styles.param_value}>{data.main.humidity} %</span>
                    </div>
                    <div className={styles.param_row}>
                        <span className={styles.param_label}>Pressure</span>
                        <span className={styles.param_value}>{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurrentWeather;

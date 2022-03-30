import React, { useContext } from "react";
import WeatherContext from "../../Context/WeatherContext";
import ForecastCard from "./ForecastCard";
// import BaseCard from "../BaseCard";

const ForecastContainer = () => {
    const { forecastWeather } = useContext(WeatherContext);

    if (forecastWeather === null) return "";
    console.log(forecastWeather);

    return (
        <section className='py-10 lg:w-4/5 w-11/12 mx-auto'>
            <h2 className='text-2xl tracking-wider font-bold mb-8 lg:w-full w-11/12 mx-auto'>
                Extended Forecast
            </h2>
            <article className='grid md:grid-cols-4 grid-cols-2 justify-items-center gap-5'>
                {forecastWeather.map((item, index) => (
                    <ForecastCard
                        key={index}
                        id={item.weather[0].id}
                        desc={item.weather[0].description}
                        min={item.temp.min}
                        max={item.temp.max}
                        date={item.dt}
                    />
                ))}
            </article>
        </section>
    );
};

export default ForecastContainer;

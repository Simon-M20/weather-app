import React, { useContext } from "react";
import WeatherContext from "../../Context/WeatherContext";
import BaseCard from "../BaseCard";
import HumidityStatus from "./HumidityStatus";
import MinMaxTemp from "./MinMaxTemp";
import SunStatus from "./SunStatus";
import UltraViolet from "./UltraViolet";
import Visibility from "./Visibility";
import WindStatus from "./WindStatus";

const HightlightContainer = () => {
    const { currentWeather } = useContext(WeatherContext);

    if (currentWeather === null) return <BaseCard />;
    // console.log(currentWeather);

    return (
        <section className='py-10'>
            <h2 className='text-2xl tracking-wider font-bold mb-8 lg:w-4/5 w-11/12 mx-auto'>
                Today's Hightlights
            </h2>
            <article className='grid md:grid-cols-3 gap-5 justify-items-center lg:w-4/5 w-11/12 mx-auto'>
                <UltraViolet uvi={currentWeather.uvi} />
                <WindStatus wind={currentWeather.wind_speed} />
                <SunStatus
                    sunrise={currentWeather.sunrise}
                    sunset={currentWeather.sunset}
                />
                <HumidityStatus humidity={currentWeather.humidity} />
                <Visibility visibility={currentWeather.visibility} />
                <MinMaxTemp />
            </article>
        </section>
    );
};

export default HightlightContainer;

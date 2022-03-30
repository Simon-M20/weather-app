import React, { useContext } from "react";
import WeatherContext from "../../Context/WeatherContext";
import BaseCard from "../BaseCard";
// import Error404 from "../Error/Error404";
import CloudsBg from "../../Assets/7hdN9MGQ_4x.jpg";
import "./CurrentWeather.css";
import WeatherIcon from "./WeatherIcon";

const CurrentWeather = () => {
    const { currentWeather, name, celcius } = useContext(WeatherContext);

    const time = new Date();
    const month = [
        "Jan",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
    ];

    const days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];

    if (currentWeather === null) return <BaseCard />;

    return (
        <section className='relative md:pb-0 pb-10'>
            <figure className='relative flex flex-col justify-center items-center'>
                <img
                    className='cloudsBg'
                    src={CloudsBg}
                    alt='Clouds Background'
                />
                <WeatherIcon
                    id={currentWeather.weather[0].id}
                    desc={currentWeather.weather[0].description}
                />
                <figcaption className='flex items-end pt-3 justify-center mt-7'>
                    <h1 className='text-9xl'>
                        {celcius
                            ? Math.floor(currentWeather.temp)
                            : (Math.floor(currentWeather.temp) * 9) / 5 + 32}
                    </h1>
                    <span className='text-8xl uppercase'>
                        º{celcius ? "C" : "F"}
                    </span>
                </figcaption>
            </figure>
            <p className='text-3xl text-center my-8 capitalize weatherDesc'>
                {currentWeather.weather[0].description}
            </p>
            <section className='flex items-center justify-center my-8 text-xl'>
                <p>Today</p>
                <span className='mx-3'>·</span>
                <p>
                    {days[time.getDay()]}, {time.getDate()}{" "}
                    {month[time.getMonth()]}
                </p>
            </section>
            <section className='flex items-center justify-center mt-8 text-lg'>
                <span className='material-icons-outlined'>place</span>
                <p className='ml-3'>
                    {name.cityName}, {name.country}
                </p>
            </section>
        </section>
    );
};

export default CurrentWeather;

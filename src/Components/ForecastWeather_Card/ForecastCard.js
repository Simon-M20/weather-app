import { useContext } from "react";
import WeatherContext from "../../Context/WeatherContext";
import WeatherIcon from "../CurrentWeather_Card/WeatherIcon";
import "./Forecast.css";

const ForecastCard = ({ id, desc, min, max, date }) => {
    const { theme, celcius } = useContext(WeatherContext);

    const time = new Date(date * 1000);
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    return (
        <figure
            className={`forecastCard flex flex-col justify-center items-center ${theme}`}
        >
            <h3 className='text-lg font-medium'>{days[time.getDay()]}</h3>
            <div className='w-2/3 mx-auto my-1'>
                <WeatherIcon id={id} desc={desc} />
            </div>
            <figcaption className='flex justify-between items-center w-3/5'>
                <small className='font-bold'>
                    {celcius ? Math.floor(max) : (Math.floor(max) * 9) / 5 + 32}
                    <span>º{celcius ? "C" : "F"}</span>
                </small>
                <small>
                    {celcius ? Math.floor(min) : (Math.floor(min) * 9) / 5 + 32}
                    <span>º{celcius ? "C" : "F"}</span>
                </small>
            </figcaption>
        </figure>
    );
};

export default ForecastCard;

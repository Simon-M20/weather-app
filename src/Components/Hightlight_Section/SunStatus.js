import React, { useContext } from "react";
import WeatherContext from "../../Context/WeatherContext";

const SunStatus = ({ sunrise, sunset }) => {
    const { theme } = useContext(WeatherContext);

    const sunriseCalc = new Date(sunrise * 1000);
    const sunriseHour = sunriseCalc.getHours();
    const sunriseMin = sunriseCalc.getMinutes();
    const sunriseInfo = sunriseHour + ":" + sunriseMin;

    const sunsetCalc = new Date(sunset * 1000);
    const sunsetHour = sunsetCalc.getHours();
    const sunsetMin = sunsetCalc.getMinutes();
    const sunsetInfo = sunsetHour + ":" + sunsetMin;

    return (
        <section
            className={`sunCard py-3 flex flex-col justify-center items-center ${theme}`}
        >
            <h3 className='text-lg mb-4'>Sunrise & Sunset</h3>
            <article className='flex flex-col justify-around h-3/5 items-start'>
                <div className='flex items-center'>
                    <span className='material-icons-outlined sunIcon'>
                        wb_sunny
                    </span>
                    <p className='ml-3 text-lg font-medium'>{sunriseInfo}</p>
                </div>
                <div className='flex items-center'>
                    <span className='material-icons-outlined sunIcon'>
                        wb_sunny
                    </span>
                    <p className='ml-3 text-lg font-medium'>{sunsetInfo}</p>
                </div>
            </article>
        </section>
    );
};

export default SunStatus;

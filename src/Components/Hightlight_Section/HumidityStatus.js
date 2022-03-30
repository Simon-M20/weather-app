import { useContext, useEffect, useState } from "react";
import WeatherContext from "../../Context/WeatherContext";

const HumidityStatus = ({ humidity }) => {
    const [humidityCurrent, setHumidityCurrent] = useState(80);

    const { theme } = useContext(WeatherContext);

    const fillerStyles = {
        height: `${humidityCurrent}%`,
    };

    useEffect(() => {
        setHumidityCurrent(humidity);
    }, [humidity, setHumidityCurrent]);

    return (
        <section
            className={`humidityCard py-3 flex flex-col justify-center items-center ${theme}`}
        >
            <h3 className='text-lg'>Humidity</h3>
            <section className='flex items-center h-3/5'>
                <p className='w-auto mr-7 flex items-center text-center text-5xl font-extrabold'>
                    {humidityCurrent}
                    <span className='text-3xl font-thin'>%</span>
                </p>
                <article className='humiBar'>
                    <span className='humiProgress' style={fillerStyles}></span>
                </article>
            </section>
        </section>
    );
};

export default HumidityStatus;

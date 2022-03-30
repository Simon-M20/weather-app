import React, { useContext } from "react";
import WeatherContext from "../../Context/WeatherContext";

const Visibility = ({ visibility }) => {
    const { theme } = useContext(WeatherContext);

    return (
        <section
            className={`visibleCard py-3 flex flex-col justify-center items-center ${theme}`}
        >
            <h3 className='text-lg'>Visibility</h3>
            <p className='text-5xl font-extrabold my-1'>
                {Math.floor(visibility / 1609)}
                <span className='text-3xl font-medium'>miles</span>
            </p>
            <p className='text-lg font-thin'>
                {Math.floor(visibility / 1609) >= 5
                    ? "Good visibility"
                    : "Bad visibility"}
            </p>
        </section>
    );
};

export default Visibility;

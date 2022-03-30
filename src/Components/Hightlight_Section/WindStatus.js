import React, { useContext } from "react";
import WeatherContext from "../../Context/WeatherContext";

const WindStatus = ({ wind }) => {
    const { theme } = useContext(WeatherContext);

    return (
        <section
            className={`windCard py-3 flex flex-col justify-center items-center ${theme}`}
        >
            <h3 className='text-lg'>Wind Status</h3>
            <p className='font-extrabold text-5xl my-1'>
                {Math.round(wind * 3.6)}
                <span className='text-3xl font-thin'>mph</span>
            </p>
            <div className='flex items-center justify-center mt-2'>
                <span className='material-icons-outlined w-8 h-8 text-base flex justify-center items-center rounded-full rotate-180 text-white bg-gray-500'>
                    near_me
                </span>
                <p className='text-lg uppercase ml-4'>wsw</p>
            </div>
        </section>
    );
};

export default WindStatus;

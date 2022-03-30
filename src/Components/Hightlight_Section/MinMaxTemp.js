import MinTemp from "../../Assets/Icons/MinTemp.png";
import MaxTemp from "../../Assets/Icons/MaxTemp.png";
import { useContext } from "react";
import WeatherContext from "../../Context/WeatherContext";

const MinMaxTemp = () => {
    const { temp, theme, celcius } = useContext(WeatherContext);
    // console.log(temp);
    return (
        <section
            className={`tempCard py-3 flex flex-col justify-center items-center ${theme}`}
        >
            <h3>Min & Max Temperature</h3>
            <article className='py-2'>
                <figure className='flex items-center py-1'>
                    <img className='w-10' src={MinTemp} alt='Min Temperature' />
                    <figcaption className='text-2xl font-extrabold'>
                        {celcius
                            ? Math.floor(temp.max)
                            : (Math.floor(temp.max) * 9) / 5 + 32}
                        <span className='ml-1 text-xl font-medium'>
                            º{celcius ? "C" : "F"}
                        </span>
                    </figcaption>
                </figure>
                <figure className='flex items-center py-1'>
                    <img className='w-10' src={MaxTemp} alt='Max Temperature' />
                    <figcaption className='text-2xl font-extrabold'>
                        {celcius
                            ? Math.floor(temp.min)
                            : (Math.floor(temp.min) * 9) / 5 + 32}
                        <span className='ml-1 text-xl font-medium'>
                            º{celcius ? "C" : "F"}
                        </span>
                    </figcaption>
                </figure>
            </article>
        </section>
    );
};

export default MinMaxTemp;

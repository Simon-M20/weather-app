import { useContext } from "react";
import WeatherContext from "../../Context/WeatherContext";
import "./Hightlight.css";

const UltraViolet = ({ uvi }) => {
    const { theme } = useContext(WeatherContext);
    // const [uvRayos, setUvRayos] = useState(0);

    const widthFixed = Math.floor(uvi + 5);

    const fillerStyles = {
        transition: "width 1s ease-in-out",
        width: `${widthFixed}%`,
    };

    return (
        <section
            className={`uvCard py-3 flex-col flex justify-evenly items-center ${theme}`}
        >
            <h3 className='text-lg'>UV Index</h3>
            <section className='w-full h-3/5 mx-auto flex flex-col justify-center items-center'>
                <p className='text-5xl font-extrabold text-center'>{uvi}</p>
                <article className='uvBar'>
                    <span className='uvProgress' style={fillerStyles}></span>
                </article>
            </section>
        </section>
    );
};

export default UltraViolet;

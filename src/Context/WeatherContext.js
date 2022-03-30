import { createContext, useState } from "react";
import swal from "sweetalert";

const WeatherContext = createContext();

const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const ApiKey = "54dd62174bb0cdf8300acdfc1fb92412";

const WeatherProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [theme, setTheme] = useState("");
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecastWeather, setForecastWeather] = useState(null);
    const [name, setName] = useState({
        cityName: "",
        country: "",
    });
    const [temp, setTemp] = useState({
        min: "",
        max: "",
    });
    const [celcius, setCelcius] = useState(true);

    const handleTheme = () => {
        let moonBtn = document.querySelector(".moon-icon");
        // console.log(e.target, "click");
        // alert("cambio AHORAAAAAA");

        if (!moonBtn.classList.contains("dark")) {
            setTheme("dark");
        } else {
            setTheme("");
        }
    };

    const getWeather = async (query) => {
        setLoading(true);
        setError(false);
        try {
            const res = await fetch(
                `${baseUrl}?q=${query}&units=metric&appid=${ApiKey}`
            );
            const data = await res.json();
            // console.log(data);
            setName({
                cityName: data.name,
                country: data.sys.country,
            });
            setTemp({
                min: data.main.temp_max,
                max: data.main.temp_min,
            });

            if (data) {
                try {
                    const res = await fetch(
                        `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=hourly,minutely,alerts&units=metric&appid=${ApiKey}`
                    );
                    const weatherInfo = await res.json();
                    // console.log(weatherInfo);
                    setCurrentWeather(weatherInfo.current);
                    setForecastWeather(weatherInfo.daily);
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                    setError(true);
                }
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(true);
        }
    };

    const getGpsWeather = async (lat, long) => {
        setLoading(true);

        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${ApiKey}`
            );
            const data = await res.json();
            // console.log(data);
            setName({
                cityName: data.name,
                country: data.sys.country,
            });
            setTemp({
                min: data.main.temp_max,
                max: data.main.temp_min,
            });

            if (data) {
                try {
                    const res = await fetch(
                        `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude=hourly,minutely,alerts&units=metric&appid=${ApiKey}`
                    );
                    const weatherInfo = await res.json();
                    // console.log(weatherInfo);
                    setCurrentWeather(weatherInfo.current);
                    setForecastWeather(weatherInfo.daily);
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                    setLoading(false);
                    setError(true);
                }
            }
        } catch (error) {
            console.log(error);
            swal("I'm Sorry", `${error.message}!`, "error");
            setLoading(false);
            setError(true);
        }
    };

    const data = {
        loading,
        error,
        handleTheme,
        theme,
        currentWeather,
        forecastWeather,
        name,
        temp,
        getWeather,
        getGpsWeather,
        setCelcius,
        celcius,
    };

    return (
        <WeatherContext.Provider value={data}>
            {children}
        </WeatherContext.Provider>
    );
};

export { WeatherProvider };
export default WeatherContext;

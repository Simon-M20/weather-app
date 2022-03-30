import { useContext } from "react";
import WeatherContext from "../../Context/WeatherContext";
import "./Settings.css";

const Settings = () => {
    const { theme, handleTheme, setCelcius } = useContext(WeatherContext);
    return (
        <div>
            <button
                className={`moon-icon settingBtn relative top-1.5 ${theme}`}
                onClick={handleTheme}
            >
                <span class='material-icons-outlined flex justify-center items-center'>
                    dark_mode
                </span>
            </button>
            <button
                className={`settingBtn ${theme}`}
                onClick={() => setCelcius(true)}
            >
                <span>ºC</span>
            </button>
            <button
                className={`settingBtn ${theme}`}
                onClick={() => setCelcius(false)}
            >
                <span>ºF</span>
            </button>
        </div>
    );
};

export default Settings;

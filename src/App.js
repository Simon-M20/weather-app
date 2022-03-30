import { useContext } from "react";
import "./App.css";
// import BaseCard from "./Components/BaseCard";
import CurrentWeather from "./Components/CurrentWeather_Card/CurrentWeather";
import Error404 from "./Components/Error/Error404";
import ForecastContainer from "./Components/ForecastWeather_Card/ForecastContainer";
import HightlightContainer from "./Components/Hightlight_Section/HightlightContainer";
import Loader from "./Components/Loader/Loader";

import SearchWeather from "./Components/Search_Container/SearchWeather";
import Settings from "./Components/Utils/Settings";
// import Theme from "./Components/Utils/Theme";
import WeatherContext from "./Context/WeatherContext";

function App() {
    const { loading, error, theme } = useContext(WeatherContext);

    if (loading) {
        return <Loader />;
    }
    return (
        <section className='flex flex-wrap justify-start items-start h-full w-full'>
            <aside
                className={`lg:w-1/3 lg:h-screen h-full pb-6 w-full ${theme}`}
            >
                {error ? (
                    <>
                        <SearchWeather />
                        <Error404 />
                    </>
                ) : (
                    <>
                        <SearchWeather />
                        <CurrentWeather />
                    </>
                )}
            </aside>
            <main
                className={`lg:w-2/3 lg:h-screen w-full flex flex-col overflow-hidden lg:overflow-y-scroll mx-auto ${theme}`}
            >
                <article className='w-11/12 flex justify-end items-center pt-6'>
                    <Settings />
                </article>
                {error ? (
                    <Error404 />
                ) : (
                    <>
                        <ForecastContainer />
                        <HightlightContainer />{" "}
                    </>
                )}
            </main>
        </section>
    );
}

export default App;

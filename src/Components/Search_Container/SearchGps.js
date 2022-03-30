import React, { useContext } from "react";
import swal from "sweetalert";
import WeatherContext from "../../Context/WeatherContext";
// import Loader from "../Loader/Loader";

const SearchGps = ({ searchActive, setSearchActive }) => {
    // const [ubication, setUbication] = useState({
    //     lat: null,
    //     long: null,
    // });

    const { getGpsWeather, theme } = useContext(WeatherContext);

    const handleError = (err) => {
        console.log("Error obteniendo ubicación: ", err);
        swal("I'm sorry!", "Something went wrong!", "error");
    };

    const opcionesDeLocation = {
        enableHighAccuracy: true, // Alta precisión
        maximumAge: 0, // No queremos caché
        // timeout: 5000, // Esperar solo 5 segundos
    };

    const handleLocation = (ubicacion) => {
        // setUbication({
        //     lat: ubicacion.coords.latitude,
        //     long: ubicacion.coords.longitude,
        // });
        console.log(
            "Tengo la ubicación: ",
            ubicacion.coords.latitude,
            ubicacion.coords.longitude
        );
        getGpsWeather(ubicacion.coords.latitude, ubicacion.coords.longitude);
    };

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(
            handleLocation,
            handleError,
            opcionesDeLocation
        );
    };

    // const GpsFixedIcon = (e) => {
    //     e.target.textContent === "gps_not_fixed"
    //         ? (e.target.textContent = "gps_fixed")
    //         : (e.target.textContent = "gps_not_fixed");
    // };

    // const handleClicks = () => {
    //     // handleGpsFixedIcon(e);
    //     getLocation();
    // };

    // if (ubication.lat !== null) {
    //     getGpsWeather(ubication.lat, ubication.long);
    // }
    // if (loading) return <Loader />;

    return (
        <section className='flex justify-between pt-6 items-center w-4/5 mx-auto'>
            <button
                className={`buttonSearch ${theme}`}
                onClick={() => setSearchActive(!searchActive)}
            >
                Search for places
            </button>
            <button className='mt-2'>
                <span
                    onClick={(e) => {
                        e.target.textContent = "gps_fixed";
                        getLocation();
                    }}
                    className={`material-icons-outlined searchIcon ${theme}`}
                >
                    gps_not_fixed
                </span>
            </button>
        </section>
    );
};

export default SearchGps;

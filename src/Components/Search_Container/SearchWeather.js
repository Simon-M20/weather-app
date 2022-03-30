import React, { useState } from "react";
import SearchForm from "./SearchForm";
import SearchGps from "./SearchGps";
import "./SearchWeather.css";

const SearchWeather = () => {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <header className='relative'>
            {searchActive ? (
                <SearchForm setSearchActive={setSearchActive} />
            ) : (
                <SearchGps
                    searchActive={searchActive}
                    setSearchActive={setSearchActive}
                />
            )}
        </header>
    );
};

export default SearchWeather;

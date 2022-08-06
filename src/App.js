import React, { useEffect, useState } from 'react';


import Countries from './components/Countries';

import "./App.css";
import Search from './components/Search';

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState(countries);

  const dataFatch = async (url) => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setCountries(jsonData);
      setFilterCountries(jsonData);
      setLoading(false);
      setError(null);

      // console.log(countries);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    dataFatch(url)
  }, [])

  const manageRemoveCountry = (name) => {
    // alert(name);
    const filter = filterCountries.filter((Country) => Country.name.common !== name);
    // console.log(filter);
    setFilterCountries(filter);
  }

  const handleSearch = (searcData) => {
    // alert(searcData);
    let value = searcData.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();

      return countryName.startsWith(value);
    })
    setFilterCountries(newCountries)
  }

  return (
    <>
      <h1>Country App</h1>
      <Search onSearch={handleSearch} />
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && <Countries countries={filterCountries} onRemoveCountry={manageRemoveCountry} />}
    </>
  );
}

export default App;

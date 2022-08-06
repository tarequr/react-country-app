import React from 'react'

import style from "./country.module.css";

function Country(props) {
  const handleCountyRemove = (name) => {
    // alert(name);
    props.onRemoveCountry2(name);
  };

  const {country} = props;
  const {name, flags, capital, population, area} = country;
  return (
    <article className={style.country}>
        <div>
            <img src={flags.png} alt={name.common} className={style.flag}/>
            <h3>Name: {name.common}</h3>
            <h3>Population: {population}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Area: {area}</h3>
            <button className={style.btn} onClick={ () => {
              handleCountyRemove(name.common);
            }}>Remove Country</button>
        </div>
    </article>
  )
}

export default Country
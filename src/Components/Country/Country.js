import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country)
    const { name, flag, capital, population, region } = props.country
    return (
        <div className="country">
            <img src={flag} alt="" />
            <h2>Country Name: {name}</h2>
            <h4>Capital Name: {capital}</h4>
            <h5>Population: {population}</h5>
            <p>Region: {region}</p>
        </div>
    );
};

export default Country;
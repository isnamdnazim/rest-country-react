import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props)
    const { } = props.country
    return (
        <div className="country">
            <img src={props.country.flag} alt="" />
            <h2>Country Name: {props.country.name}</h2>
            <h4>Capital Name: {props.country.capital}</h4>
            <h5>Population: {props.country.population}</h5>
        </div>
    );
};

export default Country;
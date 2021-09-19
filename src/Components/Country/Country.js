import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className="country">
            <h2>Country Name: {props.name}</h2>
            <h4>Capital Name: {props.capital}</h4>
            <h5>Population: {props.population}</h5>
        </div>
    );
};

export default Country;
import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props)
    const { name, flag, capital, population } = props.country
    return (
        <div className="country">
            <img src={flag} alt="" />
            <h2>Country Name: {name}</h2>
            <h4>Capital Name: {capital}</h4>
            <h5>Population: {population}</h5>
        </div>
    );
};

export default Country;
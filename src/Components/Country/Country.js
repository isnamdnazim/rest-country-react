import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h2>Country Name: {props.name}</h2>
            <h4>Capital Name: {props.capital}</h4>
            <h5>Population: {props.population}</h5>
        </div>
    );
};

export default Country;
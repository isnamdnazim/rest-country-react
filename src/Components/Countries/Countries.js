import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, []);
    return (
        <div>
            <h1>Hello From REST Countries API</h1>
            <h2>Total Country Found: {countries.length}</h2>
            {
                countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
            }
        </div>
    );
};

export default Countries;
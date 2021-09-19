import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, []);
    return (
        <div>
            <h1>Hello From <span className="text-color">REST Countries</span> API</h1>
            <h2>Total Country Found: <span className="text-color">{countries.length}</span></h2>
            <div className="main-country-container">
                {
                    countries.map(country => <Country
                        country={country}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
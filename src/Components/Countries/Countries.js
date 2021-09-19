import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => setCountries(data))
    }, []);
    return (
        <div>
            <h1>Hello From Countries</h1>
            <h2>Total Country Found: {countries.length}</h2>
        </div>
    );
};

export default Countries;
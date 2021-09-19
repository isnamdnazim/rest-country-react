import './App.css';
import Countries from './conponents/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>

    </div>
  );
}



























/* 
function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, []);
  return (
    <div>
      <h2>Travelling Around the world!!</h2>
      <h4>Countries Found: {countries.length}</h4>
      {
        countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
      }
    </div>
  );
}

function Country(props) {
  return (
    <div>
      <h2>Country Name: {props.name}</h2>
      <h4>Capital Name: {props.capital}</h4>
    </div>
  );
} */

export default App;

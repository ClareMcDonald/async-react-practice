import './App.css';
import { useEffect, useState } from 'react';
import { getCandies, getCars, getCats } from './services/fetch-utils';
import CandiesList from './CandiesList';
import CarsList from './CarsList';

function App() {
  const [candies, setCandies] = useState([]);
  const [cars, setCars] = useState([]);
  const [cats, setCats] = useState([]);

  async function fetchAndStoreCandies() {
    const data = await getCandies();

    setCandies(data);
  }

  async function fetchAndStoreCars() {
    const data = await getCars();

    setCars(data);
  }

  async function fetchAndStoreCats() {
    const data = await getCats();

    setCats(data);
  }

  useEffect(() => {
    fetchAndStoreCandies();
    fetchAndStoreCars();
    fetchAndStoreCats();
  }, []);

  return (
    <div className="App">
      <div>
        <CandiesList candies={candies} />
      </div>
      <div>
        <CarsList cars={cars}/>
      </div>
    </div>
  );
}

export default App;

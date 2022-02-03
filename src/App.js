import './App.css';
import { useEffect, useState } from 'react';
import { getCandies, getCars } from './services/fetch-utils';
import CandiesList from './CandiesList';

function App() {
  const [candies, setCandies] = useState([]);
  const [cars, setCars] = useState([]);

  async function fetchAndStoreCandies() {
    const data = await getCandies();

    setCandies(data);
  }

  async function fetchAndStoreCars() {
    const data = await getCars();

    setCars(data);
  }

  useEffect(() => {
    fetchAndStoreCandies();
    fetchAndStoreCars();
  }, []);

  return (
    <div className="App">
      <CandiesList candies={candies} />
    </div>
  );
}

export default App;

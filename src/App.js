import './App.css';
import { useEffect, useState } from 'react';
import { getCandies, getCars, getCats, getDogs } from './services/fetch-utils';
import CandiesList from './CandiesList';
import CarsList from './CarsList';
import CatsList from './CatsList';

function App() {
  const [candies, setCandies] = useState([]);
  const [cars, setCars] = useState([]);
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);

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

  async function fetchandStoreDogs() {
    const data = await getDogs();

    setDogs(data);
  }

  useEffect(() => {
    fetchAndStoreCandies();
    fetchAndStoreCars();
    fetchAndStoreCats();
    fetchandStoreDogs();
  }, []);

  return (
    <div className="App">
      <div>
        <CandiesList candies={candies} />
      </div>
      <div>
        <CarsList cars={cars}/>
      </div>
      <div>
        <CatsList cats={cats}/>
      </div>
    </div>
  );
}

export default App;

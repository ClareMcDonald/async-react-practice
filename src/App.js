import './App.css';
import { useEffect, useState } from 'react';
import { getCandies } from './services/fetch-utils';
import CandiesList from './CandiesList';

function App() {
  const [candies, setCandies] = useState([]);

  async function fetchAndStoreCandies() {
    const data = await getCandies();

    setCandies(data);
  }

  useEffect(() => {
    fetchAndStoreCandies();
  }, []);
  
  return (
    <div className="App">
      <CandiesList candies={candies} />
    </div>
  );
}

export default App;

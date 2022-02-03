import './App.css';
import { useState } from 'react';
import { getCandies } from './services/fetch-utils';
import CandiesList from './CandiesList';

function App() {
  const [candies, setCandies] = useState([]);

  return (
    <div className="App">
      <CandiesList candies={candies} />
    </div>
  );
}

export default App;

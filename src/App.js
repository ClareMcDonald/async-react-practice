import homer from './spinner-1.gif';
import './App.css';
import { useEffect, useState } from 'react';
import { getCandies, getCars, getCats, getDogs } from './services/fetch-utils';
import CandiesList from './CandiesList';
import CarsList from './CarsList';
import CatsList from './CatsList';
import DogsList from './DogsList';

function App() {
  const [candies, setCandies] = useState([]);
  const [isCandiesLoading, setCandiesLoading] = useState(false);
  const [cars, setCars] = useState([]);
  const [isCarsLoading, setCarsLoading] = useState(false);
  const [cats, setCats] = useState([]);
  const [isCatsLoading, setCatsLoading] = useState(false);
  const [dogs, setDogs] = useState([]);
  const [isDogsLoading, setDogsLoading] = useState(false);

  async function fetchAndStoreCandies() {
    setCandiesLoading(true);

    const data = await getCandies();

    setCandiesLoading(false);
    setCandies(data);
  }

  async function fetchAndStoreCars() {
    setCarsLoading(true);

    const data = await getCars();

    setCarsLoading(false);
    setCars(data);
  }

  async function fetchAndStoreCats() {
    setCatsLoading(true);

    const data = await getCats();

    setCatsLoading(false);
    setCats(data);
  }

  async function fetchandStoreDogs() {
    setDogsLoading(true);

    const data = await getDogs();

    setDogsLoading(false);
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
        {isCandiesLoading
          ? <img src={homer} />
          : <CandiesList candies={candies} />
        }
      </div>
      <div>
        {isCarsLoading
          ? <img src={homer} />
          : < CarsList cars={cars} />
        }
      </div>
      <div>
        {isCatsLoading
          ? <img src={homer} />
          : <CatsList cats={cats} />
        }
      </div>
      <div>
        {isDogsLoading
          ? <img src={homer}/>
          : <DogsList dogs={dogs} />
        }
      </div>
    </div>
  );
}

export default App;

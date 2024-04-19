import './App.css';
import { useState, useEffect } from 'react';

import { Survivors } from '../types';

function App() {
  const [count, setCount] = useState<number>(0);
  const [survivorData, setSurvivorData] = useState<Array<Survivors>>([]);

  const fetchData = async () => {
    const res = await fetch('/survivors');
    const data = await res.json();

    setSurvivorData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => console.log('survivor data', survivorData), [survivorData]);

  return (
    <div className='App'>
      <div>
        <img
          src='/1/colleen.png'
          alt='Colleen Haskell'
          style={{ display: 'block', margin: '0 auto', height: '25rem' }}
        />
      </div>
      <h1>survivor zodiac</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;

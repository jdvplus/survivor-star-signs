import { useState, useEffect } from 'react';

import { Survivors } from '../types';

const Home = () => {
  const [survivorData, setSurvivorData] = useState<Array<Survivors>>([]);

  const fetchData = async () => {
    const res = await fetch('/api/survivors');
    const data = await res.json();

    setSurvivorData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => console.log('survivor data', survivorData), [survivorData]);

  return <div></div>;
};

export default Home;

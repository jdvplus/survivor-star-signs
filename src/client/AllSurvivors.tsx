import { useState, useEffect } from 'react';

import { Survivors } from '@/types';

const AllSurvivors = () => {
  const [allSurvivors, setAllSurvivors] = useState<Array<Survivors>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/survivors');
      const data = await res.json();

      setAllSurvivors(data);
    };

    fetchData();
  }, []);

  useEffect(() => console.log('all survivors', allSurvivors), [allSurvivors]);

  return;
};

export default AllSurvivors;

import { useState, useEffect } from 'react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/client/components/ui/avatar';

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

  //TODO: create grid to display all survivors

  return (
    <div className='grid grid-cols-8 gap-8'>
      {allSurvivors.map((survivor) => {
        const { contestant, pathToPhoto }: Survivors = survivor;
        return (
          <Avatar key={contestant}>
            <AvatarImage src={`${pathToPhoto}`} alt={contestant} />
            <AvatarFallback>{contestant[0]}</AvatarFallback>
          </Avatar>
        );
      })}
    </div>
  );
};

export default AllSurvivors;

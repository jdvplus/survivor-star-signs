import { useState, useEffect } from 'react';

import { Survivors } from '../types';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './components/ui/carousel';

const Home = () => {
  const [survivorData, setSurvivorData] = useState<Array<Survivors>>([]);

  const fetchData = async () => {
    const res = await fetch('/api/survivors');
    let data = await res.json();
    data = data.slice(0, 16);

    setSurvivorData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => console.log('survivor data', survivorData), [survivorData]);

  return (
    <div className='container'>
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {survivorData.map((survivor) => {
            return (
              <CarouselItem key={survivor.contestant} className='basis-1/2'>
                <img
                  className='h-[30em] m-auto rounded-xl'
                  src={survivor.pathToPhoto}
                  alt={survivor.contestant}
                />
                <p>{survivor.contestant.toLowerCase()}</p>
                <p>{survivor.zodiacSign.toLowerCase()}</p>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Home;

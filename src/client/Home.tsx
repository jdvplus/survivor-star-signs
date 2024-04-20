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
    const data = await res.json();

    setSurvivorData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => console.log('survivor data', survivorData), [survivorData]);

  return (
    <div className='container'>
      <Carousel>
        <CarouselContent>
          <CarouselItem>test2</CarouselItem>
          <CarouselItem>test3</CarouselItem>
          <CarouselItem>test5</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Home;

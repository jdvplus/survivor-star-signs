import { useState, useEffect } from 'react';

import { Survivors, ZodiacSign } from '@/types';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './components/ui/select';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './components/ui/carousel';

const Home = () => {
  const [survivorData, setSurvivorData] = useState<Array<Survivors>>([]);
  const [selectedSign, setSelectedSign] = useState('');

  //TODO: figure out best way to show all survivors
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch('/api/survivors');
  //     const data = await res.json();

  //     setSurvivorData(data);
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchBySign = async () => {
      const res = await fetch('/api/survivors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ selectedSign }),
      });
      const data = await res.json();

      setSurvivorData(data);
    };

    fetchBySign();
  }, [selectedSign]);

  // useEffect(() => console.log('survivor data', survivorData), [survivorData]);
  // useEffect(() => console.log('selected sign', selectedSign), [selectedSign]);

  const zodiacSigns: Array<ZodiacSign> = [
    ZodiacSign.Aries,
    ZodiacSign.Taurus,
    ZodiacSign.Gemini,
    ZodiacSign.Cancer,
    ZodiacSign.Leo,
    ZodiacSign.Virgo,
    ZodiacSign.Libra,
    ZodiacSign.Scorpio,
    ZodiacSign.Sagittarius,
    ZodiacSign.Capricorn,
    ZodiacSign.Aquarius,
    ZodiacSign.Pisces,
  ];

  return (
    <div className='container'>
      <div className='card'>
        <Select value={selectedSign} onValueChange={setSelectedSign}>
          <SelectTrigger className='h-[4em] w-[20em] m-auto'>
            <SelectValue className='m-auto' placeholder='select a sign' />
          </SelectTrigger>
          <SelectContent>
            {zodiacSigns.map((sign) => (
              <SelectItem key={sign} value={sign}>
                {sign.toLowerCase()}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className='card'>
        {selectedSign ? (
          <Carousel
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {survivorData.map((survivor) => (
                <CarouselItem key={survivor.contestant} className='basis-1/2'>
                  <img
                    className='h-[30em] m-auto rounded-xl'
                    src={survivor.pathToPhoto}
                    alt={survivor.contestant}
                  />
                  <p>{survivor.contestant.toLowerCase()}</p>
                  <p>{survivor.zodiacSign.toLowerCase()}</p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : null}
      </div>
    </div>
  );
};

export default Home;

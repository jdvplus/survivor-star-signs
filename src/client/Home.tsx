import { useState, useEffect } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/client/components/ui/select';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/client/components/ui/carousel';

import { Survivors, ZodiacSign } from '@/types';

const Home = () => {
  const [survivorData, setSurvivorData] = useState<Array<Survivors>>([]);
  const [selectedSign, setSelectedSign] = useState('');

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

  useEffect(() => console.log('survivor data', survivorData), [survivorData]);
  // useEffect(() => console.log('selected sign', selectedSign), [selectedSign]);

  //TODO: add gender option

  return (
    <div className='container'>
      <div className='container p-4'>
        <Select value={selectedSign} onValueChange={setSelectedSign}>
          <SelectTrigger className='text-2xl h-[3rem] w-[25rem] m-auto'>
            <SelectValue className='m-auto' placeholder='select a sign' />
          </SelectTrigger>
          <SelectContent>
            {zodiacSigns.map((sign) => (
              <SelectItem className='text-2xl' key={sign} value={sign}>
                {sign.toLowerCase()}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedSign ? (
        <div className='container p-4'>
          <p className='text-3xl mb-4'>
            {survivorData.length}{' '}
            {selectedSign[selectedSign.length - 1] === 's'
              ? selectedSign
              : `${selectedSign}s`}{' '}
            have played Survivor.
          </p>
          <Carousel
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {survivorData.map((survivor) => (
                <CarouselItem key={survivor.contestant} className='basis-1/2'>
                  <img
                    className='h-[30rem] m-auto rounded-xl'
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
        </div>
      ) : null}
    </div>
  );
};

export default Home;

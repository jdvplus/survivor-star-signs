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

import { Survivors } from '@/types';

import { zodiacSigns } from '@/constants';

const Home = () => {
  const [queryData, setQueryData] = useState<Array<Survivors>>([]);
  const [selectedSign, setSelectedSign] = useState('');

  useEffect(() => {
    const fetchBySign = async () => {
      const res = await fetch('/api/survivors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ selectedSign }),
      });
      const data = await res.json();

      setQueryData(data);
    };

    fetchBySign();
  }, [selectedSign]);

  useEffect(() => console.log('query data', queryData), [queryData]);

  //TODO: add gender option

  return (
    <div className='container'>
      {/* dropdown select */}
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

      {/* carousel */}
      {queryData.length ? (
        <div className='container p-4'>
          {selectedSign ? (
            <p className='text-3xl mb-4'>
              {queryData.length}{' '}
              {selectedSign[selectedSign.length - 1] === 's'
                ? selectedSign
                : `${selectedSign}s`}{' '}
              have played Survivor.
            </p>
          ) : null}
          <Carousel
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {queryData.map((survivor) => (
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

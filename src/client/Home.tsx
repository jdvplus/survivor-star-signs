import { useState, useEffect } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/client/components/ui/carousel';

import { Survivors, ZodiacSign } from '@/types';

import { fetchBy } from '@/constants';
import SelectBy from './SelectBy';

const Home = () => {
  const [queryData, setQueryData] = useState<Array<Survivors>>([]);
  const [signSelection, setSignSelection] = useState('');
  const [genderSelection, setGenderSelection] = useState('');

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

  const genderOptions: Array<string> = ['men', 'women'];

  // display survivors by zodiac sign
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBy(
        signSelection as ZodiacSign,
        genderSelection as 'men' | 'women'
      );
      setQueryData(data);
    };

    fetchData();
  }, [signSelection, genderSelection]);

  useEffect(() => console.log('query data', queryData), [queryData]);

  return (
    <div className='container'>
      {/* dropdown select: choose zodiac sign */}
      <SelectBy
        category='zodiacSign'
        categoryValue={signSelection as ZodiacSign}
        setter={setSignSelection}
        categoryOptions={zodiacSigns}
      />

      {/* dropdown select: choose gender */}
      <SelectBy
        category='gender'
        categoryValue={genderSelection as 'men' | 'women'}
        setter={setGenderSelection}
        categoryOptions={genderOptions}
      />

      {/* carousel */}
      {queryData.length ? (
        <div className='container p-4'>
          {signSelection ? (
            <p className='text-3xl mb-4'>
              {queryData.length}{' '}
              {signSelection[signSelection.length - 1] === 's'
                ? signSelection
                : `${signSelection}s`}{' '}
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

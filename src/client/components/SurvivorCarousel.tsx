import { useState, useEffect } from 'react';

import { RerollButton } from '@/client/components/ui/reroll-button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/client/components/ui/carousel';

import { Survivors, ZodiacSign, GenderSelectOptions } from '@/types';

const SurvivorCarousel = ({
  apiRoute,
  init,
  selectionInfo,
}: {
  apiRoute: string;
  init?: RequestInit;
  selectionInfo?: Array<ZodiacSign | GenderSelectOptions>;
}) => {
  const [data, setData] = useState<Array<Survivors>>([]);

  useEffect(() => console.log('data', data), [data]);

  const fetchData = async (apiRoute: string, init?: RequestInit) => {
    const res = await fetch(apiRoute, init);
    const data = await res.json();

    setData(data);
  };

  // display random survivors
  useEffect(() => {
    fetchData(apiRoute, init);
  }, [apiRoute, init, selectionInfo]);

  return (
    <div className='container p-4 border border-slate-200 rounded-xl shadow-lg'>
      {/* only show re-roll button when carousel is displaying random assortment of players */}
      {!selectionInfo && (
        <div className='mb-4'>
          <RerollButton />
        </div>
      )}

      {/* only show relevant stats when carousel is displaying query results */}
      {selectionInfo && selectionInfo[0] ? (
        <p className='text-3xl mb-4'>
          {data.length}{' '}
          {selectionInfo[0][selectionInfo[0].length - 1] === 's'
            ? selectionInfo[0]
            : `${selectionInfo[0]}s`}{' '}
          have played Survivor.
        </p>
      ) : null}

      <Carousel
        opts={{
          loop: true,
          align: 'center',
        }}
      >
        <CarouselContent>
          {data.map((survivor) => (
            <CarouselItem key={survivor.contestant} className='basis-1/2'>
              <img
                className='aspect-auto h-[20rem] m-auto rounded-xl'
                src={`${survivor.pathToPhoto}.png`}
                alt={survivor.contestant}
              />
              <p className='text-2xl'>{survivor.contestant.toLowerCase()}</p>
              <p>{survivor.zodiacSign.toLowerCase()}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default SurvivorCarousel;

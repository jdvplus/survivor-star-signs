import { useState } from 'react';

import { ZodiacSign, GenderSelectOptions } from '@/types';

import SurvivorCarousel from '@/client/components/SurvivorCarousel';
import SelectBy from '@/client/components/SelectBy';

const Home = () => {
  const [signSelection, setSignSelection] = useState<string>('');
  const [genderSelection, setGenderSelection] = useState<string>('');

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
  const genderSelectOptions: Array<GenderSelectOptions> = ['men', 'women'];

  //TODO: update with additional query keys in req.body (season)
  const queryInit: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ signSelection, genderSelection }),
  };

  return (
    <div className='container'>
      {/* dropdown selects */}
      <div className='flex flex-row'>
        {/* choose zodiac sign */}
        <SelectBy
          category='zodiacSign'
          categoryValue={signSelection as ZodiacSign}
          setter={setSignSelection}
          categoryOptions={zodiacSigns}
        />

        {/* choose gender */}
        <SelectBy
          category='gender'
          categoryValue={genderSelection as GenderSelectOptions}
          setter={setGenderSelection}
          categoryOptions={genderSelectOptions}
        />
      </div>

      {/* show carousel when query is made */}
      {(signSelection || genderSelection) && (
        <SurvivorCarousel
          apiRoute='/api/survivors'
          init={queryInit}
          selectionInfo={[
            signSelection as ZodiacSign,
            genderSelection as GenderSelectOptions,
          ]}
        />
      )}
    </div>
  );
};

export default Home;

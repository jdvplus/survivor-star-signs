import { useState, useEffect } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/client/components/ui/select';

import { ZodiacSign, GenderSelectOptions } from '@/types';

const SelectBy = ({
  category,
  categoryValue,
  setter,
  categoryOptions,
}: {
  category: string;
  categoryValue: ZodiacSign | 'men' | 'women'; //TODO: update this w/ season
  setter: React.Dispatch<React.SetStateAction<string>>; //TODO: update this w/ season
  categoryOptions: Array<ZodiacSign | GenderSelectOptions>;
}) => {
  const [placeholder, setPlaceholder] = useState<string>('');

  useEffect(() => {
    if (category === 'zodiacSign') setPlaceholder('select a sign');
    if (category === 'gender') setPlaceholder('select a gender');
  }, [category]);

  return (
    <div className='container p-4'>
      <Select value={categoryValue} onValueChange={setter}>
        <SelectTrigger className='text-2xl h-[3rem] w-[25rem] m-auto'>
          <SelectValue className='m-auto' placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {categoryOptions.map((option) => (
            <SelectItem className='text-2xl' key={option} value={option}>
              {option.toLowerCase()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectBy;

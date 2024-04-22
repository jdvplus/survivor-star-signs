import { Survivors, ZodiacSign } from '@/types.ts';

//TODO: deprecate
const fetchBy = async (
  signSelection: ZodiacSign,
  genderSelection: 'men' | 'women'
): Promise<Array<Survivors>> => {
  const res = await fetch('/api/survivors', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ signSelection, genderSelection }),
  });
  const data = await res.json();

  return data;
};

export { fetchBy };

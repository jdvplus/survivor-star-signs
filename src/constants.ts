import { Survivors, ZodiacSign } from '@/types.ts';

//TODO: update with additional keys in req.body (season)
export const fetchBy = async (
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

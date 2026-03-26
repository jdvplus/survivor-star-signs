import { useQuery, keepPreviousData } from '@tanstack/react-query'

import { api } from '@/lib/api'
import type { Survivor } from '../../shared/types'

export function useSurvivorsByCategory(sign?: string, gender?: string) {
  const params = new URLSearchParams()
  if (sign) params.set('sign', sign)
  if (gender) params.set('gender', gender)

  return useQuery({
    queryKey: ['survivors', 'category', sign, gender],
    queryFn: () =>
      api.get<Survivor[]>(`/api/survivors/filter?${params.toString()}`),
    enabled: !!(sign || gender),
    placeholderData: keepPreviousData,
  })
}

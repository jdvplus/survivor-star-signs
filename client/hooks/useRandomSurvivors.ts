import { useQuery } from '@tanstack/react-query'

import { api } from '@/lib/api'
import type { Survivor } from '../../shared/types'

export function useRandomSurvivors() {
  return useQuery({
    queryKey: ['survivors', 'random'],
    queryFn: () => api.get<Survivor[]>('/api/random'),
    staleTime: 0,
  })
}

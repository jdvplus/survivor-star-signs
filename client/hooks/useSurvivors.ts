import { useQuery } from '@tanstack/react-query'

import { api } from '@/lib/api'
import type { Survivor } from '../../shared/types'

export function useSurvivors() {
  return useQuery({
    queryKey: ['survivors'],
    queryFn: () => api.get<Survivor[]>('/api/survivors'),
  })
}

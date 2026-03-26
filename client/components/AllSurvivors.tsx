import { useMemo } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useSurvivors } from '@/hooks/useSurvivors'
import { shuffleArray } from '../../shared/utils'

export default function AllSurvivors() {
  const { data: allSurvivors = [] } = useSurvivors()

  const shuffled = useMemo(() => shuffleArray(allSurvivors), [allSurvivors])

  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 md:gap-6 lg:grid-cols-8 lg:gap-8">
      {shuffled.map((survivor) => (
        <Avatar key={survivor.contestant}>
          <AvatarImage
            src={`${survivor.pathToPhoto}-avatar.jpg`}
            alt={survivor.contestant}
          />
          <AvatarFallback>{survivor.contestant[0]}</AvatarFallback>
        </Avatar>
      ))}
    </div>
  )
}

import { useMemo } from 'react'

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
import { useSurvivors } from '@/hooks/useSurvivors'
import { shuffleArray } from '@/lib/helpers'

export default function AllSurvivors() {
  const { data: allSurvivors = [] } = useSurvivors()

  const shuffled = useMemo(
    () => shuffleArray(allSurvivors),
    [allSurvivors]
  )

  return (
    <div className="grid grid-cols-8 gap-8">
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

import { useMemo } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useSurvivors } from '@/hooks/useSurvivors'
import { shuffleArray } from '../../shared/utils'
import type { Survivor } from '../../shared/types'

const ITEMS_PER_ROW = 8
const ROW_COUNT = 6

function ScrollRow({
  survivors,
  direction,
}: {
  survivors: Survivor[]
  direction: 'left' | 'right'
}) {
  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div
        className={`flex gap-6 w-max ${direction === 'right' ? 'animate-scroll-right' : 'animate-scroll-left'}`}
      >
        {[...survivors, ...survivors].map((survivor, i) => (
          <Avatar
            key={`${survivor.contestant}-${i}`}
            className="size-14! sm:size-16! md:size-20! shrink-0"
          >
            <AvatarImage
              src={`${survivor.pathToPhoto}-avatar.jpg`}
              alt={survivor.contestant}
            />
            <AvatarFallback>{survivor.contestant[0]}</AvatarFallback>
          </Avatar>
        ))}
      </div>
    </div>
  )
}

export default function AllSurvivors() {
  const { data: allSurvivors = [] } = useSurvivors()

  const rows = useMemo(() => {
    const shuffled = shuffleArray(allSurvivors)
    return Array.from({ length: ROW_COUNT }, (_, i) =>
      shuffled.slice(i * ITEMS_PER_ROW, (i + 1) * ITEMS_PER_ROW)
    )
  }, [allSurvivors])

  return (
    <div className="space-y-6 md:space-y-8">
      {rows.map((row, i) => (
        <ScrollRow
          key={i}
          survivors={row}
          direction={i % 2 === 0 ? 'right' : 'left'}
        />
      ))}
    </div>
  )
}

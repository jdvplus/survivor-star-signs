import { RerollButton } from '@/components/ui/reroll-button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import type { Survivor } from '../../shared/types'

export default function SurvivorCarousel({
  data,
  onReroll,
  selectionLabel,
}: {
  data: Survivor[]
  onReroll?: () => void
  selectionLabel?: string
}) {
  if (data.length === 0 && !onReroll) return null

  return (
    <div className="container p-4 border border-border rounded-xl shadow-lg">
      {onReroll && (
        <div className="mb-4">
          <RerollButton onClick={onReroll} />
        </div>
      )}

      {selectionLabel && (
        <p className="text-3xl mb-4">
          {data.length} {selectionLabel} {data.length === 1 ? 'has' : 'have'}{' '}
          played Survivor.
        </p>
      )}

      <Carousel
        opts={{
          loop: true,
          align: 'center',
        }}
      >
        <CarouselContent>
          {data.map((survivor) => (
            <CarouselItem key={survivor.contestant} className="basis-1/2">
              <img
                className="aspect-auto h-80 m-auto rounded-xl"
                src={`${survivor.pathToPhoto}.png`}
                alt={survivor.contestant}
              />
              <p className="text-2xl">{survivor.contestant.toLowerCase()}</p>
              <p>{survivor.zodiacSign.toLowerCase()}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

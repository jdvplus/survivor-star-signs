import { useState } from 'react'

import { ZodiacSign } from '../../shared/types'
import type { GenderSelectOptions } from '../../shared/types'
import SelectBy from '@/components/ui/select-by'
import SurvivorCarousel from '@/components/SurvivorCarousel'
import { useSurvivorsByCategory } from '@/hooks/useSurvivorsByCategory'

const zodiacSigns = Object.values(ZodiacSign)
const genderOptions: GenderSelectOptions[] = ['men', 'women']

const singularMap: Record<string, string> = {
  men: 'man',
  women: 'woman',
  contestants: 'contestant',
}

function singularize(word: string, count: number): string {
  return count === 1 ? (singularMap[word] ?? word) : word
}

export default function QueryByCategory() {
  const [signSelection, setSignSelection] = useState('')
  const [genderSelection, setGenderSelection] = useState('')

  const { data: filteredSurvivors = [] } = useSurvivorsByCategory(
    signSelection || undefined,
    genderSelection || undefined
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4">
        <SelectBy
          category="zodiacSign"
          categoryValue={signSelection}
          setter={setSignSelection}
          categoryOptions={zodiacSigns}
        />

        <SelectBy
          category="gender"
          categoryValue={genderSelection}
          setter={setGenderSelection}
          categoryOptions={genderOptions}
        />
      </div>

      <SurvivorCarousel
        data={filteredSurvivors}
        selectionLabel={
          signSelection || genderSelection
            ? [
                signSelection,
                singularize(
                  genderSelection || 'contestants',
                  filteredSurvivors.length
                ),
              ]
                .filter(Boolean)
                .join(' ')
            : undefined
        }
      />
    </div>
  )
}

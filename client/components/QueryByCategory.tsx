import { useState } from 'react'

import { ZodiacSign } from '../../shared/types'
import type { GenderSelectOptions } from '../../shared/types'
import SelectBy from '@/components/ui/select-by'
import SurvivorCarousel from '@/components/SurvivorCarousel'
import { useSurvivorsByCategory } from '@/hooks/useSurvivorsByCategory'

const zodiacSigns = Object.values(ZodiacSign)
const genderOptions: GenderSelectOptions[] = ['men', 'women', 'nb']

export default function QueryByCategory() {
  const [signSelection, setSignSelection] = useState('')
  const [genderSelection, setGenderSelection] = useState('')

  const { data: filteredSurvivors = [] } = useSurvivorsByCategory(
    signSelection || undefined,
    genderSelection || undefined
  )

  return (
    <div className="container">
      <div className="flex flex-row">
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

      {(signSelection || genderSelection) && (
        <SurvivorCarousel
          data={filteredSurvivors}
          selectionLabel={signSelection || genderSelection}
        />
      )}
    </div>
  )
}

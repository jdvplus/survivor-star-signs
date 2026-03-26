import { useState, useEffect, useCallback } from 'react'

import ThemeToggle from '@/components/ui/theme-toggle'
import SurvivorCarousel from '@/components/SurvivorCarousel'
import QueryByCategory from '@/components/QueryByCategory'
import AllSurvivors from '@/components/AllSurvivors'
import { useRandomSurvivors } from '@/hooks/useRandomSurvivors'

const REROLL_INTERVAL = 60

export default function App() {
  const { data: randomSurvivors = [], refetch } = useRandomSurvivors()
  const [countdown, setCountdown] = useState(REROLL_INTERVAL)

  const reroll = useCallback(() => {
    refetch()
    setCountdown(REROLL_INTERVAL)
  }, [refetch])

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          refetch()
          return REROLL_INTERVAL
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [refetch])

  return (
    <div className="py-12 space-y-16">
      <header className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide">
            survivor star signs
          </h1>
          <ThemeToggle />
        </div>
        <img
          className="w-full rounded-xl object-cover max-h-72 sm:max-h-80 md:max-h-96"
          src="cover-photo.png"
          alt="survivor star signs"
        />
      </header>

      <section className="space-y-6">
        <AllSurvivors />
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-wide">
          random survivors
        </h2>
        <SurvivorCarousel
          data={randomSurvivors}
          onReroll={reroll}
          countdown={countdown}
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-wide">
          filter by category
        </h2>
        <QueryByCategory />
      </section>
    </div>
  )
}

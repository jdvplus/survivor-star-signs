import { Button } from '@/components/ui/button'
import ThemeToggle from '@/components/ui/theme-toggle'
import SurvivorCarousel from '@/components/SurvivorCarousel'
import QueryByCategory from '@/components/QueryByCategory'
import AllSurvivors from '@/components/AllSurvivors'
import { useRandomSurvivors } from '@/hooks/useRandomSurvivors'

export default function App() {
  const { data: randomSurvivors = [], refetch } = useRandomSurvivors()

  return (
    <div className="my-12">
      <h1 className="text-6xl font-bold tracking-wide">survivor star signs</h1>

      <div className="container my-4 p-12">
        <AllSurvivors />
      </div>

      <div className="container p-4">
        <img
          className="h-[20rem] m-auto rounded-xl"
          src="cover-photo.png"
          alt="dave & alex"
        />
      </div>

      <SurvivorCarousel data={randomSurvivors} onReroll={() => refetch()} />

      <div className="container p-4">
        <Button className="text-xl">enter</Button>
      </div>

      <ThemeToggle />

      <QueryByCategory />
    </div>
  )
}

import { Button } from '@/components/ui/button'
import { Repeat } from 'lucide-react'

export function RerollButton() {
  return (
    <Button variant="outline" size="icon">
      <Repeat className="h-4 w-4" />
    </Button>
  )
}

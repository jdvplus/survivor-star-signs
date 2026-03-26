import { Button } from '@/components/ui/button'
import { Repeat } from 'lucide-react'

export function RerollButton({ onClick }: { onClick?: () => void }) {
  return (
    <Button variant="outline" size="icon" onClick={onClick}>
      <Repeat className="h-4 w-4" />
    </Button>
  )
}

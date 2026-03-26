import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const placeholders: Record<string, string> = {
  zodiacSign: 'select a sign',
  gender: 'select a gender',
}

export default function SelectBy({
  category,
  categoryValue,
  setter,
  categoryOptions,
}: {
  category: string
  categoryValue: string
  setter: (value: string) => void
  categoryOptions: string[]
}) {
  return (
    <Select value={categoryValue} onValueChange={setter}>
      <SelectTrigger className="text-xl sm:text-2xl h-12 w-full max-w-80">
        <SelectValue placeholder={placeholders[category] || 'select'} />
      </SelectTrigger>
      <SelectContent>
        {categoryOptions.map((option) => (
          <SelectItem
            className="text-xl sm:text-2xl"
            key={option}
            value={option}
          >
            {option.toLowerCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

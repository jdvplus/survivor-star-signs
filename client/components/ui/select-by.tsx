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
    <div className="container p-4">
      <Select value={categoryValue} onValueChange={setter}>
        <SelectTrigger className="text-2xl h-[3rem] w-[25rem] m-auto">
          <SelectValue
            className="m-auto"
            placeholder={placeholders[category] || 'select'}
          />
        </SelectTrigger>
        <SelectContent>
          {categoryOptions.map((option) => (
            <SelectItem className="text-2xl" key={option} value={option}>
              {option.toLowerCase()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

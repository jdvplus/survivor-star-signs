export function makeInitials(str: string): string {
  return str
    .split(/[\s.\-,'()]+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
}

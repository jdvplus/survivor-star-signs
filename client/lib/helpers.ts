export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export function makeInitials(str: string): string {
  let res = ''
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === str[i].toUpperCase() &&
      str[i] !== ' ' &&
      str[i] !== '.' &&
      str[i] !== ',' &&
      str[i] !== '-' &&
      str[i] !== "'" &&
      str[i] !== '(' &&
      str[i] !== ')'
    )
      res += str[i]
  }
  return res
}

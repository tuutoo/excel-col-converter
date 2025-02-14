function toNumberReducer(prev, curr, currentIndex) {
  return prev + curr * 26 ** currentIndex
}

export function ColumnNameToNumber(str: string) {
  const pattern = /[^A-Z]+/i

  const isNotChar = pattern.test(str)

  if ((str.trim() !== '' && isNotChar) || str.trim().toString().length > 6)
    return 'Invalid Column Name'

  if (str.trim() === '')
    return ''

  const arr = str.toUpperCase().split('')

  return arr
    .map(x => x.charCodeAt(0) - 64)
    .reverse()
    .reduce(toNumberReducer, 0)
}

export function ColumnNumberToString(num: number | null) {
  if (num > 321272406)
    return 'Invalid Number'

  if (num <= 0)
    return ''

  const result = []
  while (num) {
    let t = num % 26
    if (!t) {
      t = 26
      --num
    }
    result.push(String.fromCodePoint(t + 64))
    num = ~~(num / 26)
  }
  return result.reverse().join('')
}

export function multiNamesToNumbers(columnNames: string) {
  let names = columnNames.split('\n')

  names = names.map((x) => {
    return x.trim()
  })

  const numbers = names.map((name) => {
    return ColumnNameToNumber(name)
  })

  return numbers.join('\n')
}

export function multiNumbersToNames(columnNumbers: string) {
  const numbers = columnNumbers.split('\n')

  const names = numbers.map((number) => {
    return ColumnNumberToString(+number)
  })

  return names.join('\n')
}

export const isDark = useDark()

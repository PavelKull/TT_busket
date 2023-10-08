export default function formatNumberWithDots(number, startIndex, endIndex) {
  if (typeof number !== 'number' || isNaN(number)) {
    return 'Invalid number'
  }

  const numberString = number.toString()
  if (
    startIndex < 0 ||
    endIndex >= numberString.length ||
    startIndex > endIndex
  ) {
    return 'Invalid range'
  }

  const prefix = numberString.slice(0, startIndex)
  const dots = '.'.repeat(endIndex - startIndex + 1)
  const suffix = numberString.slice(endIndex + 1)

  return `${prefix}${dots}${suffix}`
}

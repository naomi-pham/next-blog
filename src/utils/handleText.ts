export default function handleText(value: number | string | undefined | null) {
  if (value === undefined || value === null) {
    return '-'
  } else {
    return value
  }
}

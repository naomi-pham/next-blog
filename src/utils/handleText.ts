export default function handleText(value: any): any {
  if (value === undefined || value === null) {
    return '-'
  } else {
    return value
  }
}

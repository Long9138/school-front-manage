export function toFixed(value: string | number, decimalPlace: string | number = 2): string | number {
  let val = Number(value),
    dp = Number(decimalPlace)
  if (!value || isNaN(val) || !Number.isInteger(dp)) {
    return value;
  }
  return val.toFixed(dp)
}
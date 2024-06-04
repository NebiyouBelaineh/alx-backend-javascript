export default function cleanSet(set, startString) {
  if (!(set instanceof Set)) return '';
  if (typeof startString !== 'string') return '';
  if (startString.length === 0) return '';
  return [...set].filter((value) => value && value.startsWith(startString)).map((value) => value.slice(startString.length)).join('-');
}

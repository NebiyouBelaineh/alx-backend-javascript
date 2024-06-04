function cleanSet(set, startString) {
  if (!(set instanceof Set) || (typeof startString !== 'string') || startString.length === 0 || startString === '') {
    return '';
  }
  const len = startString.length;
  const strArr = [];

  for (const value of set) {
    if (value.startsWith(startString)) {
      // console.log(value);
      strArr.push(value.slice(len));
    }
  }
  return strArr.join('-');
}
export default cleanSet;

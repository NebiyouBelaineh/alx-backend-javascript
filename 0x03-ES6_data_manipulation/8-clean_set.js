function cleanSet(set, startString) {
  const len = startString.length;
  const strArr = [];

  for (const value of set) {
    if (value.startsWith(startString) && startString !== '') {
      // console.log(value);
      strArr.push(value.slice(len));
    }
  }
  return strArr.join('-');
}
export default cleanSet;

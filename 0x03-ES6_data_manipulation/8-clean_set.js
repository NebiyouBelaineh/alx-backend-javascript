function cleanSet(set, startString) {
  /* first we look if each set value starts with the startString
  if these values exists, we truncate/remove the start string from
  each set value matching our condition and save to an array
  then we join the values using '-' */
  const len = startString.length;
  const strArr = [];
  if (startString === '') {
    return '';
  }
  for (const value of set) {
    if (value.startsWith(startString)) {
      strArr.push(value.slice(len));
    }
  }
  return strArr.join('-');
}
export default cleanSet;

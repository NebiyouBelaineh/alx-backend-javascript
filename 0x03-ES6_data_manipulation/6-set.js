function setFromArray(array) {
  const set = new Set();

  array.forEach((element) => {
    set.add(element);
  });
  return set;
}
export default setFromArray;

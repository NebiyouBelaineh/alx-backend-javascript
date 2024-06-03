function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return arr.map((element) => element.id);
  }
  return [];
}
export default getListStudentIds;

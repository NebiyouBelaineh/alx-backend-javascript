function getStudentIdsSum(listOfStudents) {
  return listOfStudents.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
export default getStudentIdsSum;

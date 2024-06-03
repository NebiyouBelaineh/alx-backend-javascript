function getStudentsByLocation(listOfStudents, city) {
  return listOfStudents.filter((student) => student.location === city);
}
export default getStudentsByLocation;

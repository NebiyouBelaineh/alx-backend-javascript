function updateStudentGradeByCity(listStudents, city, newGrades) {
  const locationFiltered = listStudents
    .filter((student) => newGrades
      .some((newGrade) => newGrade.studentId === student.id));

  return locationFiltered.map((student) => {
    const newGradeObj = newGrades.find((newGrade) => newGrade.studentId === student.id);
    // console.log(newGradeObj);
    if (newGradeObj.grade) {
      return { ...student, grade: newGradeObj.grade };
    }
    return { ...student, grade: 'N/A' };
  });
}
export default updateStudentGradeByCity;

export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const students = listStudents.filter((student) => student.location === city);
  for (const student of students) {
    student.grade = 'N/A';
  }
  const newStudents = students.map((student) => {
    const update = student;
    for (const grade of newGrades) {
      if (update.id === grade.studentId) {
        update.grade = grade.grade;
      }
    }
    return update;
  });
  return newStudents;
}

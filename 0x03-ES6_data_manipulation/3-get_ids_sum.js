export default function getStudentIdsSum(students) {
  return students.reduce((sid, n) => sid + n.id, 0);
}

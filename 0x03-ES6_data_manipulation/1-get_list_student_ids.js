import { listStudents } from './0-get_list_students';
function getListStudentIds(arr) {
  if (Array.isArray(arr)) {
    return listStudents.map((element) => element.id);
  }
  return [];
}
export default getListStudentIds;

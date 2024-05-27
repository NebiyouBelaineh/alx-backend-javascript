function getEmplyeString(iterator) {
  const employees = [];
  for (const employee of iterator) {
    employees.push(employee);
  }
  return employees.join(' | ');
}

export default function iterateThroughObject(reportWithIterator) {
  return getEmplyeString(reportWithIterator);
}

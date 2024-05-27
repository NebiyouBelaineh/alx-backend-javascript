function* employeIterator(report) {
  for (const department in report) {
    if (Object.prototype.hasOwnProperty.call(report, department)) {
      for (const employee of report[department]) {
        yield employee;
      }
    }
  }
}

export default function createIteratorObject(report) {
  return employeIterator(report.allEmployees);
}

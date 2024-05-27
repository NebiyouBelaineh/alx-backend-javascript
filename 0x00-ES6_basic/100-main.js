import createIteratorObject from './100-createIteratorObject';

import createEmployeesObject from './11-createEmployeesObject';
import createReportObject from './12-createReportObject';

const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie']),
};

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);
console.log(typeof reportWithIterator)

for (const item of reportWithIterator) {
  console.log(item);
}

export default function createReportObject(employeesList) {
  const obj = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments() {
      return (Object.keys(this.allEmployees).length);
    },
  };

  return obj;

}

// employeesList is a the return value of createEmployeesObject
// createReportObject: should return an object

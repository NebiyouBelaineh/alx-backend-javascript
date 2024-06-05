interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }
    // Task required creating getToWork() but this would cause an issue with interface implementation
    getCoffeeBreak() :string {
        return 'Getting a coffee break';
    }

    workDirectorTasks() : string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks() : string {
        return 'Getting to work';
    }
}

const createEmployee = (salary: number | string) => {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

const isDirector = (employee: Director | Teacher): employee is Director => {
    //Check if employee has method unique to Director and return employe is Director as true
    return (employee as Director).workDirectorTasks !== undefined;
}

const executeWork = (employee: Director | Teacher): void => {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

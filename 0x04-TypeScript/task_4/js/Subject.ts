namespace Subjects {
    export class Subject {
        teacher: Teacher;

        constructor(teacher: Teacher) {
        }

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}
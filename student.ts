interface Student {
    id: number;
    name: string;
    age: number;
    grade: string;
}

const students: Student[] = [];

function addStudent(id: number, name: string, age: number, grade: string): void {
    students.push({ id, name, age, grade });
}

function findStudentById(id: number): Student | undefined {
    return students.find(student => student.id === id);
}

function updateStudent(updatedStudent: Student): boolean {
    const index = students.findIndex(student => student.id === updatedStudent.id);
    if (index !== -1) {
        students[index] = updatedStudent;
        return true;
    }
    return false;
}

function removeStudent(id: number): boolean {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students.splice(index, 1);
        return true;
    }
    return false;
}

// Adding some initial data
addStudent(1, "Alice", 20, "A");
addStudent(2, "Bob", 21, "B");

console.log(findStudentById(1));
console.log(updateStudent({ id: 2, name: "Bob", age: 21, grade: "A" }));
console.log(removeStudent(1));
console.log(students);

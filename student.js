var students = [];
function addStudent(id, name, age, grade) {
    students.push({ id: id, name: name, age: age, grade: grade });
}
function findStudentById(id) {
    return students.find(function (student) { return student.id === id; });
}
function updateStudent(updatedStudent) {
    var index = students.findIndex(function (student) { return student.id === updatedStudent.id; });
    if (index !== -1) {
        students[index] = updatedStudent;
        return true;
    }
    return false;
}
function removeStudent(id) {
    var index = students.findIndex(function (student) { return student.id === id; });
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

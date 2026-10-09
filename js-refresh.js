const students = [
{ id: 1, name: "Amina", year: 3, grades: [9, 8, 10],
contact: { github: "amina-dev" } },
{ id: 2, name: "Emir", year: 2, grades: [6, 7, 7] },
{ id: 3, name: "Lejla", year: 3, grades: [10, 9, 9],
contact: { github: "lejla-codes" } },
{ id: 4, name: "Tarik", year: 3, grades: [7, 6, 8] },
];

// Task 1
const greet = (student) => {
    'Hi ' + student.name + ', you are in year ' + student.year + '!';
}
students.forEach((student) => {
  console.log(greet(student));
});

// Task 2
const names = students.map((student) => student.name);
console.log(names);

// Task 3
const thirdYearStudents = students
  .filter((student) => student.year === 3)
  .map((student) => student.name);

console.log(thirdYearStudents);

// Task 4
const average = (grades) =>
  grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

const studentsWithAverage = students.map((student) => ({
  ...student,
  average: average(student.grades),
}));
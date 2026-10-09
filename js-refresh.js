const students = [
{ id: 1, name: "Amina", year: 3, grades: [9, 8, 10],
contact: { github: "amina-dev" } },
{ id: 2, name: "Emir", year: 2, grades: [6, 7, 7] },
{ id: 3, name: "Lejla", year: 3, grades: [10, 9, 9],
contact: { github: "lejla-codes" } },
{ id: 4, name: "Tarik", year: 3, grades: [7, 6, 8] },
];

// Task 5
const greet = (student) => {
    'Hi ' + student.name + ', you are in year ' + student.year + '!';
}
students.forEach((student) => {
  console.log(greet(student));
});

// Task 6
const names = students.map((student) => student.name);
console.log(names);

// Task 7
const thirdYearStudents = students
  .filter((student) => student.year === 3)
  .map((student) => student.name);

console.log(thirdYearStudents);

// Task 8
const average = (grades) =>
  grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

const studentsWithAverage = students.map((student) => ({
  ...student,
  average: average(student.grades),
}));
studentsWithAverage.forEach((student) => {
  console.log(`${student.name}: ${student.average.toFixed(2)}`);
});

// Task 9
const promotedStudents = students.map((student) =>
  student.name === "Emir"
    ? { ...student, year: 3 }
    : student
);
console.log(`Original: Emir is in year ${students[1].year}`);
console.log(`Updated: Emir is in year ${
  promotedStudents.find((student) => student.name === "Emir").year
}`);

// Task 10
students.forEach((student) => {
  const github = student.contact?.github ?? "no GitHub";
  console.log(`${student.name}: ${github}`);
});

//Task 11
async function loadUser(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const user = await response.json();
    console.log(`User ${id}: ${user.name}`);
  } catch (error) {
    console.log(`Could not load user ${id}`);
  }
}

loadUser(1);
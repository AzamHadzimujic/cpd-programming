const students = [
{ id: 1, name: "Amina", year: 3, grades: [9, 8, 10],
contact: { github: "amina-dev" } },
{ id: 2, name: "Emir", year: 2, grades: [6, 7, 7] },
{ id: 3, name: "Lejla", year: 3, grades: [10, 9, 9],
contact: { github: "lejla-codes" } },
{ id: 4, name: "Tarik", year: 3, grades: [7, 6, 8] },
];

const greet = (student) => {
    'Hi ' + student.name + ', you are in year ' + student.year + '!';
}
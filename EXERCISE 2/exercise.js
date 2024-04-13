const STUDENTS_DATA = [
  { firstName: "An", lastName: "Nguyen", age: 20, batch: "A" },
  { firstName: "Bình", lastName: "Tran", age: 22, batch: "B" },
  { firstName: "Cẩm", lastName: "Le", age: 21, batch: "A" },
  { firstName: "An", lastName: "Do", age: 19, batch: "B" },
];

function updateStudentAge(firstName, lastName, batch, newAge) {
  for (let i = 0; i < STUDENTS_DATA.length; i++) {
    const student = STUDENTS_DATA[i];
    if (
      student.firstName === firstName &&
      student.lastName === lastName &&
      student.batch === batch
    ) {
      student.age = newAge;
      break; 
    }
  }
}

updateStudentAge("An", "Nguyen", "A", 21);
console.log(STUDENTS_DATA);
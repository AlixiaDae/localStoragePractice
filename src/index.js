//DOM Elements
const studentForm = document.getElementById("student-form");
const studentsContainer= document.querySelector(".students");
const nameInput = studentForm['sName'];
const ageInput = studentForm['sAge'];
const numberInput = studentForm['sNumber'];

/*
const students = [
    {
        name: "Lyza",
        age: 27,
        number: 8120,
    },
    {
        name: "John",
        age: 27,
        number: 3210,
    }
];
*/

const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name, age, number) => {
    students.push({
        name: name,
        age : age,
        number: number,
    })

    localStorage.setItem("students", JSON.stringify(students))

    return {name, age, number}
}

const createStudentElement = ({name, age, number}) => {
    const studentDiv = document.createElement("div");
    const studentName = document.createElement("h2");
    const studentAge = document.createElement("p");
    const studentNumber = document.createElement("p");

    studentName.innerText = "Student name: " + name;
    studentAge.innerText = "Student age: " + age;
    studentNumber.innerText = "Student number: " + number;

    studentDiv.append(studentName, studentAge, studentNumber);
    studentsContainer.appendChild(studentDiv);

    studentsContainer.style.display = students.length === 0 ? "none" : "flex";

};

studentsContainer.style.display = students.length === 0 ? "none" : "flex";

students.forEach(createStudentElement);

studentForm.onsubmit = (e) => {
    e.preventDefault();

    const newStudent = addStudent(nameInput.value, ageInput.value, numberInput.value);

    createStudentElement(newStudent);

    nameInput.value = "";
    ageInput.value = "";
    numberInput.value = "";
};

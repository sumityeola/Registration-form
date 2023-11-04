let studentName = "Deepak"; // string
let age = 32; // number
let isStudent = false; // boolean
let a; // undefined;

// string, number , boolean , undefined , object

// DOM --> Document Object Model
// collect element in javascript from html
let saveButton = document.querySelector(".save");
let fName = document.querySelector(".fName");
let lName = document.querySelector(".lName");
let userList = document.querySelector(".user_list");
// element else null

saveButton.addEventListener("click", getData);

function getData() {
  console.log(fName.value); // html to js
  console.log(lName.value);
  userList.innerHTML += ` <tr>
                            <td>#</td>
                            <td>${fName.value}</td>
                            <td>${lName.value}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>`;
  fName.value = ""; // js to html
  lName.value = "";
  // alert("Student Registration Done Successfully");
}

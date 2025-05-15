let studentName = document.getElementById("txt-name");
let studentAddress = document.getElementById("txt-address");
let studentAge = document.getElementById("txt-age");
let btnGetDetails = document.getElementById("btn-get-details");

function btnGetDetailsOnClick() {
  let requestBody = {
    name: studentName.value,
    address: studentAddress.value,
    age: studentAge.value,
  };

  fetch("http://localhost:8080/get-student-details", {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json)
    .then((data) => {
      console.log("Student Details Received....");
    });
}

btnGetDetails.addEventListener("click", btnGetDetailsOnClick);

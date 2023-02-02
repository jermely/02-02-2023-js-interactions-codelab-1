const submitBtn = document.querySelector("#submitButton");
const fName = document.querySelector("#myName");
const email = document.querySelector("#myEmail");
const age = document.querySelector("#myAge");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (fName.value != "" && fName.value.length <= 60) {
    fName.style.borderColor = "green";
  } else {
    fName.style.borderColor = "red";
  }

  if (
    email.value != "" &&
    email.value.includes("@") &&
    email.value.length <= 60
  ) {
    email.style.borderColor = "green";
  } else {
    email.style.borderColor = "red";
  }

  if (age.value != "" && age.value.length <= 3) {
    age.style.borderColor = "green";
  } else {
    age.style.borderColor = "red";
  }

  if (
    fName.value.length &&
    email.value.length.includes("@") &&
    age.value.length
  ) {
    alert("Success");
  } else {
    alert("Failed");
  }
});

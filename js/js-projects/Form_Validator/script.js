function clearErrors() {
  let errors = document.getElementsByClassName("formError");

  for (let item of errors) {
    item.innerHTML = "";
  }
}

function setError(id, error) {
  let element = document.getElementById(id);
  element.getElementsByClassName("formError")[0].innerHTML = error;
  console.log(element);
}

function validateForm(e) {
  e.preventDefault();
  let returnValue = true;
  clearErrors();
  let name = document.forms["form1"]["username"].value;

  if (name.length < 5) {
    setError("username", " *Length of the name is too short!");
    console.log(name);
    returnValue = false;
  }

  let email = document.forms["form1"]["email"].value;
  if (email.contains("@") && email) {
    setError("email", " *Enter a valid email address");
    returnValue = false;
  }

  let password = document.forms["form1"]["password"].value;
  if (password.length < 6) {
    setError("password", " *Password length should be greater than 6");
    returnValue = false;
  }

  let confirmPassword = document.forms["form1"]["confirm"].value;
  if (confirmPassword !== password) {
    setError("confirm", " *password should match");
    returnValue = false;
  }

  return returnValue;
}

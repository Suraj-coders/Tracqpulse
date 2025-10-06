let formError = document.getElementById("form-error");
let formSuccess = document.getElementById("form-success");

// Validation functions
function validateName() {
  let input = document.getElementById("apply-name");
  let error = document.getElementById("name-error");
  let value = input.value.trim();

  if (value.length === 0) {
    error.innerText = "Enter a valid name";
    input.classList.add("border-red-500");
    return false;
  }
  if (value.length < 3) {
    error.innerText = "Name must be at least 3 characters";
    input.classList.add("border-red-500");
    return false;
  }
  error.innerText = "";
  input.classList.remove("border-red-500");
  return true;
}

function validateEmail() {
  let input = document.getElementById("apply-email");
  let error = document.getElementById("email-error");
  let value = input.value.trim();

  if (value.length === 0) {
    error.innerText = "This field is required.";
    input.classList.add("border-red-500");
    return false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    error.innerText = "Invalid email format";
    input.classList.add("border-red-500");
    return false;
  }
  error.innerText = "";
  input.classList.remove("border-red-500");
  return true;
}

function validatePhone() {
  let input = document.getElementById("apply-phone");
  let error = document.getElementById("phone-error");
  let value = input.value.trim();

  if (value.length === 0) {
    error.innerText = "Please enter your phone number";
    input.classList.add("border-red-500");
    return false;
  }
  if (!/^[0-9]{10}$/.test(value)) {
    error.innerText = "Enter a valid 10-digit phone number";
    input.classList.add("border-red-500");
    return false;
  }
  error.innerText = "";
  input.classList.remove("border-red-500");
  return true;
}

function validatePosition() {
  let input = document.getElementById("apply-position");
  let error = document.getElementById("position-error");
  if (input.value === "") {
    error.innerText = "Please choose the option";
    input.classList.add("border-red-500");
    return false;
  }
  error.innerText = "";
  input.classList.remove("border-red-500");
  return true;
}

function validateResume() {
  let input = document.getElementById("apply-resume");
  let error = document.getElementById("resume-error");

  if (!input.files.length) {
    error.innerText = "Please upload your resume";
    input.classList.add("border-red-500");
    return false;
  }

  let file = input.files[0];
  let allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

  if (!allowed.includes(file.type)) {
    error.innerText = "File must be PDF, DOC or DOCX";
    input.classList.add("border-red-500");
    return false;
  }
  if (file.size > 1024 * 1024) {
    error.innerText = "File must be less than 1MB";
    input.classList.add("border-red-500");
    return false;
  }

  error.innerText = "";
  input.classList.remove("border-red-500");
  return true;
}


document.getElementById("apply-name").addEventListener("input", validateName);
document.getElementById("apply-email").addEventListener("input", validateEmail);
document.getElementById("apply-phone").addEventListener("input", validatePhone);
document.getElementById("apply-position").addEventListener("change", validatePosition);
document.getElementById("apply-resume").addEventListener("change", validateResume);


function handleApplySubmit() {
  let validName = validateName();
  let validEmail = validateEmail();
  let validPhone = validatePhone();
  let validPosition = validatePosition();
  let validResume = validateResume();

  if (!validName || !validEmail || !validPhone || !validPosition || !validResume) {
    formError.classList.remove("hidden");
    formSuccess.classList.add("hidden");
    document.querySelector("input.border-red-500, select.border-red-500")?.focus();
    return false;
  }

  formError.classList.add("hidden");
  formSuccess.classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("apply-form").reset();
    formSuccess.classList.add("hidden");
  }, 2000);

  return false; 
}

let nameError = document.getElementById("name-error");
  let emailError = document.getElementById("email-error");
  let messageError = document.getElementById("message-error");
  let formError = document.getElementById("form-error");
  let input = document.getElementById("contact-name");

  function validateName() {
    let name = input.value.trim();
    if (name.length === 0) {
      input.classList.add("border-red-500");
      nameError.innerHTML = "Please enter your full name.";
      return false;
    }
    if (name.length < 3) {
      input.classList.add("border-red-500");
      nameError.innerHTML = "Name should be at least 3 characters.";
      return false;
    }
    if (!name.match(/^[a-zA-Z ]+$/)) {
      input.classList.add("border-red-500");
      nameError.innerHTML = "Only alphabets are allowed.";
      return false;
    }
    input.classList.remove("border-red-500");
    nameError.innerHTML = "";
    return true;
  }

  function validateEmail() {
    let email = document.getElementById("contact-email");
    let value = email.value.trim();
    if (value.length === 0) {
      email.classList.add("border-red-500");
      emailError.innerHTML = "This field is required.";
      return false;
    }
    if (!value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      email.classList.add("border-red-500");
      emailError.innerHTML = "Invalid email format.";
      return false;
    }
    email.classList.remove("border-red-500");
    emailError.innerHTML = "";
    return true;
  }

  function Message() {
    let message = document.getElementById("contact-message");
    let value = message.value.trim();
    if (value.length === 0) {
      message.classList.add("border-red-500");
      messageError.innerHTML = "Please leave your message.";
      return false;
    }
    if (value.length < 30) {
      message.classList.add("border-red-500");
      messageError.innerHTML = "Message must be at least 30 characters.";
      return false;
    }
    message.classList.remove("border-red-500");
    messageError.innerHTML = "";
    return true;
  }
function handleSubmit() {
  let validName = validateName();
  let validEmail = validateEmail();
  let validMessage = Message();

  if (!validName || !validEmail || !validMessage) {
    formError.classList.remove("hidden");
    document.getElementById("form-success").classList.add("hidden");
    input.focus();
    return false;
  }

  formError.classList.add("hidden");

   let btn = document.getElementById("submit-btn");
  let btnText = document.getElementById("btn-text");
  let btnSpinner = document.getElementById("btn-spinner");

  
  btn.disabled = true;
  btnText.textContent = "Sending...";
  btnSpinner.classList.remove("hidden");


  emailjs.send("service_l5qfc8e", "template_bj5es4k", {
      name: document.getElementById("contact-name").value,
      email: document.getElementById("contact-email").value,
      message: document.getElementById("contact-message").value,
    })
    .then(() => {
      
      formError.classList.add("hidden");

      setTimeout(function () {
        document.getElementById("clear").reset();
        nameError.innerText = "";
        emailError.innerText = "";
        messageError.innerText = "";
        document.getElementById("form-success").classList.add("hidden");
      }, 3000);
      document.getElementById("form-success").classList.remove("hidden");
    })
    .catch((error) => {
      formError.innerText = "❌ Failed to send message. Please try again.";
      formError.classList.remove("hidden");
      console.error("EmailJS Error:", error);
    })
    .finally(() => {
    
      btn.disabled = false;
      btnText.textContent = "Submit";
      btnSpinner.classList.add("hidden");
    });

  return false; 
}

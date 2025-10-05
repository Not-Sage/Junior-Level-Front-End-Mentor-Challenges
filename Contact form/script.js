// Select elements
const firstName = document.querySelector(".firstnameinput");
const lastName = document.querySelector(".lastnameinput");
const email = document.querySelector(".emailinput");
const message = document.querySelector(".messageinput");
const general = document.querySelector(".firstcheckbox");
const support = document.querySelector(".secondcheckbox");
const consent = document.querySelector(".confirmtick");
const submitBtn = document.querySelector(".submit");
const success = document.querySelector(".success");
const nameError = document.querySelector(".nameerror");
const lastError = document.querySelector(".error");
const emailError = document.querySelector(".emailerror");
const queryError = document.querySelector(".queryerror");
const messageError = document.querySelector(".messageerror");
const confirmError = document.querySelector(".confirmerror");
let selectedQuery = "";
let consentGiven = false;
general.addEventListener("click", () => {
  selectedQuery = "general";
  general.classList.add("changebg");
  support.classList.remove("changebg");
  general.querySelector(".check").classList.add("tickit1");
  support.querySelector(".check").classList.remove("tickit1");
});
support.addEventListener("click", () => {
  selectedQuery = "support";
  support.classList.add("changebg");
  general.classList.remove("changebg");
  support.querySelector(".check").classList.add("tickit1");
  general.querySelector(".check").classList.remove("tickit1");
});
consent.addEventListener("click", () => {
  consentGiven = !consentGiven;
  if (consentGiven) {
    consent.classList.add("tickit2");
  } else {
    consent.classList.remove("tickit2");
  }
});
function isValidEmail(emailValue) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
}
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let valid = true;
  if (firstName.value.trim() === "") {
    nameError.textContent = "This field is required";
    firstName.style.border = "1px solid red";
    valid = false;
  } else {
    nameError.textContent = "";
    firstName.style.border = "1px solid hsl(187, 24%, 22%)";
  }
  if (lastName.value.trim() === "") {
    lastError.textContent = "This field is required";
    lastName.style.border = "1px solid red";
    valid = false;
  } else {
    lastError.textContent = "";
    lastName.style.border = "1px solid hsl(187, 24%, 22%)";
  }
  if (email.value.trim() === "") {
    emailError.textContent = "This field is required";
    email.style.border = "1px solid red";
    valid = false;
  } else if (!isValidEmail(email.value.trim())) {
    emailError.textContent = "Please enter a valid email address";
    email.style.border = "1px solid red";
    valid = false;
  } else {
    emailError.textContent = "";
    email.style.border = "1px solid hsl(187, 24%, 22%)";
  }
  if (selectedQuery === "") {
    queryError.textContent = "Please select a query type";
    valid = false;
  } else {
    queryError.textContent = "";
  }
  if (message.value.trim() === "") {
    messageError.textContent = "This field is required";
    message.style.border = "1px solid red";
    valid = false;
  } else {
    messageError.textContent = "";
    message.style.border = "1px solid hsl(187, 24%, 22%)";
  }
  if (!consentGiven) {
    confirmError.textContent =
      "To submit this form, please consent to being contacted";
    valid = false;
  } else {
    confirmError.textContent = "";
  }
  if (valid) {
    success.classList.add("show");
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
    selectedQuery = "";
    consentGiven = false;
    general.classList.remove("changebg");
    support.classList.remove("changebg");
    general.querySelector(".check").classList.remove("tickit1");
    support.querySelector(".check").classList.remove("tickit1");
    consent.classList.remove("tickit2");
    setTimeout(() => {
      success.classList.remove("show");
    }, 4000);
  }
});

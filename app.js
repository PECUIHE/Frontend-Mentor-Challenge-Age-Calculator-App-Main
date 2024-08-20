// OUTPUT ELEMENTS
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit-btn");

// INPUT ELEMENTS
let isValid = false;
const input_year = document.querySelector("#year");
const input_day = document.querySelector("#day");
const input_month = document.querySelector("#month");

// ERROR ELEMENTS
const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");

const span_day = document.querySelector(".span-day");
const span_month = document.querySelector(".span-month");
const span_year = document.querySelector(".span-year");

submit_btn.addEventListener("click", CalculateDate);

input_day.addEventListener("input", (e) => {
  if (+input_day.value > 31) {
    error_day.textContent = "Must be a valid day";
    input_day.style.borderColor = "hsl(0, 100%, 67%)";
    span_day.style.textColor = "hsl(0, 100%, 67%)";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_day.textContent = "";
    input_day.style.borderColor = "";
    span_day.style.textColor = "";
  }
  if (+input_day.value === 0) {
    isValid = false;
    error_day.textContent = "This field is required";
    input_day.style.borderColor = "hsl(0, 100%, 67%)";
    span_day.style.textColor = "hsl(0, 100%, 67%)";
    isValid = false;
    return;
  } else {
    error_day.textContent = "";
    input_day.style.borderColor = "";
    span_day.style.textColor = "";
  }
});

input_month.addEventListener("input", (e) => {
  if (+input_month.value > 12) {
    error_month.textContent = "Must be a valid month";
    input_month.style.borderColor = "hsl(0, 100%, 67%)";
    span_month.style.textColor = "hsl(0, 100%, 67%)";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_month.textContent = "";
    input_month.style.borderColor = "";
    span_month.style.textColor = "";
  }
  if (+input_month.value === 0) {
    isValid = false;
    error_month.textContent = "This field is required";
    input_month.style.borderColor = "hsl(0, 100%, 67%)";
    span_month.style.textColor = "hsl(0, 100%, 67%)";
    isValid = false;
    return;
  } else {
    error_month.textContent = "";
    input_month.style.borderColor = "";
    span_month.style.textColor = "";
  }
});

input_year.addEventListener("input", (e) => {
  if (+input_year.value > 2023) {
    error_year.textContent = "Must be in the past";
    input_year.style.borderColor = "hsl(0, 100%, 67%)";
    span_year.style.textColor = "hsl(0, 100%, 67%)";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_year.textContent = "";
    input_year.style.borderColor = "";
    span_year.style.textColor = "";
  }
  if (+input_year.value === 0) {
    isValid = false;
    error_year.textContent = "This field is required";
    input_year.style.borderColor = "hsl(0, 100%, 67%)";
    span_year.style.textColor = "hsl(0, 100%, 67%)";
    isValid = false;
    return;
  } else {
    error_year.textContent = "";
    input_year.style.borderColor = "";
    span_year.style.textColor = "";
  }
});

function CalculateDate() {
  if (isValid) {
    let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
    console.log(birthday);
    let birthdayObj = new Date(birthday);
    let ageDiffMill = Date.now() - birthdayObj;
    let ageDate = new Date(ageDiffMill);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDay();
    // DISPLAYING EVERYTHING
    output_day.textContent = ageDay;
    output_month.textContent = ageMonth;
    output_year.textContent = ageYears;
  } else {
    alert("Please fill in your date of  birth");
  }
}


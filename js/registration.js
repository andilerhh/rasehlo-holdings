const form = document.getElementById("registrationForm");
const message = document.getElementById("formMessage");
const testingDate = document.querySelector('input[name="testingDate"]');

if (testingDate) {
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split("T")[0];
  testingDate.min = localToday;
}

if (form) {
  form.addEventListener("submit", (event) => {
    message.className = "form-message";
    message.textContent = "";
    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      message.className = "form-message error";
      message.textContent = "Please complete all required fields before continuing.";
    }
  });
}

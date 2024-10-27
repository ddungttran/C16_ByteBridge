function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
// Function to set up focus and blur listeners for each input
function setupValidationListeners() {
    const fields = ["name", "email", "phoneNum", "donateAmt"];
    fields.forEach((fieldId) => {
      const field = document.getElementById(fieldId);
  
      // Show error on blur if the field is empty or invalid
      field.addEventListener("blur", function () {
        console.log(`Blur event triggered for ${fieldId}`); // Debug log
        validateField(fieldId);
      });
  
      // Clear error on focus
      field.addEventListener("focus", function () {
        console.log(`Focus event triggered for ${fieldId}`); // Debug log
        clearError(fieldId);
      });
    });
  }
  
  // Function to validate individual fields
  function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    const value = field.value.trim();
    let valid = true;
  
    switch (fieldId) {
      case "name":
        if (value === "") {
          showError(fieldId, "Name is required.");
          valid = false;
        }
        break;
  
      case "email":
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (value === "" || !emailPattern.test(value)) {
          showError(fieldId, "Please enter a valid email address.");
          valid = false;
        }
        break;
  
      case "phoneNum":
        const phonePattern = /^\+?\d{10,15}$/;
        if (value === "" || !phonePattern.test(value)) {
          showError(fieldId, "Please enter a valid phone number.");
          valid = false;
        }
        break;
  
      case "donateAmt":
        if (value === "") {
          showError(fieldId, "Custom amount is required.");
          valid = false;
        } else if (isNaN(value) || value <= 0) {
          showError(fieldId, "Please enter a valid donation amount.");
          valid = false;
        }
        break;
    }
  
    return valid;
  }
  
  // Function to show error message
  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorSpan = field.nextElementSibling;
    errorSpan.innerText = message;
    errorSpan.style.color = "red"; // Red color for error message
    field.classList.add("error"); // Add error styling if needed
  }
  
  // Function to clear error message
  function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorSpan = field.nextElementSibling;
    errorSpan.innerText = "";
    field.classList.remove("error");
  }
  
  // Form submit listener to prevent submission if invalid
  document.getElementById("form-1").addEventListener("submit", function (event) {
    event.preventDefault();
    const fields = ["name", "email", "phoneNum", "donateAmt"];
    let formIsValid = true;
  
    // Validate all fields
    fields.forEach((fieldId) => {
      if (!validateField(fieldId)) {
        formIsValid = false;
      }
    });
  
    // If the form is valid, submit it or display a success message
    if (formIsValid) {
      alert("Thank you for your donation!");
      // this.submit();
    }
  });
  
  // Initialize focus and blur listeners on load
  setupValidationListeners();
  
  
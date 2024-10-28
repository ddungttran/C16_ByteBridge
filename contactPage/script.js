function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
// Function to validate a field for empty input
function validateField(fieldId, message) {
  const field = document.getElementById(fieldId); // Select field by ID
  const errorSpan = document.createElement("span"); // Create error span
  errorSpan.className = "form-error"; // Add error styling class
  field.parentNode.appendChild(errorSpan); // Place error next to input

  field.addEventListener("blur", function () { // Check input on blur
    const value = field.value.trim();
    if (value === "") {
      errorSpan.innerText = message; // Show error message if empty
      errorSpan.style.color = "red"; // Style error in red
    }
  });

  field.addEventListener("focus", function () { // Clear error on focus
    errorSpan.innerText = "";
  });
}

// Function to validate email format
function validateEmail(fieldId) {
  const field = document.getElementById(fieldId); // Select email field by ID
  const errorSpan = document.createElement("span"); // Create error span
  errorSpan.className = "form-error";
  field.parentNode.appendChild(errorSpan);

  field.addEventListener("blur", function () { // Check email format on blur
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // Email pattern
    if (!emailPattern.test(field.value.trim())) {
      errorSpan.innerText = "Please enter a valid email address";
      errorSpan.style.color = "red";
    }
  });

  field.addEventListener("focus", function () { // Clear error on focus
    errorSpan.innerText = "";
  });
}

// Setup validation for each form field
function setupValidation() {
  validateField("name", "Name is required."); // Name validation
  validateEmail("email"); // Email validation
  validateField("phone", "Phone number is required."); // Phone validation
  validateField("message", "Message cannot be empty."); // Message validation
}

// Form submission handling
document.querySelector(".contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Stop form submission if invalid

  const fields = ["name", "email", "phone", "message"];
  let formIsValid = true;

  // Check each field for validity
  fields.forEach((fieldId) => {
    const field = document.getElementById(fieldId);
    if (field.value.trim() === "") {
      formIsValid = false;
      validateField(fieldId, `${fieldId.charAt(0).toUpperCase() + fieldId.slice(1)} is required.`);
    }
  });

  // If all fields are valid, show confirmation
  if (formIsValid) {
    alert("Thank you for contacting us!");
    // this.submit(); // Uncomment to allow submission
  }
});

// Start validation setup
setupValidation();

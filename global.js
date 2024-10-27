function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
// Function to validate individual fields
function validateField(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorSpan = document.createElement("span");
    errorSpan.className = "form-error"; // Add a class for styling errors
    field.parentNode.appendChild(errorSpan); // Append error span next to input
  
    field.addEventListener("blur", function () {
      const value = field.value.trim();
      if (value === "") {
        errorSpan.innerText = message; // Show error if empty
        errorSpan.style.color = "red"; // Style in red
      }
    });
  
    field.addEventListener("focus", function () {
      errorSpan.innerText = ""; // Clear error on focus
    });
  }
  
  // Function to validate email format
  function validateEmail(fieldId) {
    const field = document.getElementById(fieldId);
    const errorSpan = document.createElement("span");
    errorSpan.className = "form-error";
    field.parentNode.appendChild(errorSpan);
  
    field.addEventListener("blur", function () {
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(field.value.trim())) {
        errorSpan.innerText = "Please enter a valid email address";
        errorSpan.style.color = "red";
      }
    });
  
    field.addEventListener("focus", function () {
      errorSpan.innerText = "";
    });
  }
  
  // Initializing validation on form fields
  function setupValidation() {
    validateField("name", "Name is required.");
    validateEmail("email"); // Validate email format
    validateField("phone", "Phone number is required.");
    validateField("message", "Message cannot be empty.");
  }
  
  // Attach submit listener to form to prevent invalid submission
  document.querySelector(".contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission by default
  
    const fields = ["name", "email", "phone", "message"];
    let formIsValid = true;
  
    fields.forEach((fieldId) => {
      const field = document.getElementById(fieldId);
      if (field.value.trim() === "") {
        formIsValid = false;
        validateField(fieldId, `${fieldId.charAt(0).toUpperCase() + fieldId.slice(1)} is required.`);
      }
    });
  
    // Check if all validations passed
    if (formIsValid) {
      alert("Thank you for contacting us!");
      // this.submit(); // Uncomment if you want to allow form submission
    }
  });
  
  // Initialize validation
  setupValidation();
  



document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMessage = document.getElementById("successMessage");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        emailError.textContent = "Enter valid email";
        isValid = false;
    }

    if (message === "") {
        messageError.textContent = "Message is required";
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = "Form submitted successfully!";
    }

});


// action="https://api.web3forms.com/submit"

const form = document.getElementById("contact-form");
console.log(form)

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const errorMsg = document.querySelector("#error-msg");
   console.log(errorMsg);
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    if (validateForm()) {
        // Form is valid, you can submit it here
        // form.action="https://api.web3forms.com/submit"
        // form.method="POST"
        form.submit();
    } else {
        // if the  Form is not valid, show error message
        // errorMsg.style.display = "block";
        // errorMsg.innerText = "Please fill out all the fields correctly.";
        
    }
    function validateForm() {
        let isValid = true;

        // Reset error message
        errorMsg.innerText = "";
        errorMsg.style.display = "none";

        if (messageInput.value.trim() === "") {
            errorMsg.style.display = "block";
        errorMsg.innerText = "Please fill the message box";
            isValid = false;
        }
        // Validate name
        if (nameInput.value.trim() === "") {
            errorMsg.style.display = "block";
        errorMsg.innerText = "Please enter the name.";
            isValid = false;
        }

        // Validate message

        return isValid;
    }
});


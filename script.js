const form = document.querySelector(".form");
const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPass");
const validateEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function setError(input, message) {
    const formControl =
    input.parentElement; /* parentElement == querySelector('form-control')*/
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmail(email) {
    return validateEmail.test(email);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (userNameValue === "") {
        setError(userName, "Error: Please enter your user name");
    } else {
        setSuccess(userName);
    }

    if (emailValue === "") {
        setError(email, "Error: Please enter your email");
    } else if (!isEmail(emailValue)) {
        {
            setError(email, 'Error: These characters cannot be used');
        }

    } else {
        setSuccess(email);
    }
    if (passwordValue === "") {
        setError(password, "Error: Password must be enter");
    } else {
        setSuccess(password);
    }
    if (passwordValue.length < 6) {
        setError(password, "Error: Password must be at least 6 characters");
    }
    if (confirmPasswordValue === "") {
        setError(confirmPassword, "Error: Confirm password must be enter");
    } else if (passwordValue != confirmPasswordValue) {
        setError(confirmPassword, 'Error: Passwords don\'t match');
    } else {
        setSuccess(confirmPassword);
    }

}
const nameInputEl = document.getElementById("name-signup")
const emailInputEl = document.getElementById("email-signup")
const passwordInputEl = document.getElementById("password-signup")

const signupFormEl = document.getElementById("signup-form");

function uploadNewUser (e) {
    e.preventDefault();

    const newUserObj = {
        name: nameInputEl.value,
        email: emailInputEl.value,
        password: passwordInputEl.value,
        bio: "default bio"
    }
}

signupFormEl.addEventListener("submit", uploadNewUser)
const nameInputEl = document.getElementById("name-signup");
const emailInputEl = document.getElementById("email-signup");
const passwordInputEl = document.getElementById("password-signup");
const signupFormEl = document.getElementById("sign-up");

function uploadNewUser (e) {
    e.preventDefault();

    const newUserObj = {
        name: nameInputEl.value,
        email: emailInputEl.value,
        password: passwordInputEl.value,
        bio: "default bio"
    }

    fetch('/api/newuser', {
        method: "POST",
        body: JSON.stringify(newUserObj),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

signupFormEl.addEventListener("submit", uploadNewUser)
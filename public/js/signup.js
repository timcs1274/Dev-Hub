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
        // bio: "default bio"
    }
console.log('Were here uploadNewUser')
    fetch('/api/newuser', {
        method: "POST",
        body: JSON.stringify(newUserObj),
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(err => (console.log(err)))
}

signupFormEl.addEventListener("click", uploadNewUser)
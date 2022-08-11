const nameInputEl = document.getElementById("name-signup");
const emailInputEl = document.getElementById("email-signup");
const passwordInputEl = document.getElementById("password-signup");
const signupFormEl = document.getElementById("sign-up");

function uploadNewUser(e) {
    e.preventDefault();


    const name = nameInputEl.value
    const email = emailInputEl.value
    const password = passwordInputEl.value
    // bio: "default bio"
    const newUserData = {
        name: name,
        email: email,
        password: password,

    }

    if (name && email && password)
        fetch('/api/newuser', {
            method: "POST",
            body: JSON.stringify(newUserData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(data => {
                if (data.status === 400) {
                    console.log("Error, check signup.js ln. 25")
                } else {
                    location.assign("/login")
                }
            })
            .catch(err => (console.log(err)))
}

signupFormEl.addEventListener("click", uploadNewUser)
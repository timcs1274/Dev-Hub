const emailInputEl = document.getElementById("InputEmail1");
const passwordInputEl = document.getElementById("PasswordInput1");
const loginFormEl = document.getElementById('login-btn');

function loginUser (e) {
    e.preventDefault();

    const userLogin = {
        email: emailInputEl.value,
        password: passwordInputEl.value,
    }
    console.log('Logging in user',userLogin);
    fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify(userLogin),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(data => {
        data.json()
        console.log(data)
        location.assign("/user")
    })
    .catch(err => (console.log(err)))

}

loginFormEl.addEventListener('click', loginUser)














// const loginFormHandler = async (event) => {
//     event.preventDefault();

//     console.log('im here')

//     const email = document.querySelector('#email-login').value.trim();
//     const password = document.querySelector('#password-login').value.trim();

//     if (email && password) {

//         // Send a POST request to the API endpoint
//         const response = await fetch('/api/user/login', {
//             method: 'POST',
//             body: JSON.stringify({ email, password }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             // If successful, redirect the browser to the profile page
//             document.location.replace('/');
//         } else {
//               alert(response.statusText);
//         }
//     }
// };
// const signupFormHandler = async(event) => {
//     event.preventDefault();

//     const name = document.querySelector('#name-signup').value.trim();
//     const email = document.querySelector('#email-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();

//     if (name && email && password) {
//         const response = await fetch('/api/users', {
//             method: 'POST',
//             body: JSON.stringify({ name, email, password }),
//             headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             document.location.replace('/dashboard');
//         } else {
//             alert(response.statusText);
//         }
//     }
// };


// document
//     .querySelector('.login-form')
//     .addEventListener('submit', loginFormHandler);

// document
//     .querySelector('.signup-form')
//     .addEventListener('submit', signupFormHandler);


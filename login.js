const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#InputEmail').value.trim();
    const password = document.querySelector('#PasswordInput').value.trim();
  
    if (email && password) {
      const response = await fetch('', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    // .querySelector('.log-in')
    //  .addEventListener('submit', loginFormHandler);
  
  const loginBtn = document.querySelector('.toggle-login');
  const registerBtn = document.querySelector('.toggle-register');
  const loginForm = document.querySelector('#login');
  const registerForm = document.querySelector('#register');
  let currentForm = 'login';
  loginBtn.addEventListener('click', (e) => {
    console.log(e);
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    
  })
  registerBtn.addEventListener('click', (e) => {
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
    
  })
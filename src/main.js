const btnLogin = document.getElementById('btn-login');
const pagLogin = document.getElementById('login-container');
const pagGeneral = document.getElementById('general');
pagGeneral.classList.add('hide'); 
btnLogin.addEventListener('click', evento => {
  evento.preventDefault();
  const user = document.getElementById('user');
  const password = document.getElementById('password');
  const error = document.getElementById('error');
  if (user.value !== '' && password.value !== '') {
    if (user.value === 'LABORATORIA' && password.value === 'LABORATORIA') {
      pagLogin.classList.add('hide');
      pagGeneral.classList.remove('hide');
    } else {
      user.value = '';
      password.value = '';
      error.innerHTML = 'Usuario o contraseña incorrectas';
    }
  } else {
    if (user.value === '') {
      error.innerHTML = 'Ingrese el usuario';
      user.focus();
    } else {
      error.innerHTML = 'Ingrese la contraseña';
      password.focus();
    }
  }
});

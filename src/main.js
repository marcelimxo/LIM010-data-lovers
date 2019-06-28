const btnLogin = document.getElementById('btn-login');

btnLogin.addEventListener('click', evento => {
  evento.preventDefault();
  const user = document.getElementById('user');
  const password = document.getElementById('password');
  const emptyUser = document.getElementById('empty-user');
  const emptyPsw = document.getElementById('empty-psw');
  const errorLogin = document.getElementById('error-login');
  if (user.value !== '' && password.value !== '') {
    if (user.value === 'LABORATORIA' && password.value === 'LABORATORIA') {
      alert('bien');
    } else {
      emptyUser.innerHTML = '';
      user.value = '';
      password.value = '';
      emptyPsw.innerHTML = '';
      errorLogin.innerHTML = 'Usuario o contraseña incorrectas';
    }
  } else {
    if (user.value === '') {
      emptyPsw.innerHTML = '';
      emptyUser.innerHTML = 'Ingrese el usuario';
      user.focus();
    } else {
      emptyUser.innerHTML = '';
      emptyPsw.innerHTML = 'Ingrese la contraseña';
      password.focus();
    }
  }
});

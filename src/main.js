/* Manejo del DOM */
const btnLogin = document.getElementById("btn-login");

btnLogin.addEventListener("click", evento => {
  evento.preventDefault();
  let user = document.getElementById("user");
  let password = document.getElementById("password");
  const emptyUser = document.getElementById("empty-user");
  const emptyPsw = document.getElementById("empty-psw");
  const errorLogin = document.getElementById("error-login");
  if (user.value !== "" && password.value !== "") {
    if (user.value === "LABORATORIA" && password.value === "LABORATORIA") {
      // paglogin.classList.add('hide');
      // secHeader.classList.add('hide');
      // pagCifrado.classList.remove('hide');
      alert("bien");
    } else {
      errorLogin.innerHTML = "Usuario o contraseña incorrectas";
      emptyUser.innerHTML = "";
      emptyPsw.innerHTML = "";
    }
  } else {
    if (user.value === "") {
      emptyUser.innerHTML = "Ingrese el usuario";
      user.focus();
    } else {
      emptyPsw.innerHTML = "Ingrese la contraseña";
      password.focus();
    }
  }
});

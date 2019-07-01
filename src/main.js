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

const allArrDataLol = Object.values(LOL.data);
const mainContainer = document.getElementById('main-container');
const createTemplateCard = (list) => {
  let templateCard = '';
  list.forEach((dataLol) => {
    const card = `
      <div class='cards'>
        <figure>
        <img class='frontal' src="${ dataLol.img}"/>
          <li class='name'>${ dataLol.name}</li>
          <hr>
        </figure>
      </div>`;
    templateCard += card;
  }),
  mainContainer.innerHTML = templateCard;
};
createTemplateCard(allArrDataLol);
const selectOrder = document.getElementById('order');
selectOrder.addEventListener('change', () => {
  const dataOrdenada = lol.sortChampions(arrDataLolTotal, selectOrder.value);
  createTemplateCard(dataOrdenada);
});
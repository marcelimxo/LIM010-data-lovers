const btnLogin = document.getElementById('btn-login');
const pagLogin = document.getElementById('login-container');
const pagGeneral = document.getElementById('general');
pagGeneral.classList.add('hide'); 
btnLogin.addEventListener('click', evento => {
  evento.preventDefault();
  const user = document.getElementById('user');
  const password = document.getElementById('password');
  const error = document.getElementById('error');
  if (loginValidate(user.value, password.value) === true) {
    pagLogin.classList.add('hide');
    pagGeneral.classList.remove('hide');
  } else {
    
  }
});


const ourData = Object.values(lolJS(LOL.data));
const list = mostrarCampeones(ourData); // array modificado con los dotos que yo quiero
const champions = document.getElementById('all-champions');

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
  champions.innerHTML = templateCard;
};
createTemplateCard(list);
/* const selectOrder = document.getElementById('order');
selectOrder.addEventListener('change', () => {
  const dataOrdenada = lol.sortChampions(arrDataLolTotal, selectOrder.value);
  createTemplateCard(dataOrdenada);
}); */
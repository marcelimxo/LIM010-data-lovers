const btnLogin = document.getElementById('btn-login');
const pagLogin = document.getElementById('login-container');
const pagGeneral = document.getElementById('general');
pagGeneral.classList.add('hide');  
btnLogin.addEventListener('click', evento => {
  evento.preventDefault();
  const user = document.getElementById('user');
  const password = document.getElementById('password');
  const error = document.getElementById('error');
  let funcLoginValidator = loginValidate(user.value, password.value);
  if (funcLoginValidator === 'ok') {
    pagLogin.classList.add('hide');
    pagGeneral.classList.remove('hide');
  } else {
    error.innerHTML = funcLoginValidator;
  }
});


const ourData = Object.values(lolJS(LOL.data));
const champions = document.getElementById('all-champions');

const createTemplateCard = (list) => {
  let templateCard = '';
  /* hacer una especie de if para poder mostrar los que faltan */
  list.forEach((ourData) => {
    const card = `
      <div class="cards">
          <figure class="champ-img"  style="
          background-image: url(${ourData.splash});
          background-size: cover;
          background-position-x: 70%;
          background-repeat: space;
      ">
            <img src="${ourData.img}"/>
          </figure>
          <div class="champ-name flex">
            <p class="sort caudex">${ourData.name}</p>
            <p class="sort caudex">${ourData.title}</p>
          </div>
      </div>`;
    templateCard += card;
  }),
  champions.innerHTML = templateCard;
};
createTemplateCard(ourData);
/* const selectOrder = document.getElementById('order');
selectOrder.addEventListener('change', () => {
  const dataOrdenada = lol.sortChampions(arrDataLolTotal, selectOrder.value);
  createTemplateCard(dataOrdenada);
}); */
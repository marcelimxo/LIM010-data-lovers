const btnLogin = document.getElementById('btn-login');
const pagLogin = document.getElementById('login-container');
const pagGeneral = document.getElementById('general');
/* pagGeneral.classList.add('hide');  */
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
const champions = document.getElementById('all-champions');

const createTemplateCard = (list) => {
  let templateCard = '';
  list.forEach((ourData) => {
    const card = `
      <div class="cards">
        <figure class="champ-img">
        <img src="${ourData.img}"/>
        </figure>
        <p class="sort champ-name">${ourData.name}</p>
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
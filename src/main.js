const btnLogin = document.getElementById('btn-login');
const pagLogin = document.getElementById('login-container');
const pagGeneral = document.getElementById('general');
const body = document.getElementById('body');
const footer = document.getElementById('footer');

// Login
btnLogin.addEventListener('click', event => {
  event.preventDefault();
  const user = document.getElementById('user');
  const password = document.getElementById('password');
  const error = document.getElementById('error');
  let funcLoginValidator = app.userLoginValidate(user.value, password.value);
  if (funcLoginValidator === 'ok') {
    pagLogin.classList.add('hide');
    pagGeneral.classList.remove('hide');
    body.classList.replace('login-bg', 'general-bg');
    footer.classList.remove('hide');
  } else {
    user = '';
    password = '';
    error.innerHTML = funcLoginValidator;
  }
});

// Crear el modal de cada campeon

const createModal = () => {
  const allChampsCards = document.querySelectorAll('.cards');

  allChampsCards.forEach(champ => {
    champ.addEventListener('click', event => {
      const champId = event.currentTarget.id; // currentTarget obtenemos el id del padre
      const [champData] = championsData.filter(
        eachChamp => eachChamp.id === champId // solo devuele los campeones que tenga el mismo id del target
      );
      const { // realizo asignación por destructuring de la data
        name,
        tags,
        img,
        attack,
        magic,
        defense,
        difficulty,
        helpPoints,
        helpPointsPerLevel,
        hpRegen,
        hpRegenPerLevel,
        mana,
        manaPerLevel,
        movespeed,
        attackrange,
        attackdamage
      } = champData;
      document.querySelector('#modal > .champion-name').innerHTML = name;
      document.querySelector('#modal > .tags').innerHTML = tags.join(', ');
      modalBg.style.backgroundImage = `url('${img}')`;
      document.getElementById('attack').innerHTML = `${attack}`;
      document.getElementById('magic').innerHTML = `${magic}`;
      document.getElementById('defense').innerHTML = `${defense}`;
      document.getElementById('difficulty').innerHTML = `${difficulty}`;
      document.getElementById('help-points').innerHTML = `<span>Vida</span>: ${Math.round(helpPoints)} (+${helpPointsPerLevel} por nivel)`;
      document.getElementById('hp-regen').innerHTML = `<span>Regeneración de vida</span>: ${Math.round(hpRegen)} (+${hpRegenPerLevel} por nivel)`;
      document.getElementById('mana').innerHTML = `<span>Mana</span>: ${Math.round(mana)} (+${manaPerLevel} por nivel)`;
      document.getElementById('movespeed').innerHTML = `<span>Velocidad de movimiento</span>: ${Math.round(movespeed)}`;
      document.getElementById('attackrange').innerHTML = `<span>Rango de ataque</span>: ${Math.round(attackrange)}`;
      document.getElementById('attackdamage').innerHTML = `<span>Daño de ataque</span>: ${Math.round(attackdamage)}`;

      showModal();
    });
  });
};

const championsData = app.selectedData(app.dataCurated(LOL.data, championsImg));
const championsContainer = document.getElementById('all-champions');
// Mostrar campeones
const createTemplateCard = list => {
  let templateCard = '';
  list.forEach(ourData => {
    const card = `
      <div class="cards" id="${ourData.id}">
          <figure class="champ-img"  style="
          background-image: url(${ourData.img});
          background-size: cover;
          background-position-x: 70%;
          background-repeat: space;
      ">
            <img class"champ-small-img" src="${ourData.icon}"/>
          </figure>
          <div class="champ-name flex">
            <p class="sort caudex bold">${ourData.name}</p>
            <p class="sort caudex">${ourData.aka}</p>
          </div>
      </div>`;
    templateCard += card;
  });

  championsContainer.innerHTML = templateCard;

  createModal();
};
createTemplateCard(championsData);
// Ordenar en orden alfabetico
const selectSortAz = document.getElementById('cbox-az');
selectSortAz.addEventListener('change', () => {
  const dataOrdenadaAz = app.sortChampionsAz(app.selectTypeChampions(championsData, selectTypeChamp.value), selectSortAz.value);
  createTemplateCard(dataOrdenadaAz); 
});

// Ordenar por attackdamage
const selectAttackdamage = document.getElementById('ad');
selectAttackdamage.addEventListener('change', () => {
  const dataOrdenada = app.sortAttackdamage(app.selectTypeChampions(championsData, selectTypeChamp.value), selectAttackdamage.value);
  createTemplateCard(dataOrdenada);
});

// Mostrar campeones por tipo
const title = document.getElementById('title');
const selectTypeChamp = document.getElementById('select-type');
const average = document.getElementById('average');

selectTypeChamp.addEventListener('change', () => {
  let dataTypeChampions = [];
  dataTypeChampions = app.selectTypeChampions(championsData, selectTypeChamp.value);
  let attackdamageTotal = 0;
  dataTypeChampions.forEach(champ => {
    attackdamageTotal = attackdamageTotal + champ.attackdamage;
  });

  const attackdamageAverage = Math.round(attackdamageTotal / dataTypeChampions.length);
  average.innerHTML = `<p> El promedio de daño de ataque es: ${attackdamageAverage} </p>`;

  createTemplateCard(dataTypeChampions);
  average.classList.remove('hide');
  title.innerHTML = `${selectTypeChamp.value} (${dataTypeChampions.length})`;
});

// Boton de ocultar modal
const closeBtn = document.getElementById('close-btn');
const modal = document.getElementById('modal');
const mask = document.getElementById('mask');
const modalBg = document.getElementById('modal-bg');

closeBtn.addEventListener('click', () => {
  modal.classList.remove('visible');
  mask.classList.remove('visible');
  modalBg.classList.remove('visible');
});
// Mostrar modal
const showModal = () => {
  modal.classList.add('visible');
  mask.classList.add('visible');
  modalBg.classList.add('visible');
};

// Haciendo la busqueda

const searchInput = document.getElementById('search');
searchInput.addEventListener('input', event => {
  const results = championsData.filter(
    champ =>
      champ.name.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0
  );
  createTemplateCard(results);
});

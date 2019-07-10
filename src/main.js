const btnLogin = document.getElementById('btn-login');
const pagLogin = document.getElementById('login-container');
const pagGeneral = document.getElementById('general');
const body = document.getElementById('body');
/* pagGeneral.classList.add('hide'); */
btnLogin.addEventListener('click', evento => {
  evento.preventDefault();
  const user = document.getElementById('user');
  const password = document.getElementById('password');
  const error = document.getElementById('error');
  let funcLoginValidator = loginValidate(user.value, password.value);
  if (funcLoginValidator === 'ok') {
    pagLogin.classList.add('hide');
    pagGeneral.classList.remove('hide');
    body.classList.replace('login-bg', 'general-bg');
  } else {
    error.innerHTML = funcLoginValidator;
  }
});

// Abrir el modal de cada campeon

const createModal = () => {
  const allChampsCards = document.querySelectorAll('.cards');

  allChampsCards.forEach(champ => {
    champ.addEventListener('click', event => {
      const champId = event.currentTarget.id;
      const [champData] = dataCampeones.filter(
        eachChamp => eachChamp.id === champId
      );
      const {
        nombre,
        tags,
        img,
        ataque,
        magia,
        defensa,
        dificultad,
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
      const modalName = document.querySelector('#modal > .champion-name');
      modalName.innerHTML = nombre;
      const modalTags = document.querySelector('#modal > .tags');
      modalTags.innerHTML = tags.join(', ');
      modalBg.style.backgroundImage = `url('${img}')`;
      document.getElementById('ataque').innerHTML = `${ataque}`;
      document.getElementById('magia').innerHTML = `${magia}`;
      document.getElementById('defensa').innerHTML = `${defensa}`;
      document.getElementById('dificultad').innerHTML = `${dificultad}`;
      document.getElementById('helpPoints').innerHTML = `Help points:${Math.round(helpPoints)} (+${helpPointsPerLevel} por nivel)`;
      document.getElementById('hpRegen').innerHTML = `Help points regen:${Math.round(hpRegen)} (+${hpRegenPerLevel} por nivel)`;
      // faltan colocar los otros

      showModal();
    });
  });
};

const dataCampeones = selectedData(dataCurated(LOL.data, obj));
const champions = document.getElementById('all-champions');
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
            <img class"champ-small-img" src="${ourData.miniatura}"/>
          </figure>
          <div class="champ-name flex">
            <p class="sort caudex bold">${ourData.nombre}</p>
            <p class="sort caudex">${ourData.aka}</p>
          </div>
      </div>`;
    templateCard += card;
  });

  champions.innerHTML = templateCard;

  createModal();
};
createTemplateCard(dataCampeones);
// 4ta historia de usuario ordenar en orden alfabetico
const selectSortAz = document.getElementById('cbox-az');
selectSortAz.addEventListener('change', () => {
  const dataOrdenadaAz = window.sortChampionsAz(window.selectTypeChampions(dataCampeones, selectTypeChamp.value), selectSortAz.value);
  createTemplateCard(dataOrdenadaAz); //
});

// 5ta historia de usuario attackdamage
const selectAttackdamage = document.getElementById('ad');
debugger;
selectAttackdamage.addEventListener('change', () => {
  const dataOrdenada = window.sortAttackdamage(window.selectTypeChampions(dataCampeones, selectTypeChamp.value), selectAttackdamage.value);
  createTemplateCard(dataOrdenada);
});

// Mostrar campeones por tipo
const title = document.getElementById('title');
const selectTypeChamp = document.getElementById('select-type');
const average = document.getElementById('average');

selectTypeChamp.addEventListener('change', () => {
  let dataTypeChampions = [];
  dataTypeChampions = window.selectTypeChampions(dataCampeones, selectTypeChamp.value);
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

const showModal = () => {
  modal.classList.add('visible');
  mask.classList.add('visible');
  modalBg.classList.add('visible');
};

// Haciendo la busqueda

const searchInput = document.getElementById('search');
searchInput.addEventListener('input', event => {
  const results = dataCampeones.filter(
    champ =>
      champ.nombre.toLowerCase().indexOf(event.target.value.toLowerCase()) >= 0
  );
  createTemplateCard(results);
});

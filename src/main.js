const btnLogin = document.getElementById('btn-login');
const pagLogin = document.getElementById('login-container');
const pagGeneral = document.getElementById('general');
pagGeneral.classList.add('hide');
btnLogin.addEventListener('click', evento => {
  evento.preventDefault();
  const user = document.getElementById('user');
  const password = document.getElementById('password');
  const emptyUser = document.getElementById('empty-user');
  const emptyPsw = document.getElementById('empty-psw');
  const errorLogin = document.getElementById('error-login');
  if (user.value !== '' && password.value !== '') {
    if (user.value === 'LABORATORIA' && password.value === 'LABORATORIA') {
      pagLogin.classList.add('hide');
      pagGeneral.classList.remove('hide');
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

const allArrDataLol = Object.values(LOL.data);

//function containerOfAllFunctions(arrKeys) {
  // Recorre la data y plasma en el html templates (cards y ventanas modales)

  // const containerList = document.getElementById('container-list');
  // const createTemplateCard = (arrKeys) => {
  //   let newArrKeys = [];
  //   let templates = [];
  //   containerList.value = '';

  //   for (let i = 0; i < arrKeys.length; i++) {
  //     newArrKeys.push(Object.assign({}, arrKeys[i]));
  //   }

  //   for (let i = 0; i < newArrKeys.length; i++) {
  //     templates.push(`
  //     <div class ="card-link">
  //         <a class="blog-card" id="${ newArrKeys[i].id }" href="#openmodal${i}">
  //         <div>
  //           <img class="post-image " src="${ newArrKeys[i].img}" />
  //           <div class="article-details" >
  //             <h1 class="post-name" id="${ newArrKeys[i].id }">${ newArrKeys[i].name} </h1>
  //             <h3 class="post-title" id="${ newArrKeys[i].id }"> ${ newArrKeys[i].title}</h3>
  //             <h3 class="post-title" id="${ newArrKeys[i].id }"> <img class="difficulty-img" src="img/difficulty.jpg"/> ${ newArrKeys[i].info.difficulty}</h3>
  //           </div>                   
  //         </div>
  //         </a>
  //     </div>
            
  //     );
  //   }
  //   containerList.innerHTML = templates.join('');
  // }};

const mainContainer = document.getElementById('main-container');
  const createTemplateCard = (list) => {
    let templateCard = '';
    list.forEach((dataLol) => {
      const card = `
      <div class='cards'>
        <figure>
        <img class='frontal' src="${ dataLol.splash}"/>
          <li class='name'>${ dataLol.name}</li>
          <hr>
           <div class='trasera'>
             <li class='title'> ${ dataLol.blurb}</li>
           </div>
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
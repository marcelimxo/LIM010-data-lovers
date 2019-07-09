/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/* const lolJSON = () => {
  fetch('http://127.0.0.1:5500/src/data/lol/lol.json')
    .then(res => res.json())
    .then(data => console.log(data));
}; */

// Primera Historia de Usuario-- Acceso al sistema

loginValidate = (user, password) => {
  let msg = '';
  if (user !== '' && password !== '') {
    if (user === 'LABORATORIA' && password === 'LABORATORIA') {
      msg = 'ok';
    } else {
      user = '';
      password = '';
      msg = 'Usuario o contraseña incorrectas';
    }
  } else {
    if (user === '') {
      msg = 'Ingrese el usuario';
    } else {
      msg = 'Ingrese la contraseña';
    }
  }
  return msg;
};

// Segunda Historia de Usuario-- Mostrar los campeones

const obj = {
  Blitzcrank: 'https://i.blogs.es/e5a747/blitz/1366_2000.jpg',
  Jinx: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_13.jpg',
  LeeSin: 'img/splash/LeeSin_Splash_11.jpg',
  Lucian: 'https://i.blogs.es/cc1ded/lucian_hiredgun_splash/1366_2000.jpg',
  Orianna: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_8.jpg',
  Shaco: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_6.jpg',
  Singed: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Singed_5.jpg',
  TahmKench: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TahmKench_3.jpg',
  Thresh: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_6.jpg',
};

const dataCurated = (data, personajes) => {
  const arrJugadores = Object.values(data);
  for (let i = 0; i < arrJugadores.length; i++) {
    if (personajes.hasOwnProperty(arrJugadores[i].id)) {
      arrJugadores[i].splash = obj[arrJugadores[i].id];
    }
  } return arrJugadores;
};

const selectedData = (data) => {
  const newArrayDataCampeones = [];
  for (let i = 0; i < data.length; i++) {
    newArrayDataCampeones.push(
      {
        nombre: data[i].name,
        aka: data[i].title,
        id: data[i].id,
        miniatura: data[i].img,
        img: data[i].splash,
        ataque: data[i].info.attack,
        magia: data[i].info.magic,
        defensa: data[i].info.defense,
        dificultad: data[i].info.difficulty,
        helpPoints: data[i].stats.hp,
        helpPointsPerLevel: data[i].stats.hpperlevel,
        hpRegen: data[i].stats.hpregen,
        hpRegenPerLevel: data[i].stats.hpregenperlevel,
        mana: data[i].stats.mp,
        manaPerLevel: data[i].stats.mpperlevel,
        movespeed: data[i].stats.movespeed,
        attackrange: data[i].stats.attackrange,
        attackdamage: data[i].stats.attackdamage,
        tags: data[i].tags
      });
  };
  return newArrayDataCampeones;
};


/* ordenamiento de a-z */
const sortChampionsAz = (data, clickOrder) => {
  const arrSortName = data.sort((ab, bc) => {
    /* a es menor que b según criterio de ordenamiento */
    if (ab.nombre > bc.nombre) {
      return 1;
    } if (ab.nombre < bc.nombre) {
      return -1;
    }
    return 0;
  });
  if (clickOrder === '0') {
    return arrSortName;
  }
  if (clickOrder === '1') {
    return arrSortName.reverse();
  }
  return 0;
};

/*  ordenamiento attackdamage ascendente y descendente  */
const sortAttackdamage = (data, clickOrder) => {
  const arrSortAttackdamage = data.sort((ab, bc) => {
    /* a es menor que b según criterio de ordenamiento */
    if (ab.attackdamage > bc.attackdamage) {
      return 1;
    } if (ab.attackdamage < bc.attackdamage) {
      return -1;
    }
    return 0;
  });
  if (clickOrder === '0') {
    return arrSortAttackdamage;
  }
  if (clickOrder === '1') {
    return arrSortAttackdamage.reverse();
  }
  return 0;
};

/*  Select for type champions  */
const selectTypeChampions = (data, type) => {
  const filterTypeChamp = data.filter((obj) => {
    return (obj.tags[0] === type || obj.tags[1] === type); // 0 y 1 para repetir campeones
  });
  return filterTypeChamp;
};
window.dataCurated = dataCurated;
window.selectedData = selectedData;
window.sortChampionsAz = sortChampionsAz;
window.sortAttackdamage = sortAttackdamage;
window.selectTypeChampions = selectTypeChampions;

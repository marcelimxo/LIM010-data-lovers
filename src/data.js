/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/* const lolJSON = () => {
  fetch('http://127.0.0.1:5500/src/data/lol/lol.json')
    .then(res => res.json())
    .then(data => console.log(data));
}; */

// Primera Historia de Usuario-- Acceso al sistema
const loginValidate = (user, password) => {
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
const lolJS = (data) => {
  /* Inicilizamos el array vacio */
  let arrChamps = [];
  /*  Recorremos todos los campeones de la propiedad "data" en el objeto LOL */
  for (const key in data) {
  /* Sacamos las propiedades existentes en data y le asignamos el valor correspondiente al nombre de esa propiedad */
    const {name, id, title, img, splash, info: {attack, defense, magic, difficulty}, stats: {hp}, stats:{attackdamage}} = LOL.data[key];
    /* Agregamos esas propiedades a un objeto nuevo y este lo agregamos al array de objetos */
    arrChamps.push({name,
      id,
      title,
      img,
      splash,
      attack,
      defense, 
      magic, 
      difficulty,
      hp,
      attackdamage
    });
  }
  return arrChamps;
};

//ordenamiento de a-z
const sortChampionsAz = (data, clickOrder) => {
  const arrSortName = data.sort((ab, bc) => {
    // a es menor que b según criterio de ordenamiento
    if (ab.name > bc.name) {
      return 1;
    } if (ab.name < bc.name) {
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

//ordenamiento attackdamage ascendente y descendente
const sortAttackdamage = (data, clickOrder) => {
  const arrSortAttackdamage = data.sort((ab, bc) => {
    // a es menor que b según criterio de ordenamiento
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

console.log(lolJS(LOL.data)); 
console.log(LOL.data);

window.lolJS = lolJS;
window.sortChampionsAz = sortChampionsAz;
window.sortAttackdamage = sortAttackdamage;
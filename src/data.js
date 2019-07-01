/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/* const lolJSON = () => {
  fetch('http://127.0.0.1:5500/src/data/lol/lol.json')
    .then(res => res.json())
    .then(data => console.log(data));
}; */

const loginValidate = (user, password) => {
  if (user !== '' && password !== '') {
    const msg = '';
    if (user === 'LABORATORIA' && password === 'LABORATORIA') {
      return true;
    } else {
      switch (user, password) {
      case user === '':
        msg = 'Ingrese el usuario';
        user.focus();
        break;
      case password === '':
        msg = 'Ingrese la contraseña';
        password.focus();
        break;
      
      default:
        msg = 'Usuario o contraseña incorrectas';
        break;
      } return msg;
    }
  }
    
    
  /* {
      user = '';
      password = '';
      msg = 'Usuario o contraseña incorrectas';
      return false;
    }
  } else {
    if (user === '') {
      msg = 'Ingrese el usuario';
      user.focus();
    } else {
      msg = 'Ingrese la contraseña';
      password.focus();
    }
  } */
};


const mostrarCampeones = (data) => {
  /* escribo las instrucciones*/
  return [{}, {}, {}];
};


const lolJS = (data) => {
  /* Inicilizamos el array vacio */
  let arrChamps = [];
  /*  Recorremos todos los campeones de la propiedad "data" en el objeto LOL */
  for (const key in data) {
    /* Sacamos las propiedades existentes en data y le asignamos el valor correspondiente al nombre de esa propiedad */
    const {name, id, title, img, info: {attack, defense, magic, difficulty}, stats: {hp}} = LOL.data[key];
    /* Agregamos esas propiedades a un objeto nuevo y este lo agregamos al array de objetos */
    arrChamps.push({name,
      id,
      title,
      img,
      attack,
      defense, 
      magic, 
      difficulty,
      hp
    });
  }
  return arrChamps;
};

/* console.log(lolJS(LOL.data)); */

window.lolJS = lolJS;
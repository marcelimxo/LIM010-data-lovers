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


const obj = {
  Blitzcrank: 'https://i.blogs.es/e5a747/blitz/1366_2000.jpg',
  Jinx: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_13.jpg',
  LeeSin: 'https://thegamersports.mundodeportivo.com/wp-content/uploads/2017/03/LeeSin_Splash_11.jpg',
  Lucian: 'https://i.blogs.es/cc1ded/lucian_hiredgun_splash/1366_2000.jpg',
  Orianna: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_8.jpg',
  Shaco: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_6.jpg',
  Singed: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Singed_5.jpg',
  TahmKench: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TahmKench_3.jpg',
  Thresh: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_6.jpg',
};

const curarData = (data, personajes) => {
  const arrJugadores = Object.values(data);
  for (let i = 0; i < arrJugadores.length; i++) {
    if (personajes.hasOwnProperty(arrJugadores[i].id)) {
      arrJugadores[i].splash = obj[arrJugadores[i].id];
      // console.log(arrJugadores[i]);
    }
  } return arrJugadores;
};

// console.log(curarData(LOL.data, obj)); 

  
// Segunda Historia de Usuario-- Mostrar los campeones
const lolJS = (data) => {
  // Inicilizamos el array vacio 
  let arrChamps = [];
  //  Recorremos todos los campeones de la propiedad "data" en el objeto LOL 
  for (const key in data) {
  // Sacamos las propiedades existentes en data y le asignamos el valor correspondiente al nombre de esa propiedad 
    const {name, id, title, img, splash, info: {attack, defense, magic, difficulty}, stats: {hp}} = LOL.data[key];
    // Agregamos esas propiedades a un objeto nuevo y este lo agregamos al array de objetos 
    arrChamps.push({name,
      id,
      title,
      img,
      splash,
      attack,
      defense, 
      magic, 
      difficulty,
      hp
    });
  }
  return arrChamps;
};


const lolJS2 = (data) => {
  const dataArr = [];
  for (let i = 0; i < data.length; i++);
  dataArr.push({ 
    nombre: data[i].name,
    aka: data[i].title,
    miniatura: data[i].img,
    img: data[i].splash,
    ataque: data[i].info.attack,
    magia: data[i].info.magic,
    'help points': data[i].stats.hp
  });
  return dataArr; 
};


console.log(lolJS(curarData(LOL.data, obj)));  

window.lolJS = lolJS;
window.curarData = curarData;
/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/* const lolJSON = () => {
  fetch('http://127.0.0.1:5500/src/data/lol/lol.json')
    .then(res => res.json())
    .then(data => console.log(data));
}; */

const lolJS = () => {
  /* Inicilizamos el array vacio */
  let arrChamps = [];
  /*  Recorremos todos los campeones de la propiedad "data" en el objeto LOL */
  for (const key in LOL.data) {
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

console.log(lolJS());

window.lolJS = lolJS;

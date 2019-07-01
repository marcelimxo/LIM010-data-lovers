/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

// const example = () => {
//   return 'example';
// };
const functionAllData = (data, choices) => {
  const arrKeysFilter = data.filter(champion => {
    const arrTrueFalse = [];
    choices.forEach(choice => {
      if (champion.tags.includes(choice)) {
        arrTrueFalse.push(true);
      } else {
        arrTrueFalse.push(false);
      }
    });

    if (arrTrueFalse.includes(false)) {
      return false;
    } else {
      return champion;
    }
  });
  return arrKeysFilter;
};
window.lol = {championsTopTeam};

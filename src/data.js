const app = {
  // Primera Historia de Usuario-- Acceso al sistema
  userLoginValidate: (user, password) => {
    let msg = '';
    if (user !== '' && password !== '') {
      if (user === 'LABORATORIA' && password === 'LABORATORIA') {
        msg = 'ok';
      } else {
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
  },

  // Segunda Historia de Usuario-- Mostrar los campeones
  replaceChampsImg: (data, character) => {
    const arrDataCurated = Object.values(data); // Devuelve un array que contiene las propiedades del objeto
    for (let i = 0; i < arrDataCurated.length; i++) {
      if (character.hasOwnProperty(arrDataCurated[i].id)) { // Devuelve un booleano indicando si el objeto tiene la propiedad especificada
        arrDataCurated[i].splash = championsImg[arrDataCurated[i].id]; // si el valor devuelto es true, el splash cambia a el valor indicado en obj
      }
    } return arrDataCurated;
  },

  selectedData: (data) => {
    const arrSelectedData = [];
    for (let i = 0; i < data.length; i++) {
      arrSelectedData.push(
        {
          name: data[i].name,
          aka: data[i].title,
          id: data[i].id,
          icon: data[i].img,
          img: data[i].splash,
          attack: data[i].info.attack,
          magic: data[i].info.magic,
          defense: data[i].info.defense,
          difficulty: data[i].info.difficulty,
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
    return arrSelectedData;
  },

  //  Orden Alfabetico
  sortChampionsAz: (data, clickOrder) => {
    const arrSortName = data.sort((ab, bc) => {
      /* a es menor que b según criterio de ordenamiento */
      if (ab.name > bc.name) {
        return 1;
      } if (ab.name < bc.name) {
        return -1;
      }
    });
    if (clickOrder === '0') {
      return arrSortName;
    }
    if (clickOrder === '1') {
      return arrSortName.reverse();
    }
  },

  // Orden de Daño de attack Ascendente y Descendente

  sortAttackdamage: (data, clickOrder) => {
    const arrSortAttackdamage = data.sort((ab, bc) => {
      if (ab.attackdamage > bc.attackdamage) {
        return 1;
      } if (ab.attackdamage < bc.attackdamage) {
        return -1;
      }
    });
    if (clickOrder === '1') {
      return arrSortAttackdamage;
    }
    if (clickOrder === '0') {
      return arrSortAttackdamage.reverse();
    }
  },

  // Filtro por tipo
  selectTypeChampions: (data, type) => {
    const filterTypeChamp = data.filter((obj) => {
      if (type !== 'Total' && type !== 'TIPO') {
        return (obj.tags[0] === type || obj.tags[1] === type); // 0 y 1 para repetir campeones
      } else {
        return data;
      }
    });
    return filterTypeChamp;
  },
};
window.app = app;
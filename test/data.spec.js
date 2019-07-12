global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const entrada1 = {
  LeeSin: {
    version: '6.24.1',
    id: 'LeeSin',
    key: '64',
    name: 'Lee Sin',
    title: 'the Blind Monk',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/LeeSin.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/_0.jpg',
    blurb:
      'As a young teen, Lee Sin was intent on becoming a summoner. His will and dedication were unmatched by any of his peers, and his skill drew the attention of Reginald Ashram, the League\'s High Councilor at the time. While studying at the Arcanum Majoris,...',
    info: {
      attack: 8,
      defense: 5,
      magic: 3,
      difficulty: 6
    },
    image: {
      full: 'LeeSin.png',
      sprite: 'champion1.png',
      group: 'champion',
      x: 288,
      y: 96,
      w: 48,
      h: 48
    },
    tags: ['Fighter', 'Assassin'],
    partype: 'Energy',
    stats: {
      hp: 570.8,
      hpperlevel: 85,
      mp: 200,
      mpperlevel: 0,
      movespeed: 350,
      armor: 24.216,
      armorperlevel: 3.7,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 7.425,
      hpregenperlevel: 0.7,
      mpregen: 50,
      mpregenperlevel: 0,
      crit: 0,
      critperlevel: 0,
      attackdamage: 61.176,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.04,
      attackspeedperlevel: 3
    }
  }
};

describe('loginValidate', () => {
  it('debería ser una función', () => {
    expect(typeof loginValidate).toBe('function');
  });
  
  it('debería retornar "ok" si la contraseña y el usuario son iguales a "LABORATORIA"', ()=> {
    expect(loginValidate('LABORATORIA', 'LABORATORIA')).toBe('ok');
  });
  it('debería retornar "Usuario o contraseña incorrectas" si la contraseña o el usuario son diferentes a "LABORATORIA"', ()=> {
    expect(loginValidate('USUARIO', 'LABORATORIA')).toBe('Usuario o contraseña incorrectas');
  });
  it('debería retornar "Ingrese el usuario" si el usuario se encuentra vacio', ()=> {
    expect(loginValidate('', 'LABORATORIA')).toBe('Ingrese el usuario');
  });
  it('debería retornar "Ingrese la contraseña" si la contraseña se encuentra vacio', ()=> {
    expect(loginValidate('LABORATORIA', '')).toBe('Ingrese la contraseña');
  });
});

describe('dataCurated', () => {
  it('debería ser una función', () => {
    expect(typeof dataCurated).toBe('function');
  });

  it('debería devolver un nuevo objeto', () => {
    const entrada2 = {
      LeeSin: 'img/splash/LeeSin_Splash_11.jpg'
    };
    expect(typeof dataCurated(entrada1, entrada2)).toBe('object');
  });
});

describe('selectedData', () => {
  it('debería ser una función', () => {
    expect(typeof selectedData).toBe('function');
  });
  it('debería ser una función', () => {
    expect(typeof selectedData(entrada1)).toBe('object');
  });
});

describe('sortChampionsAz', () => {
  it('debería ser una función', () => {
    expect(typeof sortChampionsAz).toBe('function');
  });
});

describe('sortAttackdamage', () => {
  it('debería ser una función', () => {
    expect(typeof sortAttackdamage).toBe('function');
  });
});

describe('selectTypeChampions', () => {
  it('debería ser una función', () => {
    expect(typeof selectTypeChampions).toBe('function');
  });
});
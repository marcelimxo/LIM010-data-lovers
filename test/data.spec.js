/* eslint-disable id-length */
global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');
require('../src/data/lol/newChampsImg.js');
const inputLOL = {
  Blitzcrank: {
    version: '6.24.1',
    id: 'Blitzcrank',
    key: '53',
    name: 'Blitzcrank',
    title: 'the Great Steam Golem',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Blitzcrank.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcranck_0.jpg',
    blurb:
      'Zaun is a place where both magic and science have gone awry, and the unchecked nature of experimentation has taken its toll. However, Zaun\'s lenient restrictions allow their researchers and inventors the leeway to push the bounds of science at an ...',
    info: {
      attack: 4,
      defense: 8,
      magic: 5,
      difficulty: 4
    },
    image: {
      full: 'Blitzcrank.png',
      sprite: 'champion0.png',
      group: 'champion',
      x: 48,
      y: 48,
      w: 48,
      h: 48
    },
    tags: ['Tank', 'Fighter'],
    partype: 'MP',
    stats: {
      hp: 582.6,
      hpperlevel: 95,
      mp: 267.2,
      mpperlevel: 40,
      movespeed: 325,
      armor: 24.38,
      armorperlevel: 4,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 8.51,
      hpregenperlevel: 0.75,
      mpregen: 8.5,
      mpregenperlevel: 0.8,
      crit: 0,
      critperlevel: 0,
      attackdamage: 61.54,
      attackdamageperlevel: 3.5,
      attackspeedoffset: 0,
      attackspeedperlevel: 1.13
    }
  },
  Jinx: {
    version: '6.24.1',
    id: 'Jinx',
    key: '222',
    name: 'Jinx',
    title: 'the Loose Cannon',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Jinx.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/jinx_0.jpg',
    blurb:
      'Jinx lives to wreak havoc without a thought for the consequences, leaving a trail of mayhem and panic in her wake. A manic and impulsive criminal, she despises nothing more than boredom, and gleefully brings her own volatile brand of pandemonium to ...',
    info: {
      attack: 9,
      defense: 2,
      magic: 4,
      difficulty: 6
    },
    image: {
      full: 'Jinx.png',
      sprite: 'champion1.png',
      group: 'champion',
      x: 192,
      y: 48,
      w: 48,
      h: 48
    },
    tags: ['Marksman'],
    partype: 'MP',
    stats: {
      hp: 517.76,
      hpperlevel: 82,
      mp: 245.6,
      mpperlevel: 45,
      movespeed: 325,
      armor: 22.88,
      armorperlevel: 3.5,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 525,
      hpregen: 5.84,
      hpregenperlevel: 0.5,
      mpregen: 6.68,
      mpregenperlevel: 1,
      crit: 0,
      critperlevel: 0,
      attackdamage: 58.46,
      attackdamageperlevel: 2.41,
      attackspeedoffset: 0,
      attackspeedperlevel: 1
    }
  },
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
  },
  Lucian: {
    version: '6.24.1',
    id: 'Lucian',
    key: '236',
    name: 'Lucian',
    title: 'the Purifier',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Lucian.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucia_0.jpg',
    blurb:
      'Lucian wields relic weapons imbued with ancient power and stands a stalwart guardian against the undead. His cold conviction never wavers, even in the face of the maddening horrors he destroys beneath his hail of purifying fire. Lucian walks alone on ...',
    info: {
      attack: 8,
      defense: 5,
      magic: 3,
      difficulty: 6
    },
    image: {
      full: 'Lucian.png',
      sprite: 'champion1.png',
      group: 'champion',
      x: 432,
      y: 96,
      w: 48,
      h: 48
    },
    tags: ['Marksman'],
    partype: 'MP',
    stats: {
      hp: 554.4,
      hpperlevel: 80,
      mp: 348.88,
      mpperlevel: 38,
      movespeed: 335,
      armor: 24.04,
      armorperlevel: 3,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 500,
      hpregen: 6.19,
      hpregenperlevel: 0.65,
      mpregen: 8.175,
      mpregenperlevel: 0.7,
      crit: 0,
      critperlevel: 0,
      attackdamage: 57.46,
      attackdamageperlevel: 2.41,
      attackspeedoffset: -0.02,
      attackspeedperlevel: 3.3
    }
  },
  Amumu: {
    version: '6.24.1',
    id: 'Amumu',
    key: '32',
    name: 'Amumu',
    title: 'the Sad Mummy',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Amumu.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg',
    blurb:
      '\'\'Solitude can be lonelier than death.\'\'<br><br>A lonely and melancholy soul from ancient Shurima, Amumu roams the world in search of a friend. Cursed by an ancient spell, he is doomed to remain alone forever, as his touch is death and his affection ...',
    info: {
      attack: 2,
      defense: 6,
      magic: 8,
      difficulty: 3
    },
    image: {
      full: 'Amumu.png',
      sprite: 'champion0.png',
      group: 'champion',
      xx: 192,
      yy: 0,
      ww: 48,
      hh: 48
    },
    tags: ['Tank', 'Mage'],
    partype: 'MP',
    stats: {
      hp: 613.12,
      hpperlevel: 84,
      mp: 287.2,
      mpperlevel: 40,
      movespeed: 335,
      armor: 23.544,
      armorperlevel: 3.8,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 8.875,
      hpregenperlevel: 0.85,
      mpregen: 7.38,
      mpregenperlevel: 0.525,
      crit: 0,
      critperlevel: 0,
      attackdamage: 53.384,
      attackdamageperlevel: 3.8,
      attackspeedoffset: -0.02,
      attackspeedperlevel: 2.18
    }
  }
};
const inputChampsImg = {
  Blitzcrank: 'https://i.blogs.es/e5a747/blitz/1366_2000.jpg',
  Jinx: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_13.jpg',
  LeeSin: 'img/splash/LeeSin_Splash_11.jpg',
  Lucian: 'https://i.blogs.es/cc1ded/lucian_hiredgun_splash/1366_2000.jpg',
};
const replaceChampsImgData = {
  Blitzcrank: {
    version: '6.24.1',
    id: 'Blitzcrank',
    key: '53',
    name: 'Blitzcrank',
    title: 'the Great Steam Golem',
    img: 'https://i.blogs.es/e5a747/blitz/1366_2000.jpg',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcranck_0.jpg',
    blurb: 'Zaun is a place where both magic and science have gone awry, and the unchecked nature of experimentation has taken its toll. However, Zaun\'s lenient restrictions allow their researchers and inventors the leeway to push the bounds of science at an ...',
    info: {
      attack: 4,
      defense: 8,
      magic: 5,
      difficulty: 4
    },
    image: {
      full: 'Blitzcrank.png',
      sprite: 'champion0.png',
      group: 'champion',
      x: 48,
      y: 48,
      w: 48,
      h: 48
    },
    tags: ['Tank', 'Fighter'],
    partype: 'MP',
    stats: {
      hp: 582.6,
      hpperlevel: 95,
      mp: 267.2,
      mpperlevel: 40,
      movespeed: 325,
      armor: 24.38,
      armorperlevel: 4,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 8.51,
      hpregenperlevel: 0.75,
      mpregen: 8.5,
      mpregenperlevel: 0.8,
      crit: 0,
      critperlevel: 0,
      attackdamage: 61.54,
      attackdamageperlevel: 3.5,
      attackspeedoffset: 0,
      attackspeedperlevel: 1.13
    }
  },
  Jinx: {
    version: '6.24.1',
    id: 'Jinx',
    key: '222',
    name: 'Jinx',
    title: 'the Loose Cannon',
    img: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_13.jpg',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/jinx_0.jpg',
    blurb: 'Jinx lives to wreak havoc without a thought for the consequences, leaving a trail of mayhem and panic in her wake. A manic and impulsive criminal, she despises nothing more than boredom, and gleefully brings her own volatile brand of pandemonium to ...',
    info: {
      attack: 9,
      defense: 2,
      magic: 4,
      difficulty: 6
    },
    image: {
      full: 'Jinx.png',
      sprite: 'champion1.png',
      group: 'champion',
      x: 192,
      y: 48,
      w: 48,
      h: 48
    },
    tags: ['Marksman'],
    partype: 'MP',
    stats: {
      hp: 517.76,
      hpperlevel: 82,
      mp: 245.6,
      mpperlevel: 45,
      movespeed: 325,
      armor: 22.88,
      armorperlevel: 3.5,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 525,
      hpregen: 5.84,
      hpregenperlevel: 0.5,
      mpregen: 6.68,
      mpregenperlevel: 1,
      crit: 0,
      critperlevel: 0,
      attackdamage: 58.46,
      attackdamageperlevel: 2.41,
      attackspeedoffset: 0,
      attackspeedperlevel: 1
    }
  },
  LeeSin: {
    version: '6.24.1',
    id: 'LeeSin',
    key: '64',
    name: 'Lee Sin',
    title: 'the Blind Monk',
    img: 'img/splash/LeeSin_Splash_11.jpg',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/_0.jpg',
    blurb: 'As a young teen, Lee Sin was intent on becoming a summoner. His will and dedication were unmatched by any of his peers, and his skill drew the attention of Reginald Ashram, the League\'s High Councilor at the time. While studying at the Arcanum Majoris,...',
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
  },
  Lucian: {
    version: '6.24.1',
    id: 'Lucian',
    key: '236',
    name: 'Lucian',
    title: 'the Purifier',
    img: 'https://i.blogs.es/cc1ded/lucian_hiredgun_splash/1366_2000.jpg',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucia_0.jpg',
    blurb: 'Lucian wields relic weapons imbued with ancient power and stands a stalwart guardian against the undead. His cold conviction never wavers, even in the face of the maddening horrors he destroys beneath his hail of purifying fire. Lucian walks alone on ...',
    info: {
      attack: 8,
      defense: 5,
      magic: 3,
      difficulty: 6
    },
    image: {
      full: 'Lucian.png',
      sprite: 'champion1.png',
      group: 'champion',
      x: 432,
      y: 96,
      w: 48,
      h: 48
    },
    tags: ['Marksman'],
    partype: 'MP',
    stats: {
      hp: 554.4,
      hpperlevel: 80,
      mp: 348.88,
      mpperlevel: 38,
      movespeed: 335,
      armor: 24.04,
      armorperlevel: 3,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 500,
      hpregen: 6.19,
      hpregenperlevel: 0.65,
      mpregen: 8.175,
      mpregenperlevel: 0.7,
      crit: 0,
      critperlevel: 0,
      attackdamage: 57.46,
      attackdamageperlevel: 2.41,
      attackspeedoffset: -0.02,
      attackspeedperlevel: 3.3
    }
  },
  Amumu: {
    version: '6.24.1',
    id: 'Amumu',
    key: '32',
    name: 'Amumu',
    title: 'the Sad Mummy',
    img:
      'https://www.masterypoints.com/assets/img/lol/champion_icons/Amumu.png',
    splash:
      'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg',
    blurb:
      '\'\'Solitude can be lonelier than death.\'\'<br><br>A lonely and melancholy soul from ancient Shurima, Amumu roams the world in search of a friend. Cursed by an ancient spell, he is doomed to remain alone forever, as his touch is death and his affection ...',
    info: {
      attack: 2,
      defense: 6,
      magic: 8,
      difficulty: 3
    },
    image: {
      full: 'Amumu.png',
      sprite: 'champion0.png',
      group: 'champion',
      xx: 192,
      yy: 0,
      ww: 48,
      hh: 48
    },
    tags: ['Tank', 'Mage'],
    partype: 'MP',
    stats: {
      hp: 613.12,
      hpperlevel: 84,
      mp: 287.2,
      mpperlevel: 40,
      movespeed: 335,
      armor: 23.544,
      armorperlevel: 3.8,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 8.875,
      hpregenperlevel: 0.85,
      mpregen: 7.38,
      mpregenperlevel: 0.525,
      crit: 0,
      critperlevel: 0,
      attackdamage: 53.384,
      attackdamageperlevel: 3.8,
      attackspeedoffset: -0.02,
      attackspeedperlevel: 2.18
    }
  }
};

const outputSelectChamps = {
  Blitzcrank: {
    name: 'Blitzcrank',
    aka: 'the Great Steam Golem',
    id: 'Blitzcrank',
    icon: 'https://i.blogs.es/e5a747/blitz/1366_2000.jpg',
    img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcranck_0.jpg',
    attack: 4,
    magic: 5,
    defense: 8,
    difficulty: 4,
    helpPoints: 582.6,
    helpPointsPerLevel: 95,
    hpregen: 8.51,
    hpregenperlevel: 0.75,
    mana: 267.2,
    manaPerLevel: 40,
    movespeed: 325,
    attackrange: 125,
    attackdamage: 61.54,
    tags: ['Tank', 'Fighter']
  },
  Jinx: {
    id: 'Jinx',
    name: 'Jinx',
    aka: 'the Loose Cannon',
    icon: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_13.jpg',
    img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/jinx_0.jpg',
    attack: 9,
    defense: 2,
    magic: 4,
    difficulty: 6,
    helpPoints: 517.76,
    helpPointsPerLevel: 82,
    hpregen: 5.84,
    hpregenperlevel: 0.5,
    mana: 245.6,
    manaPerLevel: 45,
    movespeed: 325,
    attackrange: 525,
    attackdamage: 58.46,
    tags: ['Marksman']
  },
  LeeSin: {
    id: 'LeeSin',
    name: 'Lee Sin',
    aka: 'the Blind Monk',
    icon: 'img/splash/LeeSin_Splash_11.jpg',
    img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/_0.jpg',
    attack: 8,
    defense: 5,
    magic: 3,
    difficulty: 6,
    helpPoints: 570.8,
    helpPointsPerLevel: 85,
    hpregen: 7.425,
    hpregenperlevel: 0.7,
    mana: 200,
    manaPerLevel: 0,
    movespeed: 350,
    attackrange: 125,
    attackdamage: 61.176,
    tags: ['Fighter', 'Assassin']
  },
  Lucian: {
    id: 'Lucian',
    name: 'Lucian',
    aka: 'the Purifier',
    icon: 'https://i.blogs.es/cc1ded/lucian_hiredgun_splash/1366_2000.jpg',
    img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucia_0.jpg',
    attack: 8,
    defense: 5,
    magic: 3,
    difficulty: 6,
    helpPoints: 554.4,
    helpPointsPerLevel: 80,
    hpregen: 6.19,
    hpregenperlevel: 0.65,
    mana: 348.88,
    manaPerLevel: 38,
    movespeed: 335,
    attackrange: 500,
    attackdamage: 57.46,
    tags: ['Marksman']
  },
  Amumu: {
    id: 'Amumu',
    name: 'Amumu',
    aka: 'the Sad Mummy',
    icon: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Amumu.png',
    img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg',
    attack: 2,
    defense: 6,
    magic: 8,
    difficulty: 3,
    helpPoints: 613.12,
    helpPointsPerLevel: 84,
    hpregen: 8.875,
    hpregenperlevel: 0.85,
    mana: 287.2,
    manaPerLevel: 40,
    movespeed: 335,
    attackrange: 125,
    attackdamage: 53.384,
    tags: ['Tank', 'Mage']
  }
};

const outputSelectChampsOld = {
  name: 'Aatrox',
  aka: 'the Darkin Blade',
  id: 'Aatrox',
  icon: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png',
  img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
  attack: 8,
  magic: 3,
  defense: 4,
  difficulty: 4,
  helpPoints: 537.8,
  helpPointsPerLevel: 85,
  hpRegen: 6.59,
  hpRegenPerLevel: 0.5,
  mana: 105.6,
  manaPerLevel: 45,
  movespeed: 345,
  attackrange: 150,
  attackdamage: 60.376,
  tags: ['Fighter', 'Tank']
};
// const championsData = app.selectedData(app.replaceChampsImg(LOL.data, app.obj));
describe('userLoginValidate', () => {
  it('debería ser una función', () => {
    expect(typeof app.userLoginValidate).toBe('function');
  });

  it('debería retornar "ok" si la contraseña y el usuario son iguales a "LABORATORIA"', () => {
    expect(app.userLoginValidate('LABORATORIA', 'LABORATORIA')).toBe('ok');
  });
  it('debería retornar "Usuario o contraseña incorrectas" si la contraseña o el usuario son diferentes a "LABORATORIA"', () => {
    expect(app.userLoginValidate('USUARIO', 'LABORATORIA')).toBe('Usuario o contraseña incorrectas');
  });
  it('debería retornar "Ingrese el usuario" si el usuario se encuentra vacio', () => {
    expect(app.userLoginValidate('', 'LABORATORIA')).toBe('Ingrese el usuario');
  });
  it('debería retornar "Ingrese la contraseña" si la contraseña se encuentra vacio', () => {
    expect(app.userLoginValidate('LABORATORIA', '')).toBe('Ingrese la contraseña');
  });
});

describe('replaceChampsImg', () => {
  it('debería ser una función', () => {
    expect(typeof app.replaceChampsImg).toBe('function');
  });

  it('debería devolver un nuevo objeto', () => {
    expect(typeof app.replaceChampsImg(inputLOL, inputChampsImg)).toBe('object');
  });
  it('debería retornar las imagenes nuevas del newChampsImg', () => {
    expect(app.replaceChampsImg(inputLOL, inputChampsImg)).toBe(replaceChampsImgData);
  }); 
});

describe('selectedData', () => {
  it('debería ser una función', () => {
    expect(typeof app.selectedData).toBe('function');
  });
  it('debería retornar un nuevo objeto con atributos personalizados', () => {
    expect(app.selectedData(replaceChampsImgData)).toEqual(outputSelectChamps);
  });
});
/* 
describe('sortAttackdamage', () => {
  it('debería ser una función', () => {
    expect(typeof app.sortAttackdamage).toBe('function');
  });
  it('debería ordenar por daño de ataque Descendente', () => {
    expect(app.sortAttackdamage(championsData, '1')[0].name).toEqual('Maokai');
  });
  it('debería ordenar por daño de ataque Ascendente', () => {
    expect(app.sortAttackdamage(championsData, '0')[0].name).toEqual('Orianna');
  });
});

describe('sortChampionsAz', () => {
  it('debería ser una función', () => {
    expect(typeof app.sortChampionsAz).toBe('function');
  });
  it('debería ordenar de Z - A', () => {
    expect(app.sortChampionsAz(championsData, '1')[0].name).toEqual('Zyra');
  });
  it('debería ordenar de A - Z', () => {
    expect(app.sortChampionsAz(championsData, '0')[0].name).toEqual('Aatrox');
  });
});

describe('selectTypeChampions', () => {
  it('debería ser una función', () => {
    expect(typeof app.selectTypeChampions).toBe('function');
  });
  it('debería mostrar el campeon tipo: "Assassin"', () => {
    expect(app.selectTypeChampions(championsData, 'Assassin')[0].name).toEqual('Ahri');
  });
  it('debería mostrar todos los campeones', () => {
    expect(app.selectTypeChampions(championsData, 'Total')[0].name).toEqual('Aatrox');
  });
});   */
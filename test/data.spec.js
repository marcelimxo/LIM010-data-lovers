global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('loginValidate', () => {
  it('debería ser una función', () => {
    expect(typeof loginValidate).toBe('function');
  });

  it('debería retornar "ok" si la contraseña y el usuario son iguales a "LABORATORIA"', () => {
    expect(loginValidate('LABORATORIA', 'LABORATORIA')).toBe('ok');
  });
  it('debería retornar "Usuario o contraseña incorrectas" si la contraseña o el usuario son diferentes a "LABORATORIA"', () => {
    expect(loginValidate('USUARIO', 'LABORATORIA')).toBe('Usuario o contraseña incorrectas');
  });
  it('debería retornar "Ingrese el usuario" si el usuario se encuentra vacio', () => {
    expect(loginValidate('', 'LABORATORIA')).toBe('Ingrese el usuario');
  });
  it('debería retornar "Ingrese la contraseña" si la contraseña se encuentra vacio', () => {
    expect(loginValidate('LABORATORIA', '')).toBe('Ingrese la contraseña');
  });
});

describe('dataCurated', () => {
  it('debería ser una función', () => {
    expect(typeof dataCurated).toBe('function');
  });

  it('debería devolver un nuevo objeto', () => {
    // assert.equal(typeof dataCurated(,), 'function');
  });
});

describe('selectedData', () => {
  it('debería ser una función', () => {
    expect(typeof selectedData).toBe('function');
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
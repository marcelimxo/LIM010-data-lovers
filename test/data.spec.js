global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('loginValidate', () => {
  it('debería ser una función', () => {
    assert.equal(typeof loginValidate, 'function');
  });
  
  it('debería retornar "ok" si la contraseña y el usuario son iguales a "LABORATORIA"', ()=> {
    assert.equal(loginValidate('LABORATORIA', 'LABORATORIA'), 'ok');
  });
  it('debería retornar "Usuario o contraseña incorrectas" si la contraseña o el usuario son diferentes a "LABORATORIA"', ()=> {
    assert.equal(loginValidate('USUARIO', 'LABORATORIA'), 'Usuario o contraseña incorrectas');
  });
  it('debería retornar "Ingrese el usuario" si el usuario se encuentra vacio', ()=> {
    assert.equal(loginValidate('', 'LABORATORIA'), 'Ingrese el usuario');
  });
  it('debería retornar "Ingrese la contraseña" si la contraseña se encuentra vacio', ()=> {
    assert.equal(loginValidate('LABORATORIA', ''), 'Ingrese la contraseña');
  });
});

describe('dataCurated', () => {
  it('debería ser una función', () => {
    assert.equal(typeof dataCurated, 'function');
  });

  it('debería devolver un nuevo objeto', () => {
    // assert.equal(typeof dataCurated(,), 'function');
  });
});

describe('selectedData', () => {
  it('debería ser una función', () => {
    assert.equal(typeof selectedData, 'function');
  });
});

describe('sortChampionsAz', () => {
  it('debería ser una función', () => {
    assert.equal(typeof sortChampionsAz, 'function');
  });
});

describe('sortAttackdamage', () => {
  it('debería ser una función', () => {
    assert.equal(typeof sortAttackdamage, 'function');
  });
});

describe('selectTypeChampions', () => {
  it('debería ser una función', () => {
    assert.equal(typeof selectTypeChampions, 'function');
  });
});
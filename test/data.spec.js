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
});
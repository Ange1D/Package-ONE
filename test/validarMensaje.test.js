const validarMensaje = require('./../src/validarMensaje');

describe("Unit Tests for Validar Mensaje Function", () => {
    test('1) Validar la palabra "gato"', () => {
      const prueba = validarMensaje("gato")
      expect(prueba).toBe(true);
    });
    test('2) Validar la palabra "GATO"', () => {
        const prueba = validarMensaje("GATO")
        expect(prueba).toBe(false);
      });
    test('3) Validar la palabra ""', () => {
        const prueba = validarMensaje("")
        expect(prueba).toBe(false);
      });
  })
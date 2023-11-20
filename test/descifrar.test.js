const Descifrar = require('./../src/descifrar');

describe("Unit Tests for Descifrar Function", () => {
    test('1) Descifrar la palabra "gaitober"', () => {
      const prueba = Descifrar("gaitober")
      expect(prueba).toBe("gato");
    });
    test('2) Cifrar la palabra "GAITOBER"', () => {
        const prueba = Descifrar("GAITOBER")
        expect(prueba).toBe("Message contains unsupported characters");
      });
  })
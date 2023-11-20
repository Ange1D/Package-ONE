const Cifrar = require('./../src/cifrar');

describe("Unit Tests for Cifrar Function", () => {
    test('1) Cifrar la palabra "gato"', () => {
      const prueba = Cifrar("gato")
      expect(prueba).toBe("gaitober");
    });
    test('2) Cifrar la palabra "GATO"', () => {
        const prueba = Cifrar("GATO")
        expect(prueba).toBe("Message contains unsupported characters");
      });
  })
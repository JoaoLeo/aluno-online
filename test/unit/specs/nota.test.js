const Nota = require('../../../src/models/nota');

describe('Calculo da média final', () => {
    test('a media é zero se não tem notas', () => {
        let nota = new Nota(null, 0, 0, 0);
        expect(nota.mediaFinal()).toEqual(0);
        nota = new Nota(null, null, null, null)
        expect(nota.mediaFinal()).toEqual(0);
    });

    test('a média é (0.4 * a1) + (0.6 * a2) se tem apenas a1 e a2', () => {
        let nota = new Nota(null, 3, 5, null);
        expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
        nota = new Nota(null, 7, 4, null);
        expect(nota.mediaFinal()).toEqual(0.4 * 7 + 0.6 * 4);
    });

    test('a média é (0.4 * a3) + (0.6 * a2) se a3 substitui a1', () => {
        let nota = new Nota(null, 0, 5, 3);
        expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
        nota = new Nota(null, 2, 5, 3);
        expect(nota.mediaFinal()).toEqual(0.4 * 3 + 0.6 * 5);
        nota = new Nota(null, 2, 5, 6);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
    });

    test('a média é (0.4 * a1) + (0.6 * a3) se a3 substitui a2', () => {
        let nota = new Nota(null, 6, 0, 5);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
        nota = new Nota(null, 6, 4, 5);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 5);
        nota = new Nota(null, 6, 4, 7);
        expect(nota.mediaFinal()).toEqual(0.4 * 6 + 0.6 * 7);
    });
});


describe('Testes para a função mediaCA', () => {
    let nota = new Nota()
    test('Retorna "SS - Superior" para uma nota entre 9.0 e 10', () => {
    
      expect(nota.mediaCA(9.5)).toBe('SS - Superior');
      expect(nota.mediaCA(10)).toBe('SS - Superior');
    });
  
    test('Retorna "MS - Médio Superior" para uma nota entre 7.0 e 8.9', () => {
      expect(nota.mediaCA(7.5)).toBe('MS - Médio Superior');
      expect(nota.mediaCA(8.9)).toBe('MS - Médio Superior');
    });
  
    test('Retorna "MM - Médio" para uma nota entre 5.0 e 6.9', () => {
      expect(nota.mediaCA(5.5)).toBe('MM - Médio');
      expect(nota.mediaCA(6.9)).toBe('MM - Médio');
    });
  
    test('Retorna "MI - Médio Inferior" para uma nota entre 3.0 e 4.9', () => {
      expect(nota.mediaCA(3.5)).toBe('MI - Médio Inferior');
      expect(nota.mediaCA(4.9)).toBe('MI - Médio Inferior');
    });
  
    test('Retorna "II - Inferior" para uma nota entre 0.1 e 2.9', () => {
      expect(nota.mediaCA(1)).toBe('II - Inferior');
      expect(nota.mediaCA(2.9)).toBe('II - Inferior');
    });
  
    test('Retorna "Nota inválida" para uma nota fora das faixas válidas', () => {
      expect(nota.mediaCA(11)).toBe('Nota inválida');
      expect(nota.mediaCA(-1)).toBe('Nota inválida');
    });
  });
  
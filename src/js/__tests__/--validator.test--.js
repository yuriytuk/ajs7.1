import Validator from '../Validator';

test('Получение имени', () => {
  const validator = new Validator();
  const result = validator.validateUsername('qwE123_4-5rt');
  expect(result).toBe('qwE123_4-5rt');
});

test('В имени нельзя вводить более трёх цифр!', () => {
  const validator = new Validator();
  const result = () => validator.validateUsername('qwE1234_4-5rt');
  expect(result).toThrow('В имени нельзя вводить более трёх цифр!');
});

test('ошибка при вводе кирилицы', () => {
  const validator = new Validator();
  const result = () => validator.validateUsername('qьwE123_4-5rt');
  expect(result).toThrow('Разрешены латинские буквы, цифры от 0 до 9, символы тире, подчёркивания');
});

test('ошибка при вводе спецсимвола', () => {
  const validator = new Validator();
  const result = () => validator.validateUsername('q=wE123_4-5rt');
  expect(result).toThrow('Разрешены латинские буквы, цифры от 0 до 9, символы тире, подчёркивания');
});

test('Имя не должно начинаться с цифр, символов подчёркивания, тире', () => {
  const validator = new Validator();
  const result = () => validator.validateUsername('1qwE123_4-5rt');
  expect(result).toThrow('Имя не должно начинаться с цифр, символов подчёркивания, тире');
});

test('Имя не должно начинаться с цифр, символов подчёркивания, тире', () => {
  const validator = new Validator();
  const result = () => validator.validateUsername('-qwE123_4-5rt');
  expect(result).toThrow('Имя не должно начинаться с цифр, символов подчёркивания, тире');
});
test('Имя не должно заканчиваться цифрами, символами подчёркивания, тире', () => {
  const validator = new Validator();
  const result = () => validator.validateUsername('qwE123_4-5rt1');
  expect(result).toThrow('Имя не должно заканчиваться цифрами, символами подчёркивания, тире');
});

test('Имя не должно заканчиваться цифрами, символами подчёркивания, тире', () => {
  const validator = new Validator();
  const result = () => validator.validateUsername('qwE123_4-5rt-');
  expect(result).toThrow('Имя не должно заканчиваться цифрами, символами подчёркивания, тире');
});
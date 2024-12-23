export default class Validator {
  validateUsername(name) {
    if (name.search(/^[a-z0-9\-\_]+$/i) === -1) {
      throw new Error('Разрешены латинские буквы, цифры от 0 до 9, символы тире, подчёркивания');
    }

    if (name.search(/\w+([0-9]{4,})/) === 0) {
      throw new Error('В имени нельзя вводить более трёх цифр!');
    }

    if (name.match(/^[0-9\_\-]/) !== null) {
      throw new Error('Имя не должно начинаться с цифр, символов подчёркивания, тире');
    }

    if (name.match(/[0-9\_\-]+$/) !== null) {
      throw new Error('Имя не должно заканчиваться цифрами, символами подчёркивания, тире');
    }

    this.name = name;
    return this.name;
  }
}
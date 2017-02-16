'use strict';

window.utils = {

  /**
   * Метод возвращает случайный элемент массива
   * @param {string[]} array - массив
   * @return {string} - случайный элемент массива
   */
  getRandomElement: function (array) {
    return array[Math.floor(Math.random() * array.length)];
  },
  /**
   * Метод переводит значение цвета из шестнадцатиричного формата в rgb
   * @param {string} hexColorValue - значение цвета в шестнадцатиричном формате
   * @return {string} - значение цвета в формате rgb
   */
  translateHexToRGB: function (hexColorValue) {
    var r = parseInt(hexColorValue.substr(1, 2), 16);
    var g = parseInt(hexColorValue.substr(3, 2), 16);
    var b = parseInt(hexColorValue.substr(5, 2), 16);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  },
  //  Код клавиши ENTER
  ENTER_KEY_CODE: 13,
  //  Код клавиши ESCAPE
  ESCAPE_KEY_CODE: 27,
  /**
   * Метод, проверяющий нажатие клавиши
   * @param {Object} event - клавиатурное событие
   * @param {number} key - код клавишы
   * @return {boolean}
   */
  isKeyPressed: function (event, key) {
    return event.keyCode && event.keyCode === key;
  },
  /**
   * Метод возвращает новый цвет для HTML-элемента
   * @param {string[]} array - массив возможных цветов элемента
   * @param {string} currentColor - текущий цвет элемента
   * @return {string} newColor - новый цвет элемента, выбранный случайным образом из массива возможных цветов
   */
  getRandomElementExcept: function (array, currentColor) {
    var newColor;

    do {
      newColor = window.utils.getRandomElement(array);
      if (newColor.indexOf('#') !== -1) {
        newColor = window.utils.translateHexToRGB(newColor);
      }
    }
    while (!newColor || newColor === currentColor);

    return newColor;
  }
};

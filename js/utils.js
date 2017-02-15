'use strict';

window.utils = {

  /**
   * Метод возвращает случайный элемент массива
   * @param {string[]|number[]|boolean[]} array - массив любых значений
   * @return {string|number|boolean} - случайный элемент массива
   */
  getRandomElement: function (array) {
    return array[Math.floor(Math.random() * array.length)];
  },
  /**
   * Функция переводит значение цвета из шестнадцатиричного формата в rgb
   * @param {string} hexColorValue - значение цвета в шестнадцатиричном формате
   * @return {string} - значение цвета в формате rgb
   */
  translateHexToRGB: function (hexColorValue) {
    var r = parseInt(hexColorValue.substr(1, 2), 16);
    var g = parseInt(hexColorValue.substr(3, 2), 16);
    var b = parseInt(hexColorValue.substr(5, 2), 16);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  },
  /**
   * Метод возвращает новый цвет для HTML-элемента
   * @param {string[]} array - массив возможных цветов элемента
   * @param {string} currentColor - текущий цвет элемента
   * @return {string} newColor - новый цвет элемента, выбранный случайным образом из массива возможных цветов
   */
  getRandomElementExcept: function (array, currentColor) {
    var newColor;

    while (!newColor || newColor === currentColor ) {
      newColor = window.utils.getRandomElement(array);
      if (newColor.indexOf('#') !== -1) {
        newColor = window.utils.translateHexToRGB(newColor);
      }
    }
    return newColor;
  }
};

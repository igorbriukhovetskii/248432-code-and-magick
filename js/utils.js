'use strict';

window.utils = (function () {
  /**
   * Функция возвращает случайный элемент массива
   * @param {string[]} array - массив
   * @return {string} - случайный элемент массива
   */
  var getRandomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  /**
   * Функция переводит значение цвета из шестнадцатиричного формата в rgb
   * @param {string} hexColorValue - значение цвета в шестнадцатиричном формате
   * @return {string} - значение цвета в формате rgb
   */
  var translateHexToRGB = function (hexColorValue) {
    var r = parseInt(hexColorValue.substr(1, 2), 16);
    var g = parseInt(hexColorValue.substr(3, 2), 16);
    var b = parseInt(hexColorValue.substr(5, 2), 16);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  };

  //  Код клавиши ENTER
  var ENTER_KEY_CODE = 13;
  //  Код клавиши ESCAPE
  var ESCAPE_KEY_CODE = 27;

  return {
    /**
     * Метод, проверяющий нажатие клавиши ENTER
     * @param {Object} event - клавиатурное событие
     * @return {boolean}
     */
    isActivateEvent: function (event) {
      return event.keyCode && event.keyCode === ENTER_KEY_CODE;
    },

    /**
     * Метод, проверяющий нажатие клавиши ESCAPE
     * @param {Object} event - клавиатурное событие
     * @return {boolean}
     */
    isDeactivateEvent: function (event) {
      return event.keyCode && event.keyCode === ESCAPE_KEY_CODE;
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
        newColor = getRandomElement(array);
        if (newColor.indexOf('#') !== -1) {
          newColor = translateHexToRGB(newColor);
        }
      } while (newColor === currentColor);

      return newColor;
    }
  };
})();

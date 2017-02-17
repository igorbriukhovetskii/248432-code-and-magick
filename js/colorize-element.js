'use strict';

window.colorizeElement = (function() {
  /**
   * Функция возвращает случайный цвет из массива возможных цветов
   * @param {Object} element - DOM-элемент
   * @param {string[]} colors - массив возможных цветов элемента
   * @param {string} property - наименование CSS свойства
   * @return {string} - новое значение цвета элемента
   */
  var getRandomColor = function (element, colors, property) {
    return window.utils.getRandomElementExcept(colors, element.style[property]);
  };

  /**
   * Функция задаёт элементу новый случайный цвет при клике на него
   * @param {Object} element - DOM-элемент
   * @param {string[]} colors - массив возможных цветов элемента
   * @param {string} property - наименование CSS свойства
   */
  var setColorOnClick = function (element, colors, property) {
    element.addEventListener('click', function () {
      element.style[property] = getRandomColor(element, colors, property);
    });
  };

  /**
   * Функция задаёт элементу новый случайный цвет при нажатии клавиши ENTER
   * @param {Object} element - DOM-элемент
   * @param {string[]} colors - массив возможных цветов элемента
   * @param {string} property - наименование CSS свойства
   */
  var setColorOnKeydown = function (element, colors, property) {
    element.addEventListener('keydown', function (event) {
      if (window.utils.isActivateEvent(event)) {
        element.style[property] = getRandomColor(element, colors, property);
      }
    });
  };

  /**
   * Функция задаёт элементу новый случайный цвет при нажатии клавиши ENTER или при клике на него
   * @param {Object} element - DOM-элемент
   * @param {string[]} colors - массив возможных цветов элемента
   * @param {string} property - наименование CSS свойства
   */
  return function (element, colors, property) {
    setColorOnClick(element, colors, property);
    setColorOnKeydown(element, colors, property);
  };
})();

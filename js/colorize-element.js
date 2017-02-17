'use strict';

/**
 * Функция, меняющая цвет выбранного элемента на странице на случайный из массива возможных цветов
 * @param {Object} element - DOM-элемент
 * @param {string[]} colors - массив возможных цветов элемента
 * @param {string} property - наименование CSS свойства
 */
window.colorizeElement = function (element, colors, property) {
  function setRandomColor(htmlElement, arrayOfColors, styleProperty) {
    htmlElement.style[property] = window.utils.getRandomElementExcept(arrayOfColors, htmlElement.style[styleProperty]);
  }

  element.addEventListener('click', function () {
    setRandomColor(element, colors, property);
  });

  element.addEventListener('keydown', function (event) {
    if (window.utils.isKeyPressed(event, window.utils.ENTER_KEY_CODE)) {
      setRandomColor(element, colors, property);
    }
  });
};

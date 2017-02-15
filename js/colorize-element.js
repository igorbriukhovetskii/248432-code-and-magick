'use strict';

/**
 * Функция, меняющая цвет выбранного элемента на странице на случайный из массива возможных цветов
 * @param {Object} element - DOM-элемент
 * @param {string[]} colors - массив возможных цветов элемента
 * @param {string} property - наименование CSS свойства
 */
window.colorizeElement = function (element, colors, property) {
  function setRandomColor(element, colors, property) {
    var currentColor = element.style[property];
    element.style[property] = window.utils.getRandomElementExcept(colors, currentColor);
  }
  element.addEventListener('click', function () {
    setRandomColor(element, colors, property);
  });

  element.addEventListener('keydown', function (event) {
    if (isKeyPressed(event, ENTER_KEY_CODE)) {
      setRandomColor(element, colors, property);
    }
  })
};

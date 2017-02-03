'use strict';
//  Находим блок, по клику на который будет открываться окно настроек персонажа
var openSetupToggle = document.querySelector('.setup-open');
//  Находим блок по клику на который окно настроек персонажа будет закрываться
var closeSetupToggle = document.querySelector('.setup-close');
//  Выбираем окно настроек персонажа
var setupWindow = document.querySelector('.setup');
//  Выбираем поле ввода имени персонажа
var userName = document.querySelector('.setup-user-name');
//  Выбираем блок, содержащий накидку персонажа
var wizardCoat = document.querySelector('#wizard-coat');
//  Массив цветов накидки персонажа
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
//  Выбираем блок с глазами персонажа
var wizardEyes = document.querySelector('#wizard-eyes');
//  Массив цветов глаз персонажа
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
//  Выбираем блок с файерболом
var fireball = document.querySelector('.setup-fireball-wrap');
//  Массив цветов файербола
var fireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
//  Индекс элемента массива, содержащего текущий цвет файербола
var currentFireballColorIndex = 0;
//  Вычисление длины массива цветов файербола
var fireballColorsLength = fireballColors.length;
//  Функция, открывающая окно настройки пресонажа
function openSetup() {
  if (setupWindow.classList.contains('invisible')) {
    setupWindow.classList.remove('invisible');
  }
}
//  Функция, закрывающая окно настройки персонажа
function closeSetup() {
  if (!(setupWindow.classList.contains('invisible'))) {
    setupWindow.classList.add('invisible');
  }
}
/**
 * Функия, изменяющая цвет <svg> элемента
 * @param {string[]} colors - массив цветов
 * @param {object} element - DOM-элемент
 */
function changeElementFill(colors, element) {
  if (!element.style.fill) {
    element.style.fill = colors[1];
    return;
  }
  if (element.style.fill) {
    var currentColor = element.style.fill;
    for (var i = 0, length = colors.length; i < length; i++) {
      if (currentColor === colors[i]) {
        element.style.fill = colors[i + 1];
      }
      if (currentColor === colors[i] && i === length - 1) {
        element.style.fill = colors[0];
      }
    }
  }
}
/**
 * Функция, изменяющая фоновый цвет элемента
 * @param {string[]} element - массив цветов
 * @param {object} colors - DOM-элемент
 */
function changeElementBackgroundColor(element, colors) {
  if (currentFireballColorIndex < fireballColorsLength - 1) {
    currentFireballColorIndex++;
    element.style.backgroundColor = colors[currentFireballColorIndex];
  } else {
    currentFireballColorIndex = 0;
    element.style.backgroundColor = colors[currentFireballColorIndex];
  }
}
//  Ограничение минимального и максимального количества символов в имени персонажа
userName.required = true;
userName.maxLength = 50;
//  Открытие окна настройки персонажа по клику на иконку пользователя
openSetupToggle.addEventListener('click', openSetup);
//  Закрытие окна настройки пресонажа по клику на кнопку закрытия
closeSetupToggle.addEventListener('click', closeSetup);
//  Изменение цвета накидки персонажа
wizardCoat.addEventListener('click', function () {
  changeElementFill(wizardCoatColors, wizardCoat);
});
//  Изменение цвета глаз персонажа
wizardEyes.addEventListener('click', function () {
  changeElementFill(wizardEyesColors, wizardEyes);
});
//  Изменение цвета файербола
fireball.addEventListener('click', function () {
  changeElementBackgroundColor(fireball, fireballColors);
});

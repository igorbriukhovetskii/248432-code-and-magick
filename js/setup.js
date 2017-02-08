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
//  Функция, открывающая/закрывающая окно настройки пресонажа
function toggleSetup() {
  setupWindow.classList.toggle('invisible');
}
/**
 * Функция, возвращающая новый цвет из массива цветов
 * @param {string[]} colors - массив цветов
 * @param {string} currentColor - текущий цвет элемента
 * @return {string} - новый цвет элемента
 */
function getNewColor(colors, currentColor) {
  if (!currentColor) {
    return colors[1];
  }
  for (var i = 0, length = colors.length; i < length; i++) {
    if (currentColor === colors[i]) {
      if (i === length - 1) {
        return colors[0];
      }
      return colors[i + 1];
    }
  }
  return currentColor;
}
/**
 * Функция, изменяющая фоновый цвет элемента
 * @param {string[]} colors - массив цветов
 * @param {object} element - DOM-элемент
 */
function changeElementBackgroundColor(colors, element) {
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
openSetupToggle.addEventListener('click', toggleSetup);
//  Закрытие окна настройки пресонажа по клику на кнопку закрытия
closeSetupToggle.addEventListener('click', toggleSetup);
//  Изменение цвета накидки персонажа
wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getNewColor(wizardCoatColors, wizardCoat.style.fill);
});
//  Изменение цвета глаз персонажа
wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getNewColor(wizardEyesColors, wizardEyes.style.fill);
});
//  Изменение цвета файербола
fireball.addEventListener('click', function () {
  changeElementBackgroundColor(fireballColors, fireball);
});
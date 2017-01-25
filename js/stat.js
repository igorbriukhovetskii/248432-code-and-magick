'use strict';
window.renderStatistics = function (ctx, names, times) {
  //  Функция отрисовки пустого поля для статистики
  function drawStatisticsField() {
    //  Координата Х левого-верхнего угла поля статистики
    var topLeftX = 100;
    //  Координата Y левого-верхнего угла поля статистики
    var topLeftY = 10;
    //  Ширина поля статистики
    var statisticsFieldWidth = 420;
    //  Высота поля статистики
    var statisticsFieldHeight = 270;
    //  Отрисовка тени поля с результатами
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(topLeftX + 10, topLeftY + 10, statisticsFieldWidth, statisticsFieldHeight);

    //  Отрисовка поля, на котором будут выводиться результаты
    ctx.fillStyle = 'rgba(255, 255, 255 , 1)';
    ctx.fillRect(topLeftX, topLeftY, statisticsFieldWidth, statisticsFieldHeight);
  }

  //  Функция отрисовки текста в заголовке поля со статистикой
  function drawStatisticsHeader() {
    //  Вывод заголовка для гистограммы с результатами
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 240, 40);
    ctx.fillText('Список результатов:', 225, 60);
  }

  //  Функция вычисления альфа-канала цвета колонки гистограммы
  function getRandomOpacity() {
    return Math.random() * (1 - 0.2) + 0.2;
  }

  //  Общая высота гистограммы
  var histogramHeight = 150;
  //  Отступ гистограммы от верхнего края канваса
  var histogramFieldIndentY = 100;
  //  Отступ гистограммы от левого края канваса
  var histogramFieldIndentX = 155;
  //  Ширина колонки гистограммы
  var columnWidth = 40;
  //  Промежуток между колонками гистограммы
  var columnInterval = 50;

  //  Определение максимального времени, затраченного на прохождение игры, хранимого в массиве times
  var maxTime = Math.max.apply(null, times);

  //  Вычисление масштаба гистограммы
  var step = maxTime / histogramHeight;

  //  Функция отрисовки гистограммы
  function drawHistogram() {
    //  Цикл отрисовки колонок гистораммы, имён игроков и затраченного на прохождение игры времени
    for (var j = 0, arrayLength = times.length; j < arrayLength; j++) {
      var time = times[j];
      var name = names[j];
      //  Вычисление высоты колонки гистограммы
      var columnHeight = time / step;
      //  Вычисление отступа по оси Х от левого края для текущей колонки гистограммы
      var indentX = histogramFieldIndentX + (columnWidth + columnInterval) * j;
      //  Вычисление цвета колонки гистограммы
      if (name === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgba(0, 0, 255, ' + getRandomOpacity() + ')';
      }
      //  Отрисовка колонки
      ctx.fillRect(indentX, histogramFieldIndentY + (histogramHeight - columnHeight), columnWidth, columnHeight);
      //  Определение цвета текста для имени игрока и отображаемой величины затраченного времени
      ctx.fillStyle = '#000';
      //  Отрисовка имени игрока под соответствующей колонкой гистограммы
      ctx.fillText(name, indentX, histogramFieldIndentY + histogramHeight + 20);
      //  Отрисовка величины затраченного времени над соответствующей колонкой гистограммы
      ctx.fillText(Math.floor(time), indentX, histogramFieldIndentY + histogramHeight - columnHeight - 5);
    }
  }

  //  Рисуем поле для статистики
  drawStatisticsField();
  //  Рисуем заголовок для статистики
  drawStatisticsHeader();
  //  Рисуем гистограмму
  drawHistogram();
};

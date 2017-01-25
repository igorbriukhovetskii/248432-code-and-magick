'use strict';
//  Функция отрисовки пустого поля для статистики
//  Принимает в качестве параметров:
//  - контекст отрисовки: ctx,
//  - координату по оси Х левого-верхнего угла: topLeftX,
//  - координату по оси Y левого-верхнего угла: topLeftY,
//  - ширину поля статистики: statisticsFieldWidth,
//  - высоту поля статистики: statisticsFieldHeight
function drawStatisticsField(ctx,topLeftX, topLeftY, statisticsFieldWidth, statisticsFieldHeight) {
  //  Отрисовка тени поля с результатами
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(topLeftX + 10, topLeftY + 10, statisticsFieldWidth, statisticsFieldHeight);

  //  Отрисовка поля, на котором будут выводиться результаты
  ctx.fillStyle = 'rgba(255, 255, 255 , 1)';
  ctx.fillRect(topLeftX, topLeftY, statisticsFieldWidth, statisticsFieldHeight);
}

//  Функция отрисовки текста в заголовке поля со статистикой
//  Принимает в качестве параметров:
//  - контекст отрисовки: ctx,
//  - цвет текста заголовка в виде строки: sTextColor
function drawStatisticsHeader(ctx, sTextColor) {
  //  Вывод заголовка для гистограммы с результатами
  ctx.fillStyle = sTextColor;
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 240, 40);
  ctx.fillText('Список результатов:', 225, 60);
}

//  Функция вычисления альфа-канала цвета колонки гистограммы
function getRandomOpacity(minOpacity, maxOpacity) {
  return Math.random() * (maxOpacity - minOpacity) + minOpacity;
}

//  Функция отрисовки гистограммы
//  Принимает в качестве параметров:
//  - контекст отрисовки: ctx,
//  - массив имён игроков: names,
//  - массив времён прохождения игры игроками: times,
//  - максимальную высоту колонок гистограммы: histogramHeight,
//  - отступ гистограммы от левого края канваса: histogramFieldIndentX,
//  - отступ гистограммы от верхнего края канваса: histogramFieldIndentY,
//  - ширину колонок гистограммы: columnWidth,
//  - расстояние между колонками гистограммы: columnInterval
function drawHistogram(ctx, names, times, histogramHeight, histogramFieldIndentX, histogramFieldIndentY, columnWidth, columnInterval) {
  //  Определение максимального времени, затраченного на прохождение игры, хранимого в массиве times
  var maxTime = Math.max.apply(null, times);

  //  Вычисление масштаба гистограммы
  var step = maxTime / histogramHeight;

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
      ctx.fillStyle = 'rgba(0, 0, 255, ' + getRandomOpacity(0.3, 1) + ')';
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

//  Главная функция обработки статистики
window.renderStatistics = function (ctx, names, times) {
  //  Рисуем поле для статистики
  drawStatisticsField(ctx, 100, 10, 420, 270);
  //  Рисуем заголовок для статистики
  drawStatisticsHeader(ctx, '#000');
  //  Рисуем гистограмму
  drawHistogram(ctx, names, times, 150, 155, 100, 40, 50);
};

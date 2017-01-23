'use strict';
window.renderStatistics = function (ctx, names, times) {
  //  Отрисовка тени поля с результатами
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  //  Отрисовка поля, на котором будут выводиться результаты
  ctx.fillStyle = 'rgba(255, 255, 255, 1.0)';
  ctx.fillRect(100, 10, 420, 270);

  //  Вывод заголовка для гистограммы с результатами
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 240, 40);
  ctx.fillText('Список результатов:', 225, 60);

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
  var maxTime = -1;
  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxTime) {
      maxTime = times[i];
    }
  }

  //  Вычисление масштаба гистограммы
  var step = maxTime / histogramHeight;

  //  Цикл отрисовки колонок гистораммы, имён игроков и затраченного на прохождение игры времени
  for (var j = 0; j < times.length; j++) {
    //  Вычисление высоты колонки гистограммы
    var columnHeight = times[j] / step;
    //  Вычисление отступа по оси Х от левого края для текущей колонки гистограммы
    var indentX = histogramFieldIndentX + (columnWidth + columnInterval) * j;
    //  Вычисление альфа-канала цвета колонки гистограммы
    var opacity = Math.random();
    //  Добавляем непрозрачность, если случайное значение слишком мало, чтобы избежать генерации прозрачных столбцов
    if (opacity <= 0.3) {
      opacity += 0.2;
    }
    //  Вычисление цвета колонки гистограммы
    if (names[j] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + opacity + ')';
    }
    //  Отрисовка колонки
    ctx.fillRect(indentX, histogramFieldIndentY + (histogramHeight - columnHeight), columnWidth, columnHeight);
    //  Определение цвета текста для имени игрока и отображаемой величины затраченного времени
    ctx.fillStyle = '#000';
    //  Отрисовка имени игрока под соответствующей колонкой гистограммы
    ctx.fillText(names[j], indentX, histogramFieldIndentY + histogramHeight + 20);
    //  Отрисовка величины затраченного времени над соответствующей колонкой гистограммы
    ctx.fillText(Math.floor(times[j]), indentX, histogramFieldIndentY + histogramHeight - columnHeight - 5);
  }
};

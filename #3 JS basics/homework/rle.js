/**
 * Напишите функцию rle(input), реализующую примитивное RLE-сжатие входящей строки input.
 * Подробнее об RLE: https://ru.wikipedia.org/wiki/Кодирование_длин_серий
 *
 * Входящая строка сооттветствует regex паттерну /^[A-Z]+$/
 *
 * Пример:
 * rle('AAAB') === 'A3B'
 * rle('BCCDDDEEEE') === 'BC2D3E4'
 *
 * Больше примеров в тестах.
 *
 * @param  {string} input
 * @return {string}
 */
export default function rle(input) {
  const result = [];

  const curArr = input.split('');

  let count = 0;

  let lastChar;

  function checkChar(curChar, i) {
    if (i !== curArr.length && lastChar === curChar) {
      count += 1;
    } else {
      if (count > 1) {
        result.push(count);
      }
      lastChar = curChar;
      result.push(lastChar);
      count = 1;
    }
  }
  for (let i = 0; i < curArr.length + 1; i++) {
    checkChar(curArr[i], i);
  }
  return result.join('');
}

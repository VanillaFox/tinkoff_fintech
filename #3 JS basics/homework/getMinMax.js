/**
 * Напишите функцию getMinMax(input), принимающую строку input,
 * и ищущую в ней максимальное и минимальное числа.
 *
 * Числа в строке выделяются пробелами или знаками препинания.
 *
 * Пример:
 * getMinMax('1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028');
 * // { min: -1028, max: 15 }
 *
 * getMinMax('"To Infinity and beyond", - repeated Buzz Lightyear 4 times in a row')
 * { max: Infinity, min: 4 }
 *
 * Больше примеров в тестах.
 *
 * @param  {string} input входная строка
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 */
export default function getMinMax(input) {
  function findNums(str) {
    if (str === '0' || str === '-0') {
      return true;
    }
    return Boolean(Number(str));
  }
  const punctuationMarks = /[,!?:;"']/gm;

  let curArr = input.replace(punctuationMarks, '').split(' ');

  curArr = curArr.filter(findNums);

  let min;

  let max;

  let curNum;

  for (let i = 0; i < curArr.length; i++) {
    curNum = Number(curArr[i]);
    if (min === undefined || min > curNum) {
      min = curNum;
    }
    if (max === undefined || max < curNum) {
      max = curNum;
    }
  }
  return { min, max };
}

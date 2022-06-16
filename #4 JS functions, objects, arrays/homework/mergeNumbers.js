/**
 * Напишите функцию mergeNumbers(number), складывающую
 * все цифры числа number до тех пор, пока не получится
 * однозначный результат.
 *
 * Пример:
 * mergeNumbers(1) === 1
 * mergeNumbers(10001) === 2
 * mergeNumbers(15334232) === 5
 * mergeNumbers(50349814743854) === 2
 *
 * @param number
 */

export function mergeNumbers(number) {
  let resultSum = number;

  do {
    const curArr = Array.from(`${resultSum}`);

    resultSum = curArr.reduce((curSum, curElem) => curSum + Number(curElem), 0);
  } while (resultSum > 10);
  return resultSum;
}

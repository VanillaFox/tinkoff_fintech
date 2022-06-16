/**
 * Напишите функцию sum(x), вычисляющую суммы подобным образом:
 * sum() === 0
 * sum(1)(2)() === 3
 * sum(1)(2)(3)() === 6
 *
 * Возможно чуть более понятная нотация для любителей функциональщины:
 * sum :: Number -> sum
 * sum :: void -> Number
 *
 * @param {*} x число или undefined
 * @returns а это уже сами решите
 */
export default function sum(x) {
  let currentSum = 0;

  function f(b) {
    if (b === undefined) {
      return currentSum;
    }
    currentSum += b;
    return f;
  }
  return f(x);
}

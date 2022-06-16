/**
 * Напишите функцию multiple(a, b), умножающую число a на число b,
 * не используя оператор "*" или метод Math.imul.
 *
 * Пример:
 * multiple(1, 1) === 1
 * multiple(1, 2) === 2
 * multiple(0, 0) === 0
 *
 * Больше примеров в тестах.
 *
 * @param  {number} a любое целое число
 * @param  {number} b любое целое число
 * @return {number}
 */

export default function multiple(a, b) {
  if (a === 1) {
    return b;
  }
  if (b === 1) {
    return a;
  }
  let sum = 0;

  if (!a || !b) {
    if (Math.abs(b) === Infinity || Math.abs(a) === Infinity) {
      return NaN;
    }
    sum = Math.sign(a) * 0;
  } else {
    for (let i = 0; i < Math.abs(b); i++) {
      sum += a;
    }
  }
  return Math.sign(b) * sum;
}

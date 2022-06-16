/**
 * Напишите функцию getIntersection(first, second), возвращающую
 * массив из общих значений массивов first и second.
 *
 * Результирующий массив должен быть отсортирован по возрастанию.
 *
 * Пример:
 * getIntersection([1, 3, 5, 7, 9], [1, 2, 3, 4]); //  [1, 3]
 * getIntersection([1, 1, 2], [2, 1, 1, 1]); // [1, 1, 2]
 *
 * @param  {number[]} first исходные массивы
 * @param  {number[]} second исходные массивы
 * @return {number[]} массив значений, отсортированный по возрастанию
 */
export function getIntersection(first, second) {
  const leftArr = first.slice('').sort((a, b) => a - b);

  const rightArr = second.slice('').sort((a, b) => a - b);

  const result = [];

  for (let i = 0, k = 0; i < leftArr.length && k < rightArr.length;) {
    if (leftArr[i] < rightArr[k]) {
      i += 1;
    } else if (leftArr[i] > rightArr[k]) {
      k += 1;
    } else {
      result.push(leftArr[i]);
      i += 1;
      k += 1;
    }
  }
  return result;
}

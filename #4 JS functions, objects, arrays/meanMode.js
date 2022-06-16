/**
 * Напишите функцию meanMode(numbers), принимающую массив чисел numbers
 * и возвращающую true, если среднее значение числового ряда равно
 * числу (или любому из чисел), встречающемуся чаще остальных. Иначе
 * вернуть false.
 *
 * Если есть несколько чисел, встречающихся одинаковое количество раз,
 * и чаще всех остальных, считать входящий массив невалидным и
 * возвращать false.
 *
 * Пример:
 * meanMode([1]) === true
 * meanMode([4, 4, 4, 6, 2]) === true
 * meanMode([1, 2, 3]) === false
 * meanMode([1, 1, 1, 2, 5]) === false
 * meanMode([]) === false
 *
 * Больше примеров в тестах.
 *
 * @param  {number[]} numbers массив целых положительных чисел.
 * @return {boolean}
 */

class numArr {
  constructor(numbers) {
    this.arr = numbers.slice('');
    this.numMap = this.createNumMap();
    this.maxFreq = Math.max(...this.numMap.values());
    this.averageVal = this.arr.reduce((curSum, elem) => curSum + elem, 0) / this.arr.length;
  }

  createNumMap() {
    return this.arr.reduce((curMap, curElem) => {
      const newValue = curMap.get(curElem) || 0;

      curMap.set(curElem, newValue + 1);
      return curMap;
    }, new Map());
  }

  isEqual() {
    return this.numMap.get(this.averageVal) === this.maxFreq;
  }

  isValid() {
    let count = 0;

    for (const frequency of this.numMap.values()) {
      if (frequency === this.maxFreq) {
        count += 1;
      }
    }
    return count === 1;
  }
}

export function meanMode(numbers) {
  const curArr = new numArr(numbers);

  return curArr.isValid() && curArr.isEqual();
}

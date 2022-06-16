/**
 * Напишите функцию, добавляющую полифил метода flatMap
 * к прототипу Array. Полифил должен полностью реализовывать
 * метод (обратите внимание на передачу контекста, индексы и так далее).
 *
 * Описание метода:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
 *
 * @param  {*} ArrayConstructor конструктор Array
 * @return {Array} Тот же конструктор с добавленным методом flatMap
 */
export const flatMapPolyfill = (ArrayConstructor = Array) => {
  Object.defineProperties(ArrayConstructor.prototype, {
    flatMap: {
      writable: true,
      enumerable: false,
      configurable: true,
      value(fn, context) {
        let mapFunc = fn;

        if (context !== undefined) {
          mapFunc = fn.bind(context);
        }
        return this.reduce((curArr, curElem, index) => {
          const elem = mapFunc(curElem, index);

          let resArr = curArr.slice('');

          if (elem instanceof Array) {
            resArr = curArr.concat(elem);
          } else {
            resArr.push(elem);
          }
          return resArr;
        }, []);
      }
    }
  });
  return ArrayConstructor;
};

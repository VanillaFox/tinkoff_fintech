/**
 * Напишите функцию promiseAll(promises), поведение
 * которой аналогично поведению Promise.all(promises).
 *
 * @param  {Promise[]} promises массив с исходными промисами
 * @return {Promise}
 */

export const promiseAll = promises => {
  let resolvedCount = 0;

  const result = [];

  return new Promise((resolve, reject) => {
    promises.forEach((elem, index) => {
      Promise.resolve(elem).then(res => {
        result[index] = res;
        resolvedCount += 1;
        if (resolvedCount === promises.length) {
          resolve(result);
        }
      }, reject);
    });
  });
};

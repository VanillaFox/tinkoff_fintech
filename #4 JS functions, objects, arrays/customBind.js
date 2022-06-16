/**
 * Напишите функцию customBind(func, context, ...args),
 * дублирующую функциональность Function.prototype.bind
 *
 * Пример:
 * const func = function (argA, argB) { return [this, argA, argB] };
 * const binded = customBind(func, { a: 'a' }, 'b');
 *
 * binded('c'); // [{ a: 'a' }, 'b', 'c']
 *
 * @param  {Function} func передаваемая функция
 * @param  {*}        context контекст
 * @param  {*[]}      args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
export function customBind(func, context, ...arg1) {
  return function result(...arg2) {
    context.fn = func;
    context.fn(...arg1, ...arg2);
  };
}

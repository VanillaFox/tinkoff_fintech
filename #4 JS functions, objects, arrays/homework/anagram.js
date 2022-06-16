/**
 * Напишите функцию anagram(first, second), определяющую,
 * являются ли переданные строки first и second анаграммами.
 *
 * Пример:
 * anagram('просветитель', 'терпеливость') === true
 *
 * Больше примеров в тестах.
 *
 * @param  {string} first первая строка
 * @param  {string} second вторая строка
 * @return {boolean}
 */
export function anagram(first, second) {
  let leftWord = first.toLowerCase().split('');

  let
    rightWord = second.toLowerCase().split('');

  if (leftWord.length !== rightWord.length) {
    return false;
  }
  leftWord = leftWord.sort().join();
  rightWord = rightWord.sort().join();

  return leftWord === rightWord;
}

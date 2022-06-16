/**
 * Напишите функцию capitalize(input), возвращающую копию строки input,
 * в которой каждое слово начинается с заглавной буквы.
 *
 * "Слово" в данном контексте - последовательность юникод-символов из группы "letters".
 * В целях упрощения в тестовых кейсах будут использоваться только строки из латинских букв
 * и кириллицы. Слова с дефисами ("Что-то", "кто-либо" и т.д.) считаются одним словом.
 *
 * capitalize('А роза упала на лапу Азора') === 'А Роза Упала На Лапу Азора'
 * capitalize('Use the force, Luke') === 'Use The Force, Luke'
 *
 * Больше примеров в тестах.
 *
 * @param  {string} input строка с произвольным предложением.
 * @return {string}
 */
export default function capitalize(input) {
  let curArr = input.split(' ');

  for (let i = 0; i < curArr.length; i++) {
    curArr[i] = curArr[i][0].toUpperCase() + curArr[i].slice(1);
  }
  curArr = curArr.join(' ');
  return curArr;
}

// TODO  прописать биекцию для изоморфизма
/**
 * Напишите функцию isIsomorphic(left, right), определяющую,
 * являются ли строки left и right изоморфными.
 *
 * Две строки называются изоморфными, если в строке A можно заменить
 * символы таким образом, чтобы получилась строка B.
 *
 * Каждый конкретный символ может заменяться только на один конкретный
 * символ, в том числе на самого себя. При этом все вхождения символа N
 * могут быть заменены только на символ M.
 *
 * Порядок символов должен остаться неизменным.
 *
 * Пример:
 * isIsomorphic('egg', 'foo') === true
 * isIsomorphic('foo', 'bar') === false
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */

class checkingWord {
  constructor(str) {
    this.word = str.split('');
    this.patternMap = this.createPatternMap();
    this.pattern = this.createPattern().join('.');
  }

  createPattern() {
    const result = [];

    this.word.filter(elem => result.push(this.patternMap.get(elem)));
    return result;
  }

  createPatternMap() {
    let count = 0;

    const curMap = new Map();

    for (let i = 0; i < this.word.length; i++) {
      if (!curMap.has(this.word[i])) {
        curMap.set(this.word[i], count);
        count += 1;
      }
    }
    return curMap;
  }
}

export function isIsomorphic(left, right) {
  if (left.length !== right.length) {
    return false;
  }

  const leftWord = new checkingWord(left);
  const rightWord = new checkingWord(right);

  return leftWord.pattern === rightWord.pattern;
}

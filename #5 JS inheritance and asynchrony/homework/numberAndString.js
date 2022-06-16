/**
 * Создайте класс, обладающий следующим поведением:
 * const values = ['hello', 'javascript', 'world'];
 * const instances = values.map(str => new NumberAndString(str));
 *
 * const resultConcatenation = instances.join(' '); // == 'hello javascript world'
 * const resultCharCount = instances.reduce((obj, memo) => memo + obj, 0); // == 20
 *
 * @class NumberAndString
 * @param {String} str - initial value
 */
export class NumberAndString {
  constructor(word) {
    this.str = word;
    this.num = word.length;
  }

  valueOf() {
    return this.num;
  }

  toString() {
    return this.str;
  }
}

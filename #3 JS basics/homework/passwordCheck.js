/**
 * Напишите функцию passwordCheck(password), принимающую строку password
 * и проверяющую её на сложность. Если сложность достаточна, вернуть true,
 * иначе - false.
 *
 * Достаточной сложность считается, если в строке:
 * - Есть хотя бы одно число
 * - Есть хотя бы две буквы латинского алфавита в разных регистрах
 * - Есть хотя бы один символ из ряда ! ? . , + - * / =
 * - Содержит не менее 10 символов
 *
 * Пример:
 * passwordCheck('Nagibator777') === false
 * passwordCheck('password') === false
 * passwordCheck('This is the 7th password I have come up with!') === true
 *
 * Больше примеров в тестах.
 *
 * @param  {string} password пароль
 * @return {boolean}
 */
export default function passwordCheck(password) {
  const specialChars = /[.+/*?!,=-]/;

  const lengthCheck = n => n.length >= 10;

  const numberContent = n => Boolean(n.match(/\d/));

  const specialCharContent = n => Boolean(n.match(specialChars));

  function registerCheck(str) {
    const numSpChars = /[\d.+/*?!,=-]/g;

    const curString = str.replace(numSpChars, '').split('');

    let UpperCase = false;

    let LowCase = false;

    for (let i = 0; i < curString.length; i++) {
      if (curString[i].toUpperCase() === curString[i]) {
        UpperCase = true;
      } else {
        LowCase = true;
      }
      if (UpperCase && LowCase) {
        return true;
      }
    }
    return false;
  }

  const isValid = str => lengthCheck(str) && numberContent(str) && specialCharContent(str) && registerCheck(str);

  return isValid(password);
}

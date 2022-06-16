
import {Validators, AbstractControl, ValidatorFn} from '@angular/forms';

export function isValidPwd(field: AbstractControl): Validators | null{
  if(!field.value){
    return null;
  }
  if(!passwordCheck(field.value)){
    return {
      other: 'Пароль должен содержать хотя бы одну прописную и одну латинскую букву,\nчисло, а также один из спецсимволов: _!#+-$ ',
    }
  }
  return null;
}

export const isSamePwd: ValidatorFn = (form: AbstractControl):  Validators | null => {
  if(form.get('firstPwd')?.value !== form.get('secondPwd')?.value){
    return {
      ans: true,
    }
  }
  return null;
}

function passwordCheck(password: string):boolean {
  const specialChars = /[_!#\+\-\$]/;

  const numberContent: (n:string)=> boolean = n => Boolean(n.match(/\d/));

  const specialCharContent: (n:string)=> boolean = n => Boolean(n.match(specialChars));

  function registerCheck(str: string): boolean {
    const numSpChars = /[\d.+/*?!,=-]/g;
    const latinChars = /[a-zA-Z]/;
    const curString = str.replace(numSpChars, '').split('');

    let UpperCase = false;
    let LowCase = false;

    for (let i = 0; i < curString.length; i++) {
      if( latinChars.test(curString[i])){
        if (curString[i].toUpperCase() === curString[i] ) {
          UpperCase = true;
        } else {
          LowCase = true;
        }
      }
      if (UpperCase && LowCase) {
        return true;
      }
    }
    return false;
  }
  const isValid: (str:string)=> boolean = str => numberContent(str) && specialCharContent(str) && registerCheck(str);

  return isValid(password);
}

import {Validators, AbstractControl} from '@angular/forms';


export function isFillInput(field: AbstractControl): Validators | null {
  return field.value ? null :
    {
      other: 'Поле обязательно для заполнения'
    };
}


export function isValidName(field: AbstractControl): Validators | null {
  if(!field.value){
    return null;
  }
  if(field.value.length < 3){
    return {
      other: 'Минимальная длина — 3',
    };
  }
  if(field.value.length > 80){
    return {
      other: 'Максимальная длина — 80',
    };
  }
  return null;
}


export function isValidCost(field: AbstractControl): Validators | null {
  if(Number.isNaN(Number(field.value))){
    return {
      other: 'Разрешены лишь цифры',
    };
  }
  if(field.value < 10){
    return {
      other: 'Минимальное значение - 10',
    };
  }
  if(field.value > 1000){
    return {
      other: 'Максимальное значение — 1000',
    };
  }
  return null;
}

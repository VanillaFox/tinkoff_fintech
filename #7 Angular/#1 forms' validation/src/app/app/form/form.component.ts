import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { isSamePwd, isValidPwd } from 'src/shared/models/validators';
import {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';
import {TuiValidationError} from '@taiga-ui/cdk';
import { Purchase } from 'src/shared/models/Purchase';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less'],
  providers: [
    {
        provide: TUI_VALIDATION_ERRORS,
        useValue: {
            required: 'Поле обязательно к заполнению',
            email: 'Введите адрес своей электронной почты',
            maxlength: 'Максимально возможное число символов - 100',
            minlength: 'Минимальная длина пароля - 5 символов'
        },
    },
],
})

export class FormComponent implements OnInit {
  email: string = '';
  password: string ='';
  form: FormGroup;
  @Output() add = new EventEmitter<Purchase>();
  ngOnInit(): void {
    this.form = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.maxLength(100), Validators.email]),
        firstPwd: new FormControl(null, [Validators.required, Validators.minLength(5), isValidPwd]),
        secondPwd: new FormControl(null, [Validators.required]),
        checkBox: new FormControl(false, Validators.requiredTrue),
      }, {validators: isSamePwd});
  }
  error = new TuiValidationError('Пароли не совпадают');

  isValidForm(): void{
    if(this.form.valid){
      this.add.emit({email: this.email, pwd: this.password});
      this.form.reset();
    }
    else{
      this.form.markAllAsTouched();
    }
  }
}

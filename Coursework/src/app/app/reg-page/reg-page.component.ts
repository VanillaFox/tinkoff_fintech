import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiValidationError } from '@taiga-ui/cdk';
import { isSamePwd, isValidPwd } from 'src/shared/validators';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.less'],
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: "Поле обязательно к заполнению",
        email: "Неверный формат почты",
      },
    },
  ],
})
export class RegPageComponent implements OnInit {
  form: FormGroup;

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      loginInput: new FormControl(null, [Validators.required]),
      emailInput: new FormControl(null, [Validators.required, Validators.email]),
      firstPwdInput: new FormControl(null, [Validators.required, isValidPwd]),
      secondPwdInput: new FormControl(null, [Validators.required]),
    }, {validators: isSamePwd});
  }
  error = new TuiValidationError('Пароли не совпадают');

  reg(){
    if(this.form.valid){
      this.service.registration(this.form.get('emailInput')?.value, this.form.get('firstPwdInput')?.value,this.form.get('loginInput')?.value);
      this.form.reset();
    }
    else{
      this.form.markAllAsTouched();
    }
    console.log("TEST", this.form.valid);
  }
}

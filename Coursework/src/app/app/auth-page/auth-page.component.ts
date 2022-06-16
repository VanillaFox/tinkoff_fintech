import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiValidationError } from '@taiga-ui/cdk';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { AppService } from 'src/services/app.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.less'],
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: "Поле обязательно к заполнению",
        email: "Неверный формат почты",
      },
    },
  ]
})

export class AuthPageComponent implements OnInit {
  form: FormGroup;
  wrongEnter: boolean;

  constructor(private service: AppService) {}
  ngOnInit(): void {
    this.wrongEnter = false;
    this.form = new FormGroup({
      loginInput: new FormControl(null, [Validators.required, Validators.email]),
      passwordInput: new FormControl(null, Validators.required),
    });
  }

  error = new TuiValidationError('Неправильный логин или пароль');


  async enter(){
    if(this.form.valid){
      this.wrongEnter = await this.service.logIn(this.form.get('loginInput')?.value, this.form.get('passwordInput')?.value);
    }
    this.form.markAllAsTouched();
  }
}

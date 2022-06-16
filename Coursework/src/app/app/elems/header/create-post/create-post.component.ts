import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.less'],
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: "Поле обязательно к заполнению",
      }
    }
  ]
})

export class CreatePostComponent implements OnInit {
  form: FormGroup;
  @Output() cancelAction = new EventEmitter<void>();
  @Output() createPostAction = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      postText: new FormControl(null, Validators.required),
    })
  }

  cancel(){
    this.cancelAction.emit();
  }

  createPost(){
    if(this.form.valid){
      this.createPostAction.emit(this.form.get('postText')?.value);
      this.form.reset();
    }
    else{
      this.form.markAllAsTouched();
    }
  }
}

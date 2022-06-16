import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Card } from 'src/shared/models/Card';

@Component({
  selector: 'app-dictionary-add',
  templateUrl: './dictionary-add.component.html',
  styleUrls: ['./dictionary-add.component.less']
})
export class DictionaryAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    termInput: new FormControl(),
    descriptionInput: new FormControl(),

  })

  @Output() addAction = new EventEmitter<Card>();
  @Output() cancelAction = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  add(): void{
    this.addAction.emit({
      term: this.form.get('termInput')?.value,
      description: this.form.get('descriptionInput')?.value,
      id: ''
    });
  }

  cancel(): void{
    this.cancelAction.emit();
    this.form.reset();
  }
}

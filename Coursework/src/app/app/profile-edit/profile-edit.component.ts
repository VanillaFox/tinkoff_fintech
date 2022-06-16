import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/services/app.service';
import { NavigationService } from 'src/services/navigation.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileEditComponent implements OnInit, OnDestroy {
  specializations = [
    'Game Designer',
    'Full stack',
    'Backend',
    'Frontend',
    'Game development',
    'Machine learning',
    'SRE',
    'Devops',
    'Solution architect',
    'Embedded engineer'
  ];

  tools = [
    'Python',
    'C++',
    'Latex',
    'Golang',
    'Angular',
    'Prolog',
    'PyTorch',
    'Unity'
  ];

  form: FormGroup;
  login: string;
  subscribe: any;

  constructor(public service: AppService, private navigationService: NavigationService) {
   }

   ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(),
      specialization: new FormControl(),
      age: new FormControl(),
      city: new FormControl(),
      about: new FormControl(),
      tools: new FormControl()
    });
    this.login = `${localStorage.getItem('userLogin')}`;
    this.subscribe = this.service.getData().subscribe((item) => {
      this.form.patchValue(item)
    });
  }

  test(){
    this.service.editProfile(this.form.value);
    this.navigationService.toProfile(this.login);
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { AppService } from 'src/services/app.service';
import { TeamService } from 'src/services/team.service';

@Component({
  selector: 'app-reg-team-form',
  templateUrl: './reg-team-form.component.html',
  styleUrls: ['./reg-team-form.component.less'],
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: "Поле обязательно к заполнению",
      }
    }
  ]
})
export class RegTeamFormComponent implements OnInit {
  form: FormGroup;

  constructor(public service: AppService, private teamService: TeamService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      city: new FormControl(null),
      website: new FormControl(null),
    })
  }

  cancel(){
    this.service.setCreateTeam(false);
  }

  createTeam(){
    if(this.form.valid){
      this.service.setCreateTeam(false);
      this.teamService.createTeam(this.form.value);
      this.form.reset();
    }
    else{
      this.form.markAllAsTouched();
    }
  }

}

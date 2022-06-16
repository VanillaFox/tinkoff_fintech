import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'src/services/app.service';
import { TeamService } from 'src/services/team.service';
import { Team } from 'src/shared/IDate';

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.less']
})
export class CommandListComponent implements OnInit {
  teamCards: Observable<Team[]>;

  constructor(private service: AppService, private teamService: TeamService) { }

  changeCreateTeamFlag(){
    this.service.setCreateTeam(true);
  }

  ngOnInit(): void {
    this.teamCards = this.teamService.getAllTeams();
  }

}

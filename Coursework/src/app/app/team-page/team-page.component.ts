import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from 'src/services/app.service';
import { TeamService } from 'src/services/team.service';
import { Team } from 'src/shared/IDate';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.less']
})
export class TeamPageComponent implements OnInit {
  teamInfo: Observable<Team>

  constructor(private service: TeamService) { }

  ngOnInit(): void {
    this.teamInfo = this.service.getTeamData();
  }

}

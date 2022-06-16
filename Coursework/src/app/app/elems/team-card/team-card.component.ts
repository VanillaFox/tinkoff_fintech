import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/shared/IDate';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.less']
})
export class TeamCardComponent implements OnInit {
  @Input() team: Team;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, Output } from '@angular/core';
import { GamedataService, Team } from '../../services/gamedata.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(private dataService: GamedataService) { }

  @Input()
  team: Team;

  ngOnInit(): void {

  }

  dataChanged(_: Event) {
    this.dataService.saveData();
  }
}

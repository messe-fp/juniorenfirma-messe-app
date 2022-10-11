import { Component, OnInit } from '@angular/core';
import { GamedataService, GroupWithScores } from 'src/app/shared/services/gamedata.service';


@Component({
  selector: 'app-group-overview',
  templateUrl: './group-overview.component.html',
  styleUrls: ['./group-overview.component.scss']
})
export class GroupOverviewComponent implements OnInit {

  constructor(private dataService: GamedataService) { }

  groups: GroupWithScores[];

  ngOnInit(): void {
    this.groups = this.dataService.groupsWithScores;
  }

}

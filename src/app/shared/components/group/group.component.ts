import { Component, Input, OnInit } from '@angular/core';
import { GroupWithScores } from '../../services/gamedata.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  constructor() { }

  @Input()
  group: GroupWithScores;

  ngOnInit(): void {
  }

}

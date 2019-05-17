import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/app-data-service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService
      .getAll<any[]>('team')
      .subscribe((data: any[]) => this.teams = data,
        error => () => {
          console.log('error');
        },
        () => {
          console.log('success');
          console.log(JSON.stringify(this.teams));
        });
  }

}

import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/app-data-service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService
      .getAll<any[]>('event')
      .subscribe((data: any[]) => this.events = data,
        error => () => {
          console.log('error');
        },
        () => {
          console.log('success');
          console.log(JSON.stringify(this.events));
        });
  }

}
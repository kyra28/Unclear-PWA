import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/app-data-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsList: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService
      .getAll<any[]>('news')
      .subscribe((data: any[]) => this.newsList = data,
        error => () => {
          console.log('error');
        },
        () => {
          console.log('success');
          console.log(JSON.stringify(this.newsList));
        });
  }
}

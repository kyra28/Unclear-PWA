import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../../services/app-data-service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  @Input()
  event: any;

  match: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    if (this.event.type === 'Match') {
      this.dataService
      .get<any[]>('match',this.event.type_id)
      .subscribe((data: any[]) => this.match = data,
        error => () => {
          console.log('error');
        },
        () => {
          console.log('success');
          console.log(JSON.stringify(this.match));
        });
      }
  }

}
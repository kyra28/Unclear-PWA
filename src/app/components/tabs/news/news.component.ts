import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/app-data-service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input()
  news: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      if (params && params.id) {
        this.dataService
        .get<any[]>('news', params.id)
        .subscribe((data: any[]) => this.news = data,
          error => () => {
            console.log('error');
          },
          () => {
            console.log('success');
            console.log(JSON.stringify(this.news));
          });
      }
    });
  }

}

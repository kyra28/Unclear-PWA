import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../services/app-data-service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  partners: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService
    .getAll<any[]>('partner')
    .subscribe((data: any[]) => this.partners = data,
      error => () => {
        console.log('error');
      },
      () => {
        console.log('success');
        console.log(JSON.stringify(this.partners));
      });
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {

  @Input()
  partner: any;

  constructor() { }


  ngOnInit() {
    console.log(JSON.stringify(this.partner));
  }

}

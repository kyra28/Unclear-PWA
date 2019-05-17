import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {SwUpdate} from '@angular/service-worker';
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwa-client';
  constructor(public router: Router, private swUpdate: SwUpdate) {}


  ngOnInit() {
    $('body').addClass('df');
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('New version available. Load New Version? ')) {
          window.location.reload();
        }
      });
    }
  }
}

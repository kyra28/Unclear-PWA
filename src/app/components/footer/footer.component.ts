import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { DataService } from '../../services/app-data-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  readonly VAPID_PUBLIC_KEY = 'BH0QoEcQAA5uczT_sAUIMvy_1Kdjn8AEWPdUFSFHxp9y9fzTRYSkMZE0Eh6Sz3JZwJ7PFuiCOc9VZPceUkj2hYc';
  sub: PushSubscription;

  constructor(private swPush: SwPush, private dataService: DataService) { }

  ngOnInit() {
  }

  subscribeToNotifications() {

    this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY
    })
    .then(sub => {

        this.sub = sub;
        this.dataService
        .add<any[]>('notification', sub)
        .subscribe(
          () => console.log('Sent push subscription object to server.'),
          err =>  console.log('Could not send subscription object to server, reason: ', err)
        );

        console.log('Notification Subscription: ', sub);

    })
    .catch(err => console.error('Could not subscribe to notifications', err));

}

}

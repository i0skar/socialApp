import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { notificationFriends } from './notificationFriends';
import { notificationMails } from './notificationMails';
import { Notification } from './models/notification.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  @Input() mode: string;
  @Output() toggle = new EventEmitter();

  notifications: Notification[];
  control: FormControl = new FormControl('');

  constructor() { }

  NOTIFICATION_FRIENDS = notificationFriends;
  NOTIFICATION_MAILS = notificationMails;
  
  ngOnInit() {
    // if (this.mode === 'friends') {
    //   this.notifications = NOTIFICATION_FRIENDS;
    // } else if (this.mode === 'mails') {
    //   this.notifications = NOTIFICATION_MAILS;
    // }
  }

  receiveData($event, list) {
    list.splice(list.findIndex(item => item.id === $event), 1);
  }

}

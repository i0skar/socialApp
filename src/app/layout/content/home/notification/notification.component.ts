import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Notification } from '../models/notification.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  status: boolean;

  @Input() notification: Notification;
  @Output() deleteEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  delete(id: number) {
    this.deleteEvent.emit(id);
  }

}

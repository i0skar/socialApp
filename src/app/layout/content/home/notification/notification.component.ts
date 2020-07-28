import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  status: boolean;

  @Input() notification;
  @Output() deleteEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  delete(id: number) {
    this.deleteEvent.emit(id);
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() mails = new EventEmitter<string>();
  @Output() friends = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  setMails() {
    this.mails.emit('mails');
  }

  setFriends() {
    this.friends.emit('friends');
  }

}

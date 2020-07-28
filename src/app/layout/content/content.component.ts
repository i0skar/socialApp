import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer;
  mode = 'friends';

  constructor() { }

  ngOnInit() {
  }

  setMails() {
    this.mode = 'mails';
    this.drawer.close();
  }

  setFriends() {
    this.mode = 'friends';
    this.drawer.close();
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ContentComponent } from './layout/content/content.component';
import { HomeComponent } from './layout/content/home/home.component';
import { SidenavComponent } from './layout/content/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { NotificationComponent } from './layout/content/home/notification/notification.component';

@NgModule({
   declarations: [
      AppComponent,
      LayoutComponent,
      ContentComponent,
      HomeComponent,
      SidenavComponent,
      NotificationComponent
   ],
   imports: [
      BrowserModule,
      MatSidenavModule,
      BrowserAnimationsModule,
      MatSelectModule,
      MatButtonModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

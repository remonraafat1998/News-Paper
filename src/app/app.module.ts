import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http'
import { NewsModule } from './modules/news/news.module';
import { HomeComponent } from './mainPage/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SportsModule } from './modules/sports/sports.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NewsModule,
    SportsModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ FontAwesomeModule,SharedModule]
})
export class AppModule { }

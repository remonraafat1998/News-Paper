import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportsRoutingModule } from './sports-routing.module';
import { SportsComponent } from './components/sports/sports.component';
import { SharedModule } from '../shared/shared.module';
import { NewsModule } from '../news/news.module';
import { DetailsComponent } from './components/details/details.component';


@NgModule({
  declarations: [
    SportsComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    SportsRoutingModule,
    SharedModule,
    NewsModule
  ]
})
export class SportsModule { }

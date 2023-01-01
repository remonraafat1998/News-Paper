import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllNewsComponent } from './components/all-news/all-news.component';
import { SingleNewsComponent } from './components/single-news/single-news.component';
import { DetailNewsComponent } from './components/detail-news/detail-news.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AllNewsComponent,
    SingleNewsComponent,
    DetailNewsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    AllNewsComponent,
    SingleNewsComponent,
    DetailNewsComponent]
})
export class NewsModule { }

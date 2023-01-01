import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './mainPage/home/home.component';
import { DetailNewsComponent } from './modules/news/components/detail-news/detail-news.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'sport', loadChildren:()=> import('./modules/sports/sports.module').then(sport=>sport.SportsModule)},
  {path: 'articles/:id/:title', component: DetailNewsComponent},
  {path: '**', redirectTo:"" ,pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component,OnInit } from '@angular/core';
import { GetApiNewsService } from 'src/app/modules/shared/services/get-api-news.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {
loading:boolean = false
dataObject:any = {}
dataSport:any[] = []
constructor(private getDataSports:GetApiNewsService){}
ngOnInit(): void {
this.getData()
}

getData()
{
 this.getDataSports.getCategory(localStorage.getItem('_SelectCountry')!).subscribe((data:any)=> {
  this.dataObject = data.articles
  this.dataSport = this.dataObject
 })
}
}

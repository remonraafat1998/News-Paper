import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetApiNewsService } from 'src/app/modules/shared/services/get-api-news.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
id?:any
loading?:any;
getObjSport:object = {}
getSport:any[] = []
  constructor(private activatedR:ActivatedRoute,private serv:GetApiNewsService){
  this.id = this.activatedR.snapshot.paramMap.get('index')
  console.log(this.id)
}
ngOnInit(): void {
this.getSportNews()
}

getSportNews()
{
  let count = localStorage.getItem('_SelectCountry')!
  this.serv.getCategory(count).subscribe((data:any)=> {
   this.getObjSport= data.articles[this.id]
   this.getSport.push(this.getObjSport)
  })

}
}

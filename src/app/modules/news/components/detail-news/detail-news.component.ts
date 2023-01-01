import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetApiNewsService } from 'src/app/modules/shared/services/get-api-news.service';

@Component({
  selector: 'app-detail-news',
  templateUrl: './detail-news.component.html',
  styleUrls: ['./detail-news.component.scss']
})
export class DetailNewsComponent implements OnInit,OnDestroy {
  id:any;
  loading:boolean = false
  detailNews:object = {}
  getNews:any[] = []
  unDetail?:Subscription
constructor(private activRout:ActivatedRoute,private service:GetApiNewsService){
 this.id = this.activRout.snapshot.paramMap.get('id')
}

ngOnInit(): void {
  this.getNewsSelect()
}

getNewsSelect()
{
  let count = localStorage.getItem('_SelectCountry')!
  this.service.getSpecificCountry(count).subscribe((data:any)=> {
    this.detailNews = data.articles[this.id]
    console.log( this.detailNews)
    this.getNews.push(this.detailNews)
  })
}

ngOnDestroy(): void {
  this.unDetail?.unsubscribe()
}
}

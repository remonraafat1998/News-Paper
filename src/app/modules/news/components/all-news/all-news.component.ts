import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetApiNewsService } from 'src/app/modules/shared/services/get-api-news.service';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.scss']
})
export class AllNewsComponent implements OnInit,OnDestroy {
  dataMain:any[] = []
  loading:boolean = false
  allCountry = [{value:'ru',name:'Russia'},{value:'tr',name:'Turky'},{value:'us',name:'USA'}]
  unspecif?: Subscription
  unmain?: Subscription
  error?:string = ""
 constructor(private getApi:GetApiNewsService){}

  ngOnInit(): void {
    this.defaultCountry()
  }
// selectCountry($event)
selectCountry(event:any)
{
    let selectC = event.target.value
    localStorage.setItem('_SelectCountry',selectC)
     this.loading = true
     this.getApi.getSpecificCountry(selectC).subscribe((data:any)=> {
     this.dataMain = data.articles
     this.loading = false
    },err=>alert(this.error = err))
}
// defalut county
defaultCountry()
{
    this.loading = true
    localStorage.setItem('_SelectCountry','eg')
    this.getApi.getMainCountry().subscribe((data:any)=> {
    this.dataMain = data.articles
    this.loading = false
  },err => alert(this.error = err))
}

ngOnDestroy(): void {
  this.unmain?.unsubscribe();
  this.unspecif?.unsubscribe();
}
}

import { Component, OnInit } from '@angular/core';
import {faYoutube,faFacebook,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
faY = faYoutube
faF= faFacebook
faT = faTwitter
faI = faInstagram
dateYear?:Date;
date?:any;
ngOnInit():void {

  this.getYear()
}

getYear(){
  this.dateYear = new Date()
  let date = this.dateYear?.getFullYear()
   this.date = date
}
}

import { Component, OnInit } from '@angular/core';
import {faFaceFrown} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  DateToday?:Date;
  faFaceFrown = faFaceFrown
  constructor(){}
  ngOnInit(): void {
  // Date Now
  this.DateToday = new Date()
  // Turn Func
  this.setOpacityClass()
  //  Default
}
  // hidden top header after scroll
  setOpacityClass()
   {
    let nav = document.querySelector('.nav');
    let dateHide = document.querySelector('header')
    window.onscroll = ()=> {
    if (window.pageYOffset > 50)
    {
      nav?.classList.add('opac');
      dateHide?.classList.add('hide-Date');
    }else
    {
      nav?.classList.remove('opac');
      dateHide?.classList.remove('hide-Date');
    }
  }
}
}

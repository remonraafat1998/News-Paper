import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetApiNewsService {

  constructor(private HttpClint:HttpClient) { }
  getMainCountry()
  {
    return this.HttpClint.get('https://newsapi.org/v2/top-headlines?country=eg&apiKey=5ba24945bc404d1da9259cd66e02479b')
  }
  getSpecificCountry(selectCountry:string)
  {
    return this.HttpClint.get('https://newsapi.org/v2/top-headlines?country='+selectCountry+'&apiKey=5ba24945bc404d1da9259cd66e02479b')
  }

  getCategory(country:any)
  {
    return this.HttpClint.get('https://newsapi.org/v2/top-headlines?country='+country+'&category=sport&apiKey=5ba24945bc404d1da9259cd66e02479b')
  }
}

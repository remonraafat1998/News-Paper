import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetApiNewsService {

  constructor(private HttpClint:HttpClient) { }
  getMainCountry()
  {
    return this.HttpClint.get(environment.apikey+'eg&apiKey=5ba24945bc404d1da9259cd66e02479b')
  }
  getSpecificCountry(selectCountry:string)
  {
    return this.HttpClint.get(environment.apikey+selectCountry+'&apiKey=5ba24945bc404d1da9259cd66e02479b')
  }

  getCategory(country:any)
  {
    return this.HttpClint.get(environment.apikey+country+'&category=sport&apiKey=5ba24945bc404d1da9259cd66e02479b')
  }
}


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountrystatecityService {

  constructor(private http: HttpClient) { }

    getCountryData(){
      let apiurl="http://api.airvisual.com/v2/countries?key=6dcf459f-c313-40ab-92c4-a53f2e82fea5";
      
      return this.http.get(apiurl);
    }
  
    getStateData(ctry:string){
      let apiurl= `http://api.airvisual.com/v2/states?country=${ctry}&key=6dcf459f-c313-40ab-92c4-a53f2e82fea5`;
      return this.http.get(apiurl);
    }
    getCityData(ctry:any,st:any){
      let apiurl= `http://api.airvisual.com/v2/cities?state=${st}&country=${ctry}&key=6dcf459f-c313-40ab-92c4-a53f2e82fea5`;
      return this.http.get(apiurl);
    }
}
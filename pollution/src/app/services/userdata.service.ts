import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

  export class UserdataService {


    constructor( private http:HttpClient) { 
      
    }
  
    getCountryData(){
      let apiurl="http://api.airvisual.com/v2/countries?key=1408169b-1a0d-4e39-a303-6f376b0e1fa2";
      
      return this.http.get(apiurl);
    }
  
    getStateData(){
      let apiurl= "http://api.airvisual.com/v2/states?country={{COUNTRY_NAME}}&key=1408169b-1a0d-4e39-a303-6f376b0e1fa2";
    }
  
    
  }


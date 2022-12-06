import { HttpClient } from '@angular/common/http';
import { TemplateBindingParseResult } from '@angular/compiler';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http: HttpClient) { }


  baseServerUrl ="http://localhost:5000/api/";
  apiurl = "https://localhost:7264/api/WatchList/add";

  registerUser(user: Array<any>){
    return this.http.post(this.baseServerUrl + 'User/CreateUser',{
      name: user[0],
      userName: user[1],
      email: user[2],
      password: user[3]
    } ,{responseType: 'text',});
  }

  loginUser(loginInfo: Array<any>){
    return this.http.post(this.baseServerUrl + 'User/LoginUser',{
      email: loginInfo[0],
      password: loginInfo[1]
    } ,{responseType: 'text',});
  }

  updateUser(updateInfo: Array<any>){
    return this.http.post(this.baseServerUrl + 'User/UpdateUser',{
      email: updateInfo[0],
      password: updateInfo[1]
    } ,{responseType: 'text',});
  }
  addWatchlist(watchlistinfo:Array<any>){
    return this.http.post(this.apiurl,{
      userName: watchlistinfo[0],
      country: watchlistinfo[1],
      state: watchlistinfo[2],
      city: watchlistinfo[3]
    },{responseType:'text',}); 
  }


  getUserData(name:string){
    let apiurl=`https://localhost:7264/api/WatchList/${name}`;    
    return this.http.get(apiurl);
  }
  delUserData(name:string,u:string){
    let apiurl=`https://localhost:7264/api/WatchList/${name},${u}`;    
    return this.http.get(apiurl);
  }

  isLoggedin():boolean{
    return localStorage.getItem("token")? true:false;
  }

  removeToken(){
    localStorage.removeItem("token");
  }
  removeUsername(){
    localStorage.removeItem("username");
    sessionStorage
  }




  }


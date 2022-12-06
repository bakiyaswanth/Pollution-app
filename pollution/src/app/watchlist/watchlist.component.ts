import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent{
  message:any;
  userData: any=[];
  city:any;
  d:any;

  constructor(private watch: AuthService,private router: Router){
    this.message=localStorage.getItem("username")
    this.watch.getUserData(this.message).subscribe((temp: any)=>{   
    this.userData=temp;
    console.log(this.city)
    localStorage.setItem("city",this.city)

    console.log(this.userData);    
   })

   }
   delWatch(){
    this.message=localStorage.getItem("username")
    this.d=localStorage.getItem("city")
    console.log(this.d,this.message)
    this.watch.delUserData(this.d,this.message).subscribe()
   }


  }






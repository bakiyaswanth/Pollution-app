import { Component,Input,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    this.message=localStorage.getItem("username");
  }


  message: any;
  @Input() data:string='';
  constructor(public Authservice:AuthService,private router:Router){
    
  }
  logout(){
    this.Authservice.removeToken();
    this.Authservice.removeUsername();
    this.router.navigateByUrl('/home');
  }


  checkLogout(){
    return this.Authservice.isLoggedin();

  }

}

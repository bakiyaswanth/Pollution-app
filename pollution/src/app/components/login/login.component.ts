import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  temp: any;
  emp:any;
  constructor(private loginAuth: AuthService,private router: Router){

  }

  isUserValid: boolean= false;

  loginSubmited(){
    this.loginAuth.loginUser([this.loginForm.value.email,
    this.loginForm.value.password]).subscribe(res =>{
      if (res=='Failure'){
        this.isUserValid= false;
        alert('Login Unsuccessful');

      }else{
        this.emp=res;
        console.log(this.emp)
        localStorage.setItem("username",this.emp)
        this.isUserValid=true;
        /* alert('Hello '+ this.emp); */
        this.temp=true;
        const user="hello";
        localStorage.setItem('token',user)
        this.router.navigateByUrl('home')

      }     

    });
}
  
  
  loginForm = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.pattern(/(?=.*[a-z]+.*)(?=.*[A-Z]+.*)(?=.*\d+.*)(?=.*[-[!“#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+.*)(?!.*(.)\1\1\1.*)(?!.*(.{3}).*\2.*).{8,256}$/)]),
  });
  get email(): FormControl{
    return this.loginForm.get('email') as FormControl;

  }
  get password(): FormControl{
    return this.loginForm.get('password') as FormControl;
    
  }
  ngOnInit():void{
       console.log(this.emp)
  }

  

}

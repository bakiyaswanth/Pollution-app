import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {
  temp: any;
  emp:any;
  constructor(private updateAuth: AuthService,private router: Router){


  }isUserValid: boolean= false;

  updateSubmited(){
    this.updateAuth.updateUser([this.updateForm.value.email,
    this.updateForm.value.password]).subscribe(res =>{
      if (res=='Failure'){
        this.isUserValid= false;
        alert('Error');
      }else{        
        this.isUserValid=true;
        alert('Password Changed');
        this.router.navigateByUrl('Watchlist')        
      }     

    });
}
  
  
  updateForm = new FormGroup({
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.pattern(/(?=.*[a-z]+.*)(?=.*[A-Z]+.*)(?=.*\d+.*)(?=.*[-[!“#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+.*)(?!.*(.)\1\1\1.*)(?!.*(.{3}).*\2.*).{8,256}$/)]),
  });
  get email(): FormControl{
    return this.updateForm.get('email') as FormControl;

  }
  get password(): FormControl{
    return this.updateForm.get('password') as FormControl;
    
  }
  ngOnInit():void{
       console.log(this.emp)
  }

  

}
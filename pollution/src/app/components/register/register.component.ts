import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  repeatPass: string ='none';
  displayMsg:string='';
  isAccountCreated: boolean =false;
  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit(): void{ }

  registerForm =new FormGroup({
    name: new FormControl("",[Validators.required, Validators.minLength(3),Validators.pattern('[\ A-Za-z]+')]),
    userName: new FormControl("",[Validators.required,Validators.minLength(4)]),
    email: new FormControl("",[Validators.required,Validators.email]),
    password: new FormControl("",[Validators.required,Validators.pattern(/(?=.*[a-z]+.*)(?=.*[A-Z]+.*)(?=.*\d+.*)(?=.*[-[!“#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+.*)(?!.*(.)\1\1\1.*)(?!.*(.{3}).*\2.*).{8,256}$/)])
  });

  registerSubmited(){
   console. log(this.registerForm.get("name"));
   this.authService.registerUser([
    this.registerForm.value.name,
    this.registerForm.value.userName,
    this.registerForm.value.email,
    this.registerForm.value.password
  ]).subscribe(res => {
    if(res=='Success'){
      this.displayMsg = 'Account created successfully';
      this.isAccountCreated= true;
    }else if (res== 'Already Exits'){
      this.displayMsg = 'Account already exist'
      this.isAccountCreated= true;
    }else {
      this.displayMsg = 'Something went wrong';
      this.isAccountCreated= false;
    }
    this.router.navigateByUrl('login')
    console.log(res);
   });
  } 
 
  get name(): FormControl{
    return  this.registerForm.get("name") as FormControl;
  }

  get userName(): FormControl{
    return  this.registerForm.get("userName") as FormControl;
  }
  get email(): FormControl{
    return  this.registerForm.get("email") as FormControl;
  }
  get password(): FormControl{
    return  this.registerForm.get("password") as FormControl;
  }
}

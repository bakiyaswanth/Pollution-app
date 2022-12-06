import { Component } from '@angular/core';
import { CountrystatecityService } from '../../services/countrystatecity.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'api-call-withkey';
userData:any=[]; 
country:any=[];
state:any=[];
city:any=[];
ctr='';
st='';
ct='';
v1:any;
v2='';
v3='';
message:any;
countrySelected:any;
stateSelected:any;
citySelected:any;
  router: any;

  constructor( private apiservice :CountrystatecityService,private watchService: AuthService){
    this.apiservice.getCountryData().subscribe((temp: any)=>{   
      this.userData=temp;
      this.country= this.userData.data;
      console.log(this.userData.data);
      
     })
  }
  

  onCountrySelected(countrynam: any){
    this.apiservice.getStateData(countrynam).subscribe((temp: any)=>{   
      this.userData=temp;
      console.log(this.countrySelected);
      this.state= this.userData.data;
      console.log(this.userData.data);
     })
  }

  onStateSelected(countryparam = this.countrySelected, stateparam = this.stateSelected){
    this.apiservice.getCityData(countryparam,stateparam).subscribe((temp: any)=>{   
      this.userData=temp;
      console.log(this.countrySelected);
      console.log(this.stateSelected)
      this.city= this.userData.data;
      console.log(this.userData.data);
     })
    }

    getc(val:string){
      this.ctr=val;
      console.log(this.ctr);
    }
    getst(val:string){
      this.st=val;
      console.log(this.ctr);
    }
    getct(val:string){
      this.ct=val;
      console.log(this.ct);
    }

    getPollutionData(){
      fetch(`http://api.airvisual.com/v2/city?city=${this.citySelected}&state=${this.stateSelected}&country=${this.countrySelected}&key=6dcf459f-c313-40ab-92c4-a53f2e82fea5`)
      .then(response=>response.json())
      // .then(data=>console.log(data))
      .then(data=>{this.setPollutionData(data);})
    }

    addWatch(){
      this.watchService.addWatchlist([
        this.message=localStorage.getItem("username"),
        this.countrySelected,
        this.stateSelected,
        this.citySelected
     ]).subscribe(res => { 
      alert('Watchlist Added');
      console.log(res);
     });

    }
    setPollutionData(d: any){
      // this.PollutionData = data;
      this.v1=d.data.current.pollution.aqius;
      this.v2=d.data.city;
      this.v3=d.data.country;
      console.log(this.v1)
    }

    logout(){
      this.watchService.removeToken();
      this.watchService.removeUsername();
      this.router.navigateByUrl('/home');
    }
    checkLogout(){
      return this.watchService.isLoggedin();
  
    }

  
}
 

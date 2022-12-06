import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { AuthGuard } from './services/auth.guard';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'changepassword', component: ChangepasswordComponent },
  { path: 'Watchlist', component: WatchlistComponent,canActivate:[AuthGuard], },
  { path: '',redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

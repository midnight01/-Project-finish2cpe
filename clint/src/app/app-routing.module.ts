import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Page
import { HomeComponent } from './components/home/home.component';
import { CcComponent } from './components/cc/cc.component';
import { CarloanComponent } from './components/carloan/carloan.component';
import { LoginComponent } from './components/login/login.component';
import { NewCarComponent } from './components/new-car/new-car.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { NewCar2Component } from './components/new-car2/new-car2.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'new-car', component: NewCarComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'go', component: HomeComponent},
  {path: 'new-car2', component: NewCar2Component},
  {path: 'cc/:id/:brand/:generation', component: CcComponent},
  {path: 'carloan/:id1/:id4/:data/:data1', component: CarloanComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

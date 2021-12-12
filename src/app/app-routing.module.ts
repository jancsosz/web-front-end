import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CarsComponent} from './components/cars/cars.component';
import {SigninComponent} from './components/signin/signin.component';
import {SignupComponent} from './components/signup/signup.component';
import {RegisterCarComponent} from './components/register-car/register-car.component';
import {MyCarsComponent} from './components/my-cars/my-cars.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'cars', component: CarsComponent, data: {title: 'Cars'}},
  {path: 'register-car', component: RegisterCarComponent},
  {path: 'own-cars', component: MyCarsComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './users/register.component';
import { LoginComponent } from './users/login.component';
import { ProfileComponent } from './users/profile.component';

import { HomeComponent } from './cars/home.component';
import { AddCarComponent } from './cars/add-car.component';
import { CarDetailComponent } from './cars/car-details.component';



import { PrivateRoute } from './core/private.route'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/login', component: LoginComponent },
  { path: 'users/profile', component: ProfileComponent, canActivate: [PrivateRoute]},
  { path: 'cars/add', component: AddCarComponent, canActivate: [PrivateRoute]},
  { path: 'cars/details/:id', component: CarDetailComponent, canActivate: [PrivateRoute]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule {}

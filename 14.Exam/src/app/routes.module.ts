import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './users/register.component';
import { LoginComponent } from './users/login.component';
import { HomeComponent } from './home.component';



import { PrivateRoute } from './core/private.route'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/login', component: LoginComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule {}

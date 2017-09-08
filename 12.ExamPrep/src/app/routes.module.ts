import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'

import { RegisterComponent } from './users/register.component'
import { LoginComponent } from './users/login.component'
import { HomePageComponent } from './animals/home.component'

import { AddAnimalComponent } from './animals/add-animal.component'
import { AnimalDetailComponent } from './animals/animal-details.component'
import { ProfileComponent } from './users/profile.component'


import { PrivateRoute } from './core/private.route'

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'users/register', component: RegisterComponent},
  {path: 'users/login', component: LoginComponent},
  {path: 'animals/add', component: AddAnimalComponent, canActivate: [PrivateRoute]},
  {path: 'animals/details/:id', component: AnimalDetailComponent, canActivate: [PrivateRoute]},
  {path: 'profile', component: ProfileComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './routes/home.component';
import { CarsComponent } from './cars/cars.component'
import { CarDetailsComponent } from './cars/cars.details.component'

import { OwnersComponent } from './owners/owners.component'
import { OwnerDetailsComponent } from './owners/owner.details.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cars/all', component: CarsComponent },
  { path: 'cars/:id', component: CarDetailsComponent },
  { path: 'owners/all', component: OwnersComponent },
  { path: 'owners/:id', component: OwnerDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
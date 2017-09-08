import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CarsService } from './cars.service';

import { HomeComponent } from './home.component';
import { StatsComponent } from './stats.component';
import { SearchComponent } from './car-search.component';
import { AddCarComponent } from './add-car.component';
import { CarDetailComponent } from './car-details.component';
import { LikesComponent } from './likes.component';
import { ReviewsComponent } from './reviews.component';

@NgModule({
  declarations: [
    HomeComponent,
    StatsComponent,
    SearchComponent,
    AddCarComponent,
    CarDetailComponent,
    LikesComponent,
    ReviewsComponent
  ],
  providers: [CarsService],
  imports: [FormsModule, CommonModule, RouterModule],
  exports: [
    HomeComponent
  ]
})
export class CarsModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutesModule } from '../routes.module'

import { CarsComponent } from './cars.component';
import { CarDetailsComponent } from './cars.details.component';
import { CarService } from './cars.service';

@NgModule({
  imports: [CommonModule, AppRoutesModule],
  declarations: [CarsComponent, CarDetailsComponent],
  providers: [CarService],
  exports: [CarsComponent, CarDetailsComponent]
})
export class CarsModule {

}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutesModule } from '../routes.module';
import { FormsModule } from '@angular/forms';

import { CarService } from './cars.service';

import { CarsComponent } from './cars.component';
import { CarDetailsComponent } from './cars.details.component';
import { AddCarComponent } from './add-car.component';
import { EditCarComponent } from './edit-car.component';

import { ImageRounderDirective } from './image-rounder.directive';

import { EnginePipe } from './engine.pipe';

@NgModule({
  imports: [CommonModule, AppRoutesModule, FormsModule],
  declarations: [CarsComponent, CarDetailsComponent, AddCarComponent, EditCarComponent, ImageRounderDirective, EnginePipe],
  providers: [CarService],
  exports: [CarsComponent, CarDetailsComponent, AddCarComponent, EditCarComponent, ImageRounderDirective, EnginePipe]
})
export class CarsModule {

}
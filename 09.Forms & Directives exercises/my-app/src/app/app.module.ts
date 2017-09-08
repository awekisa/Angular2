import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutesModule } from './routes.module'

import { CarsModule } from './cars/cars.module';
import { OwnersModule } from './owners/owners.module'

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    CarsModule,
    OwnersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

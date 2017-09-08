import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { RoutesModule } from './routes.module';
import { CoreModule } from './core/core.module';

import { UsersModule } from './users/users.module';
import { CarsModule } from './cars/cars.module';

import { AppComponent } from './app.component';

import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RoutesModule,
    CoreModule,
    UsersModule,
    CarsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

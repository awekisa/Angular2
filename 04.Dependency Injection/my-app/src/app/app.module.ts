import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { HomeData } from './home/home.data';
// import { GitHubProfileInfo } from './home/github.profile.info'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    // GitHubProfileInfo
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [HomeData],
  bootstrap: [AppComponent]
})
export class AppModule { }

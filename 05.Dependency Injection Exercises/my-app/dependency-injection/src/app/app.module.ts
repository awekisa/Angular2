import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { NgModule } from '@angular/core';

import { UserData } from './services/user.data'
import { UserFollowers } from './services/user.followers'
import { UserRepos } from './services/user.repos'
import { UserRepoContributors } from './services/user.repo.contributors'

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component'
import { SidebarComponent } from './components/sidebar.component'
import { MainComponent } from './components/main.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [UserData, UserFollowers, UserRepos, UserRepoContributors],
  bootstrap: [AppComponent]
})
export class AppModule { }

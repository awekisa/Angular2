import { Component, OnInit } from '@angular/core';
import { HomeData } from './home.data';
import { GitHubProfileInfo } from './github.profile.info';

@Component({
  selector: 'home',
  template: `
    <h1>Home</h1>
    <div>
      id - {{gitHubProfileInfo?.id}} <br />
      name - {{gitHubProfileInfo?.login}} <br />
      public repos - {{gitHubProfileInfo?.public_repos}}
      <br />  
    </div>`
})
export class HomeComponent implements OnInit {
  gitHubProfileInfo: GitHubProfileInfo

  constructor (private homeData: HomeData) {
  }

  ngOnInit () {
    this.homeData
      .getData()
      .then(profileInfo => {
        console.log(profileInfo)
        this.gitHubProfileInfo = profileInfo
      })
  }
}
import { Component } from '@angular/core'

import { UserFollowers } from '../services/user.followers'
import { UserRepos } from '../services/user.repos'

@Component({
  selector: 'home',
  template: `
    <h1>Home</h1>
    <sidebar 
      (onGetFollowers)='getFollowers()'
      (onGetRepos)='getRepos()'>
    </sidebar>
    <main [followers]=followers [repos]=repos></main>
  `
})
export class HomeComponent {
  followers;
  repos;

  constructor (
    private userFollowers: UserFollowers,
    private userRepos: UserRepos) {}

  getFollowers () {
    this.userFollowers
      .getFollowers()
      .then(followers => {
        console.log(followers)
        this.followers = followers
      })
  }

  getRepos () {
    this.userRepos
      .getRepos()
      .then(repos => {
        console.log(repos)
        this.repos = repos
      })
  }
}
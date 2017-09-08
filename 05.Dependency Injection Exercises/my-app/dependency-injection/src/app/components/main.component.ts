import { Component, OnInit, Input } from '@angular/core'

import { UserData } from '../services/user.data'
import { UserRepoContributors } from '../services/user.repo.contributors'

@Component({
  selector: 'main',
  templateUrl: './main.html',
    styleUrls: ['./home.css']
})
export class MainComponent {
  user;
  @Input() followers: object;
  @Input() repos: object;
  contributors: object;

  constructor (
    private userData: UserData,
    private userRepoContributors: UserRepoContributors) {}

  ngOnInit () {
    this.userData
      .getData()
      .then(user => {
        this.user = user
      })
  }
  
  showContributors (repo) {
    this.userRepoContributors
      .getContributors(repo)
      .then(contributors => {
        console.log(contributors)
        this.contributors = contributors
      })
  }
}
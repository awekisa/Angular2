import { Injectable, Input } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise';
  
const baseUrl = 'https://api.github.com/repos/awekisa/';

@Injectable()
export class UserRepoContributors {

  constructor (private http: Http) {}

  getContributors (reponame) {
    let url = baseUrl + `${reponame}/contributors`
    return this.http
      .get(url)
      .toPromise()
      .then(contributors => {
        console.log(contributors)
        return contributors.json()
      })
  }
}
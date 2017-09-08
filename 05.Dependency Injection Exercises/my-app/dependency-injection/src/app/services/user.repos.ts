import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise';
  
const url = 'https://api.github.com/users/awekisa/repos';

@Injectable()
export class UserRepos {
  constructor (private http: Http) {}

  getRepos () {
    return this.http
      .get(url)
      .toPromise()
      .then(repos => {
        console.log(repos)
        return repos.json()
      })
  }
}
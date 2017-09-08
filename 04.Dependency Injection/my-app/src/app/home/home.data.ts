import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { GitHubProfileInfo } from './github.profile.info';

const url = 'https://api.github.com/users/awekisa';

@Injectable()
export class HomeData {
  constructor (private http: Http) {}
  
  getData () : Promise<GitHubProfileInfo> {
    return this.http
      .get(url)
      .toPromise()
      .then(resp => resp.json() as GitHubProfileInfo)
      .catch(err => {
        console.log(err)
        return new GitHubProfileInfo()
      });
  }
}
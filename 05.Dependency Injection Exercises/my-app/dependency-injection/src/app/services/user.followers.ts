import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise';
  
const url = 'https://api.github.com/users/awekisa/followers';

@Injectable()
export class UserFollowers {
  constructor (private http: Http) {}

  getFollowers () {
    return this.http
      .get(url)
      .toPromise()
      .then(followers => {
        console.log(followers)
        return followers.json()
      })
  }
}
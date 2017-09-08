import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise';
  
const url = 'https://api.github.com/users/awekisa';

@Injectable()
export class UserData {
  constructor (private http: Http) {}

  getData () {
    return this.http
      .get(url)
      .toPromise()
      .then(user => {
        console.log(user)
        return user.json()
      })
  }
}
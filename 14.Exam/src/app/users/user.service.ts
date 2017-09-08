import { Injectable } from '@angular/core'
import { HttpService } from '../core/http.service'

@Injectable()
export class UserService {

  constructor(private httpService: HttpService) {}

  register(user) {
    return this.httpService.post('auth/signup', user, false)
  }

  login(user) {
    return this.httpService.post('auth/login', user, false)
  }

  getMyCars() {
    return this.httpService.get('cars/mine', true)
  }

  deleteCar(id){
    return this.httpService.post(`cars/delete/${id}`, undefined, true)
  }
}
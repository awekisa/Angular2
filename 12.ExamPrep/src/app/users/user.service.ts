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

  getMyAnimals() {
    return this.httpService.get('animals/mine', true)
  }

  deleteAnimal(id){
    return this.httpService.post(`animals/delete/${id}`, undefined, true)
  }
}
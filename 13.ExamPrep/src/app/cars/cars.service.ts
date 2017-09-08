import { Injectable } from '@angular/core'
import { HttpService } from '../core/http.service'

@Injectable()
export class CarsService {

  constructor(private httpService: HttpService) {}

  getStats() {
    return this.httpService.get('stats', false)
  }

  createCar(car) {
    return this.httpService.post('cars/create', car, true)
  }

  getCars(page, criteria) {
    
    let search = ''
    if(criteria) {
      search = '&search=' + criteria
    }
    
    page = page || 1
    
    return this.httpService.get(`cars/all?page=${page}${search}`, false)
  }

  getSpecificCar(id) {
    return this.httpService.get(`cars/details/${id}`, true)
  }

  likeCar(id) {
    return this.httpService.post(`cars/details/${id}/like`, undefined, true)
  }
  
  createReview(id, review) {
    return this.httpService.post(`cars/details/${id}/reviews/create`, review, true)
  }

  getReviews(id){
    return this.httpService.get(`cars/details/${id}/reviews`, true)
  }

}
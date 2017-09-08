import { Injectable } from '@angular/core'
import { HttpService } from '../core/http.service'

@Injectable()
export class AnimalsService {

  constructor(private httpService: HttpService) {}

  getStats() {
    return this.httpService.get('stats', false)
  }

  createAnimal(animal) {
    return this.httpService.post('animals/create', animal, true)
  }

  getAnimals(page, criteria) {
    
    let search = ''
    if(criteria) {
      search = '&search=' + criteria
    }
    
    page = page || 1
    
    return this.httpService.get(`animals/all?page=${page}${search}`, false)
  }

  getSpecificAnimal(id) {
    return this.httpService.get(`animals/details/${id}`, true)
  }

  reactToAnimal(id, type) {
    let obj = {
      type: type
    }
    return this.httpService.post(`animals/details/${id}/reaction`, obj, true)
  }
  
  createReview(id, review) {
    let obj = {
      message: review
    }
    return this.httpService.post(`animals/details/${id}/comments/create`, obj, true)
  }

  getReviews(id){
    return this.httpService.get(`animals/details/${id}/comments`, true)
  }

}
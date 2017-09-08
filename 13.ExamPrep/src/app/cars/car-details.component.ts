import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { CarsService } from './cars.service'
import { CarModel } from './car.model'

@Component({
  selector: 'car-detail',
  templateUrl: './car-details.component.html'
})
export class CarDetailComponent implements OnInit {
  car: CarModel
  constructor(private carsService: CarsService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
     this.activatedRoute.params.subscribe((params: Params) => {
        let id = params['id']
        
        this.carsService.getSpecificCar(id).subscribe(res => {
          this.car = res as CarModel
        })
    })
  }
  updateLikes($event) {
    if ($event) {
        this.activatedRoute.params.subscribe((params: Params) => {
          let id = params['id']
          
          this.carsService.getSpecificCar(id).subscribe(res => {
            this.car = res as CarModel
          })
      })
    }
  }
}
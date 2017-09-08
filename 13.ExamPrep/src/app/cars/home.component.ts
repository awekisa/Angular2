import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { CarsService } from './cars.service'
import { CarModel } from './car.model'

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  cars: CarModel[]
  page = 1

  constructor(private carsService: CarsService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.page = +params['page'] || 1
      
      this.carsService.getCars(this.page, false).subscribe(res => {
        this.cars = res as CarModel[]
      })
    })

    
  }

  prevPage(){
    if(this.page == 1) {
      return
    }

    this.router.navigateByUrl(`?page=${this.page - 1}`)

  }

  nextPage() {
    if(this.cars.length === 0 || this.cars.length < 10) {
      return
    }
    this.router.navigateByUrl(`?page=${this.page + 1}`)
  }

  updateCars($event) {
    console.log($event)
    this.cars = $event as CarModel[]
  }
}
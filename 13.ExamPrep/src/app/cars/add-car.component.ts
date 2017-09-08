import { Component } from '@angular/core'
import { CarModel } from './car.model'
import { CarsService } from './cars.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr'
import { Router } from '@angular/router'

@Component({
  selector: 'add-car',
  templateUrl: './add-car.component.html'
})
export class AddCarComponent {
  car = new CarModel('Peugeot', '308sw', 2011, '1.6', 10000, 'https://www.minimodelshop.co.uk/picture/Norev-473832/peugeot-308-sw-2011-diecast-model-car-norev-473832-b.jpg', 100000)

  constructor(private carsService: CarsService, private toastr: ToastsManager, private router: Router) {}

  createCar() {
    this.carsService.createCar(this.car).subscribe(res => {
      if (res.success) {
        this.toastr.success(res.message)
        this.router.navigateByUrl('/')
      } else {
        let firstError = Object.keys(res.errors)[0]
        this.toastr.error(res.errors[firstError])
      }
    })
  }
  
}
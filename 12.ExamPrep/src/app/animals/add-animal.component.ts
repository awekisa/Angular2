import { Component } from '@angular/core'
import { AnimalModel } from './animals.model'
import { AnimalsService } from './animals.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr'
import { Router } from '@angular/router'

@Component({
  selector: 'add-animal',
  templateUrl: './add-animal.component.html'
})
export class AddAnimalComponent {
  animal = new AnimalModel('Gosho', 15, 'yellow', 'Cat', 10000, 'http://www.qygjxz.com/data/out/43/4219312-cat-image.jpg');

  constructor(private animalsService: AnimalsService, private toastr: ToastsManager, private router: Router) {}

  createAnimal() {
    this.animalsService.createAnimal(this.animal).subscribe(res => {
      if (res.success) {
        this.toastr.success(res.message);
        this.router.navigateByUrl('/');
      } else {
        let firstError = Object.keys(res.errors)[0]
        this.toastr.error(res.errors[firstError])
      }
    })
  }
  
}
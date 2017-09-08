import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { AnimalsService } from './animals.service'
import { AnimalModel } from './animals.model'

@Component({
  selector: 'animal-detail',
  templateUrl: './animal-detail.component.html'
})
export class AnimalDetailComponent implements OnInit {
  animal: AnimalModel
  reactions
  constructor(private animalsService: AnimalsService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
     this.activatedRoute.params.subscribe((params: Params) => {
        let id = params['id']
        
        this.animalsService.getSpecificAnimal(id).subscribe(res => {
          this.animal = res as AnimalModel
          this.reactions = res.reactions
        })
    })
  }
  updateLikes($event) {
    if ($event) {
        this.activatedRoute.params.subscribe((params: Params) => {
          let id = params['id']
          
          this.animalsService.getSpecificAnimal(id).subscribe(res => {
            this.reactions = res.reactions
            this.animal = res as AnimalModel
          })
      })
    }
  }
}
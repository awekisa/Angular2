import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { AnimalsService } from './animals.service'
import { AnimalModel } from './animals.model'

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html'
})
export class HomePageComponent implements OnInit {

  animals: AnimalModel[]
  page = 1
  search = ''

  constructor(private animalsService: AnimalsService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.page = +params['page'] || 1
      this.search = params['search'] || ''
      
      this.animalsService.getAnimals(this.page, this.search).subscribe(res => {
        this.animals = res as AnimalModel[]
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
    if(this.animals.length === 0 || this.animals.length < 10) {
      return
    }
    this.router.navigateByUrl(`?page=${this.page + 1}`)
  }

  updateAnimals($event) {
    this.animals = $event as AnimalModel[]
  }
}
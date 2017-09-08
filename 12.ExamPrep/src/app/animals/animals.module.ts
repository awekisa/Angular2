import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { AddAnimalComponent } from './add-animal.component'
import { HomePageComponent } from './home.component'
import { StatsComponent } from './stats.component'
import { LikesComponent } from './likes.component'
import { AnimalDetailComponent } from './animal-details.component'
import { ReviewsComponent } from './reviews.component'
import { SearchComponent } from './animal-search.component'

import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { AnimalsService } from './animals.service'

@NgModule({
  declarations: [AddAnimalComponent, HomePageComponent, StatsComponent, AnimalDetailComponent, LikesComponent, ReviewsComponent, SearchComponent],
  providers: [AnimalsService],
  imports: [FormsModule, CommonModule, RouterModule]
})
export class AnimalsModule { }
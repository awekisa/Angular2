import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutesModule } from '../routes.module'

import { OwnersComponent } from './owners.component';
import { OwnerDetailsComponent } from './owner.details.component';
import { OwnersService } from './owners.service';

@NgModule({
  imports: [CommonModule, AppRoutesModule],
  declarations: [OwnersComponent, OwnerDetailsComponent],
  providers: [OwnersService],
  exports: [OwnersComponent, OwnerDetailsComponent]
})
export class OwnersModule {

}
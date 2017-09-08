import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { NgReduxModule, NgRedux } from 'ng2-redux';
import { IAppState, store } from '../store';

import { UserRegisterComponent } from './users.component';
import { UsersActions } from './user.actions';
import { UsersService } from './users.service';

@NgModule({
  imports: [CommonModule, NgReduxModule, FormsModule],
  declarations: [UserRegisterComponent],
  providers: [UsersService, UsersActions],
  exports: [UserRegisterComponent]
})
export class UsersModule {
  constructor (ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
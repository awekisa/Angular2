import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';
import { UsersService } from './users.service';

export const FILTER_COURSES = 'courses/FILTER';
export const REQUEST_COURSES_SUCCESS = 'courses/REQUEST_SUCCESS';

@Injectable()
export class UsersActions {
  constructor (
    private ngRedux: NgRedux<IAppState>,
    private usersService: UsersService) {}

  // getUsers () {
  //   this.usersService
  //     .getUsers()
  //     .subscribe(courses => {
  //       this.ngRedux.dispatch({
  //         type: REQUEST_COURSES_SUCCESS,
  //         courses
  //       })
  //     })
  // }
  
  // filterCourses(searchText: string) {
  //   this.ngRedux.dispatch({
  //     type: FILTER_COURSES,
  //     searchText
  //   })
  // }
}
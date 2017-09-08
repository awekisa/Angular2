import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import { User } from '../users/user';
import { UsersActions } from '../users/user.actions';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  // styleUrls: ['']
})
export class HomeComponent implements OnInit {
  @select('users') users: Observable<User>;

  constructor (private userActions: UsersActions) {}

  // filterChanged(searchText: string) {
  //   console.log('user searched: ', searchText);
  //   this.courseActions.filterCourses(searchText);
  // }

  ngOnInit() {
    // this.userActions.getUsers();
    // componentHandler.upgradeDom();
  }
}
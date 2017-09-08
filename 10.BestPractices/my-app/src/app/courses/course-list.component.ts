import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { FilterTextComponent, FilterService } from '../blocks/filter-text';
import { CourseActions } from '../courses/course.actions';
import { select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @select('filteredCourses') filteredCourses: Observable<Course>;

  constructor (private courseActions: CourseActions) {}

  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    this.courseActions.filterCourses(searchText);
  }

  ngOnInit() {
    this.courseActions.getCourses();
    componentHandler.upgradeDom();
  }
}

import { IAppState } from './IAppState';
import { 
  FILTER_COURSES,
  REQUEST_COURSES_SUCCESS } from '../courses/course.actions';

const courses = [];

const initialState: IAppState = {
  courses: courses,
  filteredCourses: courses
}

function filteredCourses (state, action) {
  return Object.assign({}, state, {
    filteredCourses: state.courses.filter(c => {
      return c.name.toLowerCase().indexOf(action.searchText.toLowerCase()) > -1;
    })
  })
}

function getCourses(state, action) {
  return Object.assign({}, state, {
    courses: action.courses,
    filteredCourses: action.courses
  })
}

export function reducer(state = initialState, action) {
  //same as state = state || initialState
  switch (action.type) {
    case FILTER_COURSES: 
      return filteredCourses(state, action)
    case REQUEST_COURSES_SUCCESS:
      return getCourses(state, action);
    default: return state
  }
}
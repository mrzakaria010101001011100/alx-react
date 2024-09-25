#!/usr/bin/node
// task_4/dashboard/src/reducers/courseReducer.js
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

const initialState = Map({
  courses: Map(),
});

// Reducer function
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      // Normalize the data and merge with state
      const normalizedCourses = coursesNormalizer(action.data);
      return state.merge({
        courses: Map(normalizedCourses.entities.courses),
      });

    case SELECT_COURSE:
      // Use setIn to update the state with the selected course
      return state.setIn(['courses', String(action.index), 'isSelected'], true);

    case UNSELECT_COURSE:
      // Use setIn to update the state with the unselected course
      return state.setIn(['courses', String(action.index), 'isSelected'], false);

    default:
      return state;
  }
};

export default courseReducer;


#!/usr/bin/node
// task_4/dashboard/src/reducers/courseReducer.test.js
import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';

const coursesData = [
  { id: 1, name: 'Course 1' },
  { id: 2, name: 'Course 2' },
  { id: 3, name: 'Course 3' },
];

describe('courseReducer', () => {
  it('should return the initial state', () => {
    const state = courseReducer(undefined, {});
    expect(state.toJS()).toEqual({
      courses: {},
    });
  });

  it('should handle FETCH_COURSE_SUCCESS and normalize the data', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: coursesData,
    };
    const state = courseReducer(undefined, action);

    expect(state.toJS()).toEqual({
      courses: {
        1: { id: 1, name: 'Course 1' },
        2: { id: 2, name: 'Course 2' },
        3: { id: 3, name: 'Course 3' },
      },
    });
  });

  it('should handle SELECT_COURSE', () => {
    const action = { type: SELECT_COURSE, index: 2 };
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: 'Course 1' },
        2: { id: 2, name: 'Course 2' },
        3: { id: 3, name: 'Course 3' },
      },
    });

    const state = courseReducer(initialState, action);
    expect(state.toJS()).toEqual({
      courses: {
        1: { id: 1, name: 'Course 1' },
        2: { id: 2, name: 'Course 2', isSelected: true },
        3: { id: 3, name: 'Course 3' },
      },
    });
  });

  it('should handle UNSELECT_COURSE', () => {
    const action = { type: UNSELECT_COURSE, index: 2 };
    const initialState = fromJS({
      courses: {
        1: { id: 1, name: 'Course 1' },
        2: { id: 2, name: 'Course 2', isSelected: true },
        3: { id: 3, name: 'Course 3' },
      },
    });

    const state = courseReducer(initialState, action);
    expect(state.toJS()).toEqual({
      courses: {
        1: { id: 1, name: 'Course 1' },
        2: { id: 2, name: 'Course 2', isSelected: false },
        3: { id: 3, name: 'Course 3' },
      },
    });
  });
});


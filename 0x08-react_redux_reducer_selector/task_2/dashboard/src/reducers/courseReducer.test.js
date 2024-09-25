#!/usr/bin/node

// task_2/dashboard/src/reducers/courseReducer.test.js

import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

// Sample data to use in tests
const coursesData = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

describe('courseReducer', () => {
  it('should return the default state of an empty array', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual([]);
  });

  it('should handle FETCH_COURSE_SUCCESS and return the list of courses with isSelected set to false', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: coursesData,
    };
    const state = courseReducer(undefined, action);

    const expectedState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];

    expect(state).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE and update the isSelected field for the correct course', () => {
    const initialState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];
    const action = {
      type: SELECT_COURSE,
      index: 2,
    };
    const state = courseReducer(initialState, action);

    const expectedState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];

    expect(state).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE and update the isSelected field for the correct course', () => {
    const initialState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];
    const action = {
      type: UNSELECT_COURSE,
      index: 2,
    };
    const state = courseReducer(initialState, action);

    const expectedState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];

    expect(state).toEqual(expectedState);
  });
});


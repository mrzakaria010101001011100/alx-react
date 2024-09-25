#!/usr/bin/node

// task_1/dashboard/src/reducers/uiReducer.test.js

import { Map } from 'immutable';
import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
  });

  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const action = { type: 'SELECT_COURSE' };
    const state = uiReducer(undefined, action);
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should change isNotificationDrawerVisible property when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const state = uiReducer(undefined, action);
    expect(state.get('isNotificationDrawerVisible')).toBe(true);
  });

  it('should change isNotificationDrawerVisible property when HIDE_NOTIFICATION_DRAWER action is passed', () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const state = uiReducer(undefined, action);
    expect(state.get('isNotificationDrawerVisible')).toBe(false);
  });
});


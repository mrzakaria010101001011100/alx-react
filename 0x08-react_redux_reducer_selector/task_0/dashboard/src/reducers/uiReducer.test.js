#!/usr/bin/node
// task_0/dashboard/src/reducers/uiReducer.test.js

import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
  };

  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const action = { type: 'SELECT_COURSE' };
    const state = uiReducer(undefined, action);
    expect(state).toEqual(initialState);
  });

  it('should change isNotificationDrawerVisible property when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const state = uiReducer(undefined, action);
    expect(state.isNotificationDrawerVisible).toBe(true);
  });

  it('should change isNotificationDrawerVisible property when HIDE_NOTIFICATION_DRAWER action is passed', () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const state = uiReducer(undefined, action);
    expect(state.isNotificationDrawerVisible).toBe(false);
  });
});


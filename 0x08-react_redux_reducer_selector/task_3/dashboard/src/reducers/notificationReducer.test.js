#!/usr/bin/node
// task_3/dashboard/src/reducers/notificationReducer.test.js

import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

// Sample data for tests
const notificationsData = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', value: 'New data available' },
];

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual({
      notifications: [],
      filter: 'DEFAULT',
    });
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS and add notifications with isRead set to false', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notificationsData,
    };
    const state = notificationReducer(undefined, action);

    expect(state).toEqual({
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    });
  });

  it('should handle MARK_AS_READ and mark the correct notification as read', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };
    const action = {
      type: MARK_AS_READ,
      index: 2,
    };
    const state = notificationReducer(initialState, action);

    expect(state).toEqual({
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    });
  });

  it('should handle SET_TYPE_FILTER and change the filter to the specified type', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: notificationsData,
    };
    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    };
    const state = notificationReducer(initialState, action);

    expect(state).toEqual({
      filter: 'URGENT',
      notifications: notificationsData,
    });
  });
});


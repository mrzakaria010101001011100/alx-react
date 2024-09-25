#!/usr/bin/node
// task_3/dashboard/src/reducers/notificationReducer.js

import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

// Default state
const initialState = {
  notifications: [],
  filter: 'DEFAULT',
};

// Reducer function
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      // Map through the notifications and set isRead to false for each notification
      const notifications = action.data.map(notification => ({
        ...notification,
        isRead: false,
      }));
      return {
        ...state,
        notifications,
      };

    case MARK_AS_READ:
      // Update the isRead status for the notification with the matching index (id)
      return {
        ...state,
        notifications: state.notifications.map(notification =>
          notification.id === action.index
            ? { ...notification, isRead: true }
            : notification
        ),
      };

    case SET_TYPE_FILTER:
      // Set the filter type to DEFAULT or URGENT
      return {
        ...state,
        filter: action.filter,
      };

    default:
      return state;
  }
};

export default notificationReducer;


#!/usr/bin/node
// task_4/dashboard/src/reducers/notificationReducer.js
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = Map({
  notifications: Map(),
  filter: 'DEFAULT',
});

// Reducer function
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      // Normalize the data and merge with state
      const normalizedNotifications = notificationsNormalizer(action.data);
      return state.merge({
        notifications: Map(normalizedNotifications.entities.notifications),
      });

    case MARK_AS_READ:
      // Use setIn to update the isRead property of the notification
      return state.setIn(['notifications', String(action.index), 'isRead'], true);

    case SET_TYPE_FILTER:
      // Use set to update the filter
      return state.set('filter', action.filter);

    default:
      return state;
  }
};

export default notificationReducer;


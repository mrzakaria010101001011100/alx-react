#!/usr/bin/node
// task_5/dashboard/src/selectors/notificationSelector.test.js
import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notification selectors', () => {
  const state = fromJS({
    filter: 'URGENT',
    notifications: {
      1: { id: 1, type: 'default', value: 'New course available', isRead: true },
      2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
    },
  });

  it('filterTypeSelected should return the correct filter type', () => {
    const result = filterTypeSelected(state);
    expect(result).toEqual('URGENT');
  });

  it('getNotifications should return all notifications', () => {
    const result = getNotifications(state);
    expect(result.toJS()).toEqual({
      1: { id: 1, type: 'default', value: 'New course available', isRead: true },
      2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
    });
  });

  it('getUnreadNotifications should return unread notifications', () => {
    const result = getUnreadNotifications(state);
    expect(result.toJS()).toEqual({
      2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: false },
    });
  });
});


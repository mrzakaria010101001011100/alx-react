#!/usr/bin/node
// task_4/dashboard/src/schema/notifications.js
import { schema, normalize } from 'normalizr';

// Define a schema entity for notifications
const notification = new schema.Entity('notifications');

// Function to normalize data
export const notificationsNormalizer = (data) => {
  return normalize(data, [notification]);
};


#!/usr/bin/node
// task_4/dashboard/src/schema/courses.js
import { schema, normalize } from 'normalizr';

// Define a schema entity for courses
const course = new schema.Entity('courses');

// Function to normalize data
export const coursesNormalizer = (data) => {
  return normalize(data, [course]);
};


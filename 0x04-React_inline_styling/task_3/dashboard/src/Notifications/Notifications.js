#!/usr/bin/node
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Notifications = () => {
  return (
    <div className={css(styles.notifications)}>
      <p>Here is the list of notifications</p>
      <ul className={css(styles.list)}>
        {/* Notification items */}
      </ul>
    </div>
  );
};

const styles = StyleSheet.create({
  notifications: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    fontSize: '20px',
    '@media (min-width: 900px)': {
      width: '300px',
      height: 'auto',
      fontSize: 'initial',
    },
  },
  list: {
    padding: 0,
  },
});

export default Notifications;

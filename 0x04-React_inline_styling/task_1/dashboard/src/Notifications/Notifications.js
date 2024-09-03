#!/usr/bin/node
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  notifications: {
    border: '2px dashed red',
    padding: '10px',
    width: 'fit-content',
    marginBottom: '20px',
  },
});

function Notifications() {
  return (
    <div className={css(styles.notifications)}>
      <p>Here is the list of notifications</p>
    </div>
  );
}

export default Notifications;

#!/usr/bin/node
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const NotificationItem = ({ type, value }) => {
  return (
    <li className={css(styles.item)}>
      {value}
    </li>
  );
};

const styles = StyleSheet.create({
  item: {
    width: '100%',
    padding: '10px 8px',
    borderBottom: '1px solid black',
    fontSize: '20px',
  },
});

export default NotificationItem;

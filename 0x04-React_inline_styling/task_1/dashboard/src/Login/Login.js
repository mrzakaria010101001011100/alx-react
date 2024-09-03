#!/usr/bin/node
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  login: {
    margin: '40px',
  },
});

function Login() {
  return (
    <div className={css(styles.login)}>
      <h2>Login to access the full dashboard</h2>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <button type="button">OK</button>
    </div>
  );
}

export default Login;

#!/usr/bin/node
import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <div className={css(styles.loginContainer)}>
      <label className={css(styles.label)}>Email:</label>
      <input className={css(styles.input)} type="email" />
      <label className={css(styles.label)}>Password:</label>
      <input className={css(styles.input)} type="password" />
      <button className={css(styles.button)}>Login</button>
    </div>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    display: 'block',
    marginBottom: '10px',
  },
  button: {
    marginTop: '10px',
  },
});

export default Login;

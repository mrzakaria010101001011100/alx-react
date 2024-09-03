#!/usr/bin/node
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

const styles = StyleSheet.create({
  app: {
    textAlign: 'center',
  },
  appHeader: {
    backgroundColor: '#282c34',
    minHeight: '10vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'white',
  },
  appBody: {
    minHeight: '70vh',
    padding: '20px',
  },
  appFooter: {
    backgroundColor: '#282c34',
    minHeight: '10vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
});

function App() {
  return (
    <div className={css(styles.app)}>
      <header className={css(styles.appHeader)}>
        <img src={logo} className={css(styles.appLogo)} alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <div className={css(styles.appBody)}>
        <p>Login to access the full dashboard</p>
      </div>
      <footer className={css(styles.appFooter)}>
        <p>Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;

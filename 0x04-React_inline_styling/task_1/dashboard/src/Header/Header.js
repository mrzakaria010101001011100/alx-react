#!/usr/bin/node
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#282c34',
    color: 'white',
  },
  logo: {
    height: '200px',
  },
});

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={logo} className={css(styles.logo)} alt="Holberton Logo" />
      <h1>School dashboard</h1>
    </header>
  );
}

export default Header;

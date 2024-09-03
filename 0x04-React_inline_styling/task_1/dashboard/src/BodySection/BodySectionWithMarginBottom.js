#!/usr/bin/node
import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import BodySection from './BodySection';

const styles = StyleSheet.create({
  marginBottom: {
    marginBottom: '40px',
  },
});

function BodySectionWithMarginBottom(props) {
  return (
    <div className={css(styles.marginBottom)}>
      <BodySection {...props} />
    </div>
  );
}

export default BodySectionWithMarginBottom;

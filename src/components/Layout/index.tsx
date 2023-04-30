import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';

import styles from './layout.module.scss';

export class Layout extends Component {
  render() {
    return (
      <div className={styles.layoutContainer}>
        <Outlet />
      </div>
    )
  }
}

export default Layout;
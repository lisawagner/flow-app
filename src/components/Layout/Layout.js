import React from 'react'
import NavbarRoot from '../NavbarRoot/NavbarRoot'
// styles
import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <NavbarRoot />
      <main className={styles.flowMain}>{ children }</main>
    </>
  )
}

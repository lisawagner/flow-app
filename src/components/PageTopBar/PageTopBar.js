import React from 'react'

// components
import PageHeader from './PageHeader'
import HeaderActions from './HeaderActions'
// styles
import styles from './PageTopBar.module.css'

// TODO: Consider using this as a global header for more pages - title via props

const PageTopBar = ({ title }) => {
  
  return (
    <>
      <div className={styles.topBarWrap}>
        <PageHeader title={title} />
        <HeaderActions />
      </div>
    </>
  )
}

export default PageTopBar
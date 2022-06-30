import React from 'react'

// NOTE:  PageHeader may change in the future to have components.
//        Similar to Asana headers, or keep this clean like JIRA

const PageHeader = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

export default PageHeader
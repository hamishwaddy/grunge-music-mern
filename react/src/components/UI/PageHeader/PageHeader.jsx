import React from 'react'

import classes from './PageHeader.module.css'
import CloseWindow from '../CloseWindow/CloseWindow'

const pageHeader = (props) => {
  return (
    <div className={classes.PageHeader}>
      <div className={classes.PageTitle}>
        <div className={classes.CloseWindow}>
          <CloseWindow clicked={props.close} />
        </div>
        <h1>{props.pageTitle}</h1>
      </div>
    </div>
  )
}

export default pageHeader;

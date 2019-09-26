import React, { Fragment } from 'react'
import Image from 'react-bootstrap/Image'

export default function HeroImage() {

  return (
    <Fragment>
      <div className="container">
        <div>
          <img src="../../images/Hero_Where_You_Been.png" className="hero-img fluid" alt="Album Art" />
        </div>
      </div>
    </Fragment>
  )
}
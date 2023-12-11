import React from 'react'
import loading from './spinner-light.gif'
import loadingDark from './spinner-dark.gif'

const Spinner = (props) => {
    return (
      <div className='text-center my-lg-5 '>

        {props.mode==="primary"?<img src={loading} alt="LOADING..." />:<img src={loadingDark} alt="LOADING..." />}
      </div>
    )
}
export default Spinner

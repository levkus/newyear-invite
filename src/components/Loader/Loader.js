import React from 'react'
import './Loader.css'


const red = {
  cy: '35',
  cx: '35',
  r: '30'
}

const Loader = ({ fullscreen }) => (
  <div className={fullscreen ? 'loader-fullscreen' : 'loader-simple'}>
    <svg className='rings-container' viewBox="0 0 70 70" width="70" height="70">
      {/* <circle className='ring red-back' {...red} /> */}
      <circle className='ring red-front' {...red} />
    </svg>
  </div>
)

export default Loader

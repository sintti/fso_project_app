import React from 'react'
import './loading.css'

function Loading() {
  return (
    <div className='loader'>
      <div className="progress-bar">
        <span className="bar">
          <span className="progress"></span>
        </span>
      </div>
    </div>
  )
}

export default Loading

import React from 'react'
import Square from './Square'

function Board() {
  return (
    <div>
      <div className='row'>
          <Square />
          <Square />
          <Square />
      </div>
      <div className='row'>
          <Square />
          <Square />
          <Square />
      </div>
      <div className='row'>
          <Square />
          <Square />
          <Square />
      </div>



    </div>
  )
}

export default Board
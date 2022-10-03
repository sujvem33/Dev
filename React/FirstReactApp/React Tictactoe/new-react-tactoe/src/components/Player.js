import React from 'react'

function Player(props) {
  return (
    <>
        <h2>Player {props.WhichPlayer}</h2>
        <h3>Wins:</h3>
        <p>Score: {props.Score}</p>
    
    
    
    </>
  )
}

export default Player
import React from 'react'

function Player(props) {
  return (
    <div>
        <h2>Player {props.WhichPlayer}</h2>
        <h3>Wins:</h3>
        <p>Score: {props.Score}</p>
    </div>
  )
}

export default Player
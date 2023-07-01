import React from 'react'

function HobbyCard({ image , title}) {
  return (
    <div className='hobby-card-elem'>
        <img src={ image } alt="image" />
        <h2>{ title }</h2>
    </div>
  )
}

export default HobbyCard
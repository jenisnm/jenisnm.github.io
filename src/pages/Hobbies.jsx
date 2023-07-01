import React from 'react'
import HobbyCard from '../components/HobbyCard'
import { hobbies } from '/src/data/hobbies'
import Fade from 'react-reveal/Fade'
import Roll from 'react-reveal/Roll'

function Hobbies() {
  return (
    <div id='hobbies'>
      <Fade right><h1>Hobbies</h1></Fade>
      <ul>
      {
          hobbies.map((elem) => (
            <Roll left>
            <li><HobbyCard key={ elem.id } image={ elem.image } title={ elem.title }/></li>
            </Roll>
          ))
      }
      </ul>
    </div>
  )
}

export default Hobbies
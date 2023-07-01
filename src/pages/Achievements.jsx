import React from 'react'
import Pcards from '/src/components/Pcards'
import Carousel from 'react-elastic-carousel'
import Zoom from 'react-reveal/Zoom';
import { achievements } from '../data/achievements';

function Achievements() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 1024, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  
  return (
    <div className='project' id='achievements' style={{ backgroundColor: "rgba(0,0,0,0.3)" }}>
        <Zoom>
        <h1>Achievements</h1>
        <Carousel breakPoints={breakPoints} >
        { achievements.map((elem) => (
            <Pcards key={elem.id} image = {elem.image} title = {elem.title} details={elem.details} />
            ))}
        </Carousel>
        </Zoom>
    </div>
  )
}

export default Achievements
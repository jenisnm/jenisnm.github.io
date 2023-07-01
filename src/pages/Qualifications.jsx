import React from 'react'
import Education from '../components/Education'
import '../styles/education.css'
import Fade from "react-reveal/Fade";

function Qualifications() {
  return (
    <div id='qualification'>
      <Fade top>     
      <h1>Qualification</h1>
      </Fade>
        <div className="college">
          <Fade bottom>
          <Education key={1} image={"https://img.collegedekhocdn.com/media/img/institute/logo/St.-Joseph-Engineering-College.gif"} name={"St. Joseph Engineering College"} degree={ "B.E" } year={"2020 - Present"}/>
          </Fade>
          <Fade bottom>
          <Education key={2} image={"https://yt3.googleusercontent.com/cSX5g6hSY882lImcqcUHt8oP7fn51KgU3HUsj8vHAxo3EsHGDGWQxBiPjTh7kBF3BZRXBFNIiw=s900-c-k-c0x00ffffff-no-rj"} name={"St. Aloysius PU College"} degree={ "PUC" } year={"2018 - 2020"}/>
          </Fade>
          <Fade bottom>
          <Education key={3} image={"https://static.vecteezy.com/system/resources/previews/007/979/845/original/eps10-grey-school-building-with-flag-filled-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg"} name={"St. Joseph English Medium High School"} degree= { "SSLC" } year={"2015 - 2018"}/>
          </Fade>
        </div>
    </div>
  )
}

export default Qualifications
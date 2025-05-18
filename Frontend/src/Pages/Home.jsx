import React from 'react'
import Hero from '../Components/Hero'
import Mission from '../Components/Mission'
import ProgrammeArea from '../Components/ProgrammeArea'
import NewLetter from '../Components/NewLetter'
import MediaHome from '../Components/MediaHome'
import DeskTeam from '../Components/DeskTeam'
import Unit from '../Components/Unit'
import News from '../Components/News'
import GoToTop from '../Components/GoToTop'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Mission/>
      <DeskTeam/>
      <News/>
      <ProgrammeArea/>
      <MediaHome/>
      <Unit/>
      <NewLetter/>
      <GoToTop/>
    </div>
  )
}

export default Home
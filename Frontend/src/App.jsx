import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  Home  from './Pages/Home'
import  Projects from './Pages/Projects'
import  Team from './Pages/Team'
import  Media from './Pages/Media'
import  Contact from './Pages/Contact'
import  About from './Pages/About'
import Navbar from './Components/Navbar'
import News from './Pages/News'
import Donation from './Pages/Donation'
import Footer from './Components/Footer'
import TeamsCart from './Pages/TeamsCart'
import TeamScheme from './Components/TeamScheme'
import Program from './Pages/Program'
import ProgramScheme from './Components/ProgramScheme'
import Enroll from './Components/Enroll'

export  const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/team' element={<Team />}/>
        <Route path='/media' element={<Media/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        {/* <Route path='/news' element={<News/>}/> */}
        <Route path='/program' element={<Program/>}/>
        <Route path='/donation' element={<Donation/>}/>
        <Route path='/teams/:Id' element={<TeamsCart/>}/>
        <Route path='/program/:Id' element={<ProgramScheme/>}/>
        <Route path='/enroll' element={<Enroll/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
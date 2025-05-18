import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Navbar = ({setToken}) => {
  return (
    <div className='flex justify-between p-1'>
        <Link to='/'><img className='w-30' src={assets.speedtouch} alt="" /></Link>
        <ul className='flex  gap-3'>
            <NavLink to='/teams'>
                <p>Team</p>
            </NavLink>
            <NavLink to='/projects'>
                <p>Projects</p>
            </NavLink>
            <NavLink to='/program'>
                <p>Program</p>
            </NavLink>
            <NavLink to='/news'>
                <p>News</p>
            </NavLink>
            <NavLink to='/media'>
                <p>Media</p>
            </NavLink>
            <NavLink to='/month'>
                <p>Month</p>
            </NavLink>
            <NavLink to='/desk'>
                <p>Desk</p>
            </NavLink>
        </ul>
        <button onClick={()=> setToken('')} className='bg-red-500 text-white py-2 px-5 rounded-lg'>
            Logout
        </button>
    </div>
  )
}

export default Navbar
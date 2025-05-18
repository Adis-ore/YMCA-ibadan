import React, {useState,useEffect} from 'react'
import {teamData} from '../assets/assets'
import {useParams} from 'react-router-dom'

const TeamsCart = () => {
  const {Id} = useParams()
  const [teamMember, setTeamMember] = useState('')

  useEffect(() => {
    const member = teamData.find((e)=> e._id === Id)
    setTeamMember(member)
  }, [Id])
  return (
    <div className="p-7 transition-opacity sm:flex gap-5 ease-in duration-500 opacity-100">
      <div className="w-full sm:w-[50%]">
          <img src={teamMember.image} className="w-full h-auto rounded-xl" alt="" />
        </div>
        <div className=' p-3 flex flex-col gap-3'>
          <p className='text-4xl text-gray-800 font-bold'>{teamMember.name}</p>
          <p className='text-2xl text-gray-500'>{teamMember.role}</p>
          <p className=' text-gray-800'>{teamMember.about}</p>
          <p>{teamMember.contact}</p>
        </div>
    </div>
  )
}

export default TeamsCart


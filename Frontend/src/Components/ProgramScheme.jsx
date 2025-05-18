import React, { useEffect, useState } from 'react'
import { programmes } from '../assets/assets'
import { useParams } from 'react-router-dom'

const ProgramScheme = () => {
    const {Id} = useParams()
    const [program, setProgram] = useState('')

    useEffect(() => {
        const programme = programmes.find((e)=> e._id === Id)
        setProgram(programme)
    }, [Id])
  return (
    <div className="p-7 transition-opacity sm:flex gap-5 ease-in duration-500 opacity-100">
        <div className="w-full sm:w-[50%]">
          <img src={program.image} className="w-full h-auto rounded-xl" alt="" />
        </div>
        <div className=' p-3 flex flex-col gap-3'>
          <p className='text-4xl text-gray-800 font-bold'>{program.name}</p>
          <p className='text-2xl text-gray-500'>{program.description}</p>
          <p className=' text-gray-800'>{program.about}</p>
          {/* <p>{teamMember.contact}</p> */}
        </div>
    </div>
  )
}

export default ProgramScheme
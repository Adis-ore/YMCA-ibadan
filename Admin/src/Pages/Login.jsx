import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Login = ({setToken}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault()
      const resposne = await axios.post(backendUrl + '/api/admin/login',{email,password})
      if (resposne.data.success) {
        setToken(resposne.data.token)
      }    else{
        toast.error(resposne.data.message)
      }  
    } catch (error) {
      console.log(error);
              toast.error(resposne.data.message)
      
    }
  }
   
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100 w-full'>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md '>
        <h1 className='text-3xl text-center font-bold mb-4'>YMCA ADMIN PANEL</h1>
        <form onSubmit={onSubmitHandler} >
          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border border-gray-300  outline-none ' type="email" placeholder='passwordemail@gmail.com' required  />
          </div>
          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border border-gray-300  outline-none ' type="password" placeholder='Enter your passoword' required  />
          </div>
          <button className='mt-2 w-full py-2 px-4 rounded-md cursor-pointer text-white bg-black' type='submin'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
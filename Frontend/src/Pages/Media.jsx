
import React from 'react'
import ScrollToTop from '../Components/Scroll'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const Media = () => {
  const [media, setMedia] = useState([])

  const fetchMedia = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/media/list")
      if (response.data.success) {
        setMedia(response.data.media)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchMedia()
  }, [])

  return (
    <div>
      <ScrollToTop />
      <div className='p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
        {media.map((e) => (
          <div
            key={e._id}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col w-full"
            style={{ height: '500px' }}
          >
            <img
              src={e.image[0]}
              alt={e.title}
              className="w-full object-contain bg-gray-100"
              style={{ height: '300px' }}
            />
            <div className='p-6 flex flex-col justify-start flex-grow'>
              <p className='text-gray-800 font-bold text-xl mb-3'>{e.title}</p>
              <p className='text-gray-600 text-sm whitespace-pre-line'>{e.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Media

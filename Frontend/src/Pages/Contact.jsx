import React from 'react'
import NewLetter from '../Components/NewLetter'
import Title from '../Components/Title'
import { assets } from '../assets/assets' // keep this if you want to use an image

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="text-center text-3xl font-bold mb-12 border-t pt-10">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 mb-28">
        {/* You can replace this image with a YMCA-related image */}
        <img
          src={assets.wall}
          alt="YMCA Ibadan Office"
          className="w-full max-w-lg object-cover rounded-md shadow-lg"
        />

        <div className="flex flex-col justify-center items-start gap-6 max-w-lg">
          <p className="text-2xl font-semibold text-gray-800">Our Office</p>
          <p className="text-gray-700 leading-relaxed">
            No 7 Joyce B Road, Oke Ado, <br />
            Ibadan, Oyo State, Nigeria
          </p>

          <p className="text-gray-700 leading-relaxed">
            <strong>Phone:</strong> +234 805 324 6421 / +234 817 350 6001
            <br />
            <strong>Email:</strong> <a href="mailto:ymcaibadan@yahoo.com" className="text-blue-600 underline">ymcaibadan@yahoo.com</a>
          </p>

          <p className="text-2xl font-semibold text-gray-800 mt-8">Office Hours</p>
          <p className="text-gray-700 leading-relaxed">
            Monday – Saturday: 8:00 AM – 5:00 PM <br />
            Sunday: Closed
          </p>

          <button
            onClick={() => window.open('https://goo.gl/maps/XdYJxsZMHLL2', '_blank')}
            className="mt-6 px-8 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition cursor-pointer"
          >
            View on Google Maps
          </button>
        </div>
      </div>

      {/* Newsletter or contact form */}
      <NewLetter />
    </div>
  )
}

export default Contact



import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { backendUrl } from '../App'
import { toast } from 'react-toastify';
import axios from 'axios'

const Unit = () => {
  const [month, setMonth] = useState([])

  const fetchMonth = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/month/list");
      if (response.data.success) {
        setMonth(response.data.month);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
  
  useEffect(() => {
    fetchMonth()
  }, [])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  return (
    <div className="py-12 px-6 bg-white">
      <h2 className="text-4xl font-extrabold text-red-500 mb-10 text-center">Hall of Fame</h2>
      <Carousel
        swipeable
        draggable
        showDots
        responsive={responsive}
        ssr
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        customTransition="all .5s ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container py-10"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="px-4"
      >
        {month.map((member) => (
          <div
            key={member._id}
            className="bg-white shadow-md rounded-lg p-6 h-[400px] sm:h-[400px] overflow-hidden text-center cursor-pointer
              hover:scale-105 transform transition duration-300 hover:shadow-lg hover:shadow-red-300"
          >
            <img
              src={member.image[0]}
              alt={member.name}
              className="w-full h-48 object-cover rounded-lg mb-5"
            />
            <h2 className="font-semibold text-xl mb-2 text-red-500">{member.heading}</h2>
            <h3 className="font-semibold text-lg mb-3 text-red-600">{member.name}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{member.deeds}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Unit

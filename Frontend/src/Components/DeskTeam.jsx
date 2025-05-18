import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const DeskTeam = () => {
  const [desk, setDesk] = useState([]);

  const getDesk = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/desk/list");
      if (response.data.success) {
        setDesk(response.data.desk);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getDesk();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
    }
  };

  return (
    <div className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-red-700 text-center mb-10">Meet the Desk Team</h2>

      <Carousel
        swipeable
        draggable
        showDots
        responsive={responsive}
        ssr
        infinite
        autoPlay
        autoPlaySpeed={4000}
        keyBoardControl
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="px-4"
      >
        {desk.map((member) => (
          <div key={member._id} className="bg-red-50 shadow-md rounded-xl p-4 h-[470px] flex flex-col items-center text-center">
            <img
              src={member.image[0]}
              alt={member.name}
              className="w-full h-52 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold text-red-700 mb-2">DESK OF THE {member.name}</h3>
            <p className="text-sm text-gray-700">{member.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DeskTeam;

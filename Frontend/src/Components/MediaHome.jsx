
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import Animation from "../assets/Animation.json";
import { Link } from "react-router-dom";
import Title from "./Title";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const MediaHome = () => {
  const [media, setMedia] = useState([]);

  const fetchMedia = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/media/list");
      if (response.data.success) {
        const sorted = response.data.media.reverse();
        setMedia(sorted);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="py-12 px-4 bg-white flex flex-col items-center justify-center">
      <Title
        text1="Our"
        text2="Media"
        className="text-[30px] text-red-700 font-semibold"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full max-w-[1200px]">
        {media.slice(0, 9).map((e) => (
          <div
            key={e._id}
            className="bg-white border border-red-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 w-[350px] h-[350px] mx-auto"
          >
            <img
              src={e.image[0]}
              alt="Media"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <Link to={"./media"} className="mt-10 flex flex-col items-center group">
        <Lottie options={defaultOptions} height={80} width={50} />
        <p className="text-[20px] text-red-700 font-medium group-hover:underline transition">
          See more
        </p>
      </Link>
    </div>
  );
};

export default MediaHome;

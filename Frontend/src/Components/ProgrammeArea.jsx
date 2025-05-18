
import Lottie from "react-lottie";
import Animation from "../assets/Animation.json";
import React, { useEffect, useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const ProgrammeArea = () => {
  const [programmes, setProgrammes] = useState([]);

  const getProgrammes = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/program/list");
      if (response.data.success) {
        const sorted = response.data.programs.reverse();
        setProgrammes(sorted);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProgrammes();
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
    <div className="w-full px-4 py-12 flex flex-col items-center justify-center bg-white">
      <Title
        className="text-[30px] text-red-700"
        text1="Our"
        text2="Programme Areas"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-[1200px]">
        {programmes.slice(0, 3).map((item) => (
          <div
            key={item._id}
            className="bg-white border border-red-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={item.image[0]}
              alt={item.name}
              className="w-full h-[400px] object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-red-700 mb-2">
                {item.name}
              </h3>
              <p className="text-sm text-gray-700 line-clamp-4">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Link to={"./program"} className="mt-10 flex flex-col items-center group">
        <Lottie options={defaultOptions} height={80} width={50} />
        <p className="text-[20px] text-red-700 font-semibold group-hover:underline transition">
          See more
        </p>
      </Link>
    </div>
  );
};

export default ProgrammeArea;

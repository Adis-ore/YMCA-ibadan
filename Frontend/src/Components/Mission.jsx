

import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Mission = () => {
  return (
    <div className="bg-white text-red-700 py-10 px-4 flex flex-col items-center w-full">
      
      {/* YMCA Intro Section */}
      <div className="flex flex-col lg:flex-row items-center justify-around w-full max-w-7xl gap-6 mb-10">
        <Link>
          <img className="w-[500px] rounded-xl shadow-lg" src={assets.wall} alt="YMCA Wall" />
        </Link>
        <div className="text-gray-800 text-lg max-w-xl">
          <p className="text-3xl font-bold text-red-700 mb-3">YMCA</p>
          <p>
            YMCA Ibadan is a branch of the international Young Men's Christian
            Association, a non-governmental organization that focuses on the
            spiritual, intellectual, social, and physical well-being of young men
            and the community.
          </p>
          <p className="mt-2">
            The YMCA in Ibadan is known for its commitment to youth and community
            development in the city. They also have a Youth Council that provides
            safe spaces and opportunities for young people to engage in community
            transformation.
          </p>
        </div>
      </div>

      {/* Mission / Vision / Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full px-4 mb-10">
        {[
          { title: "Mission", img: assets.Mission },
          { title: "Vision", img: assets.vision },
          { title: "Values", img: assets.core_values },
        ].map(({ title, img }) => (
          <div key={title} className="bg-red-600 text-white rounded-xl overflow-hidden shadow-lg">
            <div className="h-48 w-full overflow-hidden">
              <img src={img} className="w-full h-full object-cover" alt={title} />
            </div>
            <div className="p-4">
              <p className="text-2xl font-semibold mb-2">{title}:</p>
              <p className="text-sm leading-relaxed">
                To promote public safety, security and justice through empirical
                research, legislative advocacy, demonstration programmes and
                publications, in partnership with government, civil society and
                the private sector.
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <Link to="/enroll" className="flex flex-col items-center">
        <p className="text-lg font-medium text-center mb-2">Become a Volunteer. Make a Difference</p>
        <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-full shadow-md transition">
          Volunteer
        </button>
      </Link>
    </div>
  );
};

export default Mission;

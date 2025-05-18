import React from "react";
import { Link } from "react-router-dom";
import { teamData } from "../assets/assets";

const TeamScheme = () => {
  return (
    <div className="p-4 bg-red-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-2">
      {/* {teamData.map((t) => (
        <Link
          to={`/teams/${t._id}`}
          key={t._id}
          className="bg-white rounded-2xl shadow-md p-4 text-center hover:shadow-lg transition"
        >
          <img
            src={t.image}
            alt={t.name}
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">{t.name}</h2>
          <p className="text-gray-600 mb-2">{t.role}</p>
        </Link>
      ))} */}
    </div>
  );
};

export default TeamScheme;

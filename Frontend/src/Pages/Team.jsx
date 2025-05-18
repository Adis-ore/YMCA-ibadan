
import React, { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from "../App";

const Team = () => {
  const [teams, setTeams] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const getTeams = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/team/list");
      if (response.data.success) {
        setTeams(response.data.team);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getTeams();
  }, []);

  const openModal = (team) => {
    setSelectedTeam(team);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTeam(null);
  };

  return (
    <div className="relative p-8 bg-red-50 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {teams.map((t) => (
          <div
            key={t._id}
            onClick={() => openModal(t)}
            className="cursor-pointer bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-40 h-40 mx-auto rounded-md object-cover mb-6"
            />
            <h2 className="text-3xl font-semibold text-gray-800">{t.name}</h2>
            <p className="text-lg text-gray-600 mt-2">{t.role}</p>
          </div>
        ))}
      </div>

      {/* Modal shown just above the team grid, centered horizontally */}
     {showModal && selectedTeam && (
  <>
    {/* Semi-transparent overlay */}
    <div
      onClick={closeModal}
      className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-40"
    ></div>

    <div
      className="absolute top-10 left-1/2 -translate-x-1/2 z-50 bg-white rounded-xl shadow-2xl max-w-6xl w-[95%] max-h-[90vh] overflow-y-auto border-4 border-amber-400 p-12"
      style={{ backdropFilter: "blur(6px)" }}
    >
      {/* Close button */}
      <button
        onClick={closeModal}
        className="absolute top-6 right-6 text-amber-600 hover:text-amber-800 transition text-5xl"
        aria-label="Close modal"
      >
        <MdOutlineCancel />
      </button>

      {/* Content */}
      <div className="flex flex-col sm:flex-row gap-16">
        <img
          src={selectedTeam.image}
          alt={selectedTeam.name}
          className="w-72 h-72 rounded-md object-cover flex-shrink-0"
        />
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl font-bold text-amber-600 mb-6">
            {selectedTeam.name}
          </h2>
          <p className="text-3xl font-semibold text-gray-700 mb-8">
            {selectedTeam.role}
          </p>
          <p className="text-gray-600 whitespace-pre-line leading-relaxed text-xl">
            {selectedTeam.about}
          </p>
          <p className="text-gray-600 whitespace-pre-line leading-relaxed text-xl">
            {selectedTeam.email}
          </p>
          <p className="text-gray-600 whitespace-pre-line leading-relaxed text-xl">
            {selectedTeam.contact}
          </p>
        </div>
      </div>
    </div>
  </>
)}

    </div>
  );
};

export default Team;


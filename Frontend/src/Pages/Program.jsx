
import React, { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from "../App";

const Program = () => {
  const [programmes, setProgrammes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);

  const getProgrammes = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/program/list");
      if (response.data.success) {
        setProgrammes(response.data.programs);
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

  const openModal = (program) => {
    setSelectedProgram(program);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProgram(null);
  };

  return (
    <div className="relative p-8 bg-red-50 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {programmes.map((p) => (
          <div
            key={p._id}
            onClick={() => openModal(p)}
            className="cursor-pointer bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-60 object-cover rounded-md mb-6"
            />
            <h2 className="text-3xl font-semibold text-gray-800">{p.name}</h2>
            <p className="text-lg text-gray-600 mt-2">{p.description}</p>
          </div>
        ))}
      </div>

      {/* Modal with same styling as Team */}
      {showModal && selectedProgram && (
        <>
          {/* Semi-transparent overlay */}
          <div
            onClick={closeModal}
            className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-40"
          ></div>

          <div
            className="absolute top-10 left-1/2 -translate-x-1/2 z-50 bg-white rounded-xl shadow-2xl max-w-6xl w-[95%] max-h-[90vh] overflow-y-auto p-12"
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

            {/* Modal content */}
            <div className="flex flex-col sm:flex-row gap-16">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.name}
                className="w-72 h-72 rounded-md object-cover flex-shrink-0"
              />
              <div className="flex flex-col justify-center">
                <h2 className="text-5xl font-bold text-amber-600 mb-6">
                  {selectedProgram.name}
                </h2>
                <p className="text-gray-600 whitespace-pre-line leading-relaxed text-xl">
                  {selectedProgram.description}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Program;

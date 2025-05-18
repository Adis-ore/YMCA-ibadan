import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
// import { projectData } from "../assets/assets";
import { ProjectContext } from "../Context/ProjectContext";
import ScrollToTop from "../Components/Scroll";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Projects = () => {
  const { currency } = useContext(ProjectContext);
  const [donation, setDonation] = useState(false);
  const [getDonor, setGetDonor] = useState();

  const [project, setProject] = useState([]);

  const getProject = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/project/list");

      
      if(response.data.success){
        setProject(response.data.projects);
      } else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  // console.log(setDonation);

  return (
    <div className=" p-4 grid grid-cols-1 sm:grid-cols-3 gap-6 mt-2">
      <ScrollToTop />
      {project.map((project) => (
        <div
          key={project._id}
          className="bg-white rounded-2xl  shadow-md p-4 text-center hover:shadow-lg transition"
        >
          <img
            src={project.image[0]} // Access first image
            alt={project.name}
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">
            {project.name}
          </h2>
          <p className="text-gray-600 mb-2">{project.description}</p>
          <div className="flex gap-1 flex-col justify-center items-center text-gray-700 text-lg">
            <p className="flex items-center">
              Target Amount: {currency} {project.targetAmount}
            </p>
            <p className=" flex items-center">
              Amount Raised: {currency}
              {project.amountRaised}
            </p>
          </div>
          <Link>
            <button
              onClick={() => {
                setDonation(true);
                setGetDonor(project._id);
                // console.log(getDonor);
              }}
              className="bg-red-400 m-3 text-white px-8 py-3"
            >
              Donate
            </button>
          </Link>
        </div>
      ))}
      {donation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000050] ">
          <div className="sm:w-[70vh] sm:h-[70vh] fixed w-[90%] h-[80%] rounded-lg -translate-x-1/2 -translate-y-1/2 left-[50%] top-[50%] inset-0 z-50 bg-white ">
            <div className="flex justify-between items-center p-4 border-b-3 border-red-500 rounded-t-lg">
              <p className="text-red-300 text-2xl">Support our Project</p>
              <MdOutlineCancel
                className="text-[30px]"
                onClick={() => setDonation(false)}
              />
            </div>
            {project.find((project) => project._id === getDonor) && (
              <div className=" flex flex-col p-2">
                <div className="text-red-300">
                  <p className="text-4xl flex justify-center">
                    {
                      project.find((project) => project._id === getDonor)
                        .name
                    }
                  </p>
                  <p>
                    {
                      project.find((project) => project._id === getDonor)
                        .about
                    }
                  </p>
                </div>
                <form
                  action=""
                  className="  flex flex-col gap-4 p-10 rounded-lg mt-4"
                >
                  <input
                    className="w-full px-3 py-2 border border-gray-800 rounded-2xl "
                    type="text"
                    placeholder="FULL NAME"
                    required
                  />
                  <input
                    className="w-full px-3 py-2 border border-gray-800 rounded-2xl "
                    type="email"
                    placeholder="EMAIL"
                    required
                  />
                  <input
                    className="w-full px-3 py-2 border border-gray-800 rounded-2xl "
                    type="number"
                    placeholder="PHONE NUMBER"
                    required
                  />
                  <input
                    className="w-full px-3 py-2 border border-gray-800 rounded-2xl "
                    type="number"
                    placeholder="DONATION AMOUNT"
                    required
                  />
                </form>
                <button className="bg-red-300 cursor-pointer text-white w-full py-2 px-8 mt-4">
                  Proceed to remita
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

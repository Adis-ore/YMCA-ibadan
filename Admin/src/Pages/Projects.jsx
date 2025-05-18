import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { MdCancel, MdCloudUpload } from "react-icons/md";

const Projects = ({ token }) => {
  // Adding Projects
  const [image1, setImage1] = React.useState(false);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  // const [about, setAbout] = React.useState("");
  const [targetAmount, setTargetAmount] = React.useState("");
  const [amountRaised, setAmountRaised] = React.useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      // formData.append("about", about);
      formData.append("targetAmount", targetAmount);
      formData.append("amountRaised", amountRaised);
      formData.append("image", image1);

      const response = await axios.post(
        backendUrl + "/api/project/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setDescription("");
        // setAbout("");
        setName("");
        setTargetAmount("");
        setAmountRaised("");
        setImage1(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // LIST
  // const [list,setList] = useState([])
  const [list, setList] = useState([]); // ✅ already okay

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/project/list");

      if (response.data.success) {
        setList(response.data.projects);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Delete
  const deleteHander = async (id) => {
    try {
      const response = await axios.delete(backendUrl + "/api/project/delete", {
        data: { id },
        headers: { token },
      });
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="gap-1 p-2 ">
      <h1 className="font-bold text-3xl text-center">PROJECT PAGE</h1>
      <div className="flex justify-between gap-2 flex-col sm:flex-row">
        {/* -------------ADD-------- */}
        <div className="w-[100%] sm:w-[50%] bg-blue-400 ]">
          <p>Add</p>
          <form
            onSubmit={onSubmitHandler}
            className="gap-2 p-2 text-red-900 text-[20px]"
          >
            {/* ----------------Project Image------------ */}
            <div>
              <p>Project Image</p>
              <label htmlFor="image1" className="cursor-pointer">
                {!image1 ? (
                  <MdCloudUpload className="text-[80px] text-gray-400" />
                ) : (
                  <img
                    src={URL.createObjectURL(image1)}
                    alt="preview"
                    className="w-20 h-20 object-cover rounded"
                  />
                )}
                <input
                  type="file"
                  id="image1"
                  hidden
                  required
                  onChange={(e) => setImage1(e.target.files[0])}
                />
              </label>
            </div>
            {/* -------------------Project Name-------------- */}
            <div>
              <p>Project Name</p>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
                placeholder="Project Name"
              />
            </div>
            {/* -------------------Project Description-------------- */}
            <div>
              <p>Project Description</p>
              <textarea
                name=""
                id=""
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                required
                placeholder="Project Description"
              />
            </div>
            {/* <div>
              <p>Project About</p>
              <input
                type="text"
                onChange={(e) => setAbout(e.target.value)}
                value={about}
                required
                placeholder="About Project"
              />
            </div> */}
            <div>
              <p>Target Amount</p>
              <input
                type="Number"
                onChange={(e) => setTargetAmount(e.target.value)}
                value={targetAmount}
                required
                placeholder="Target Amount"
              />
            </div>
            <div>
              <p>Amount Raised</p>
              <input
                type="Number"
                onChange={(e) => setAmountRaised(e.target.value)}
                value={amountRaised}
                required
                placeholder="Amount Raised"
              />
            </div>
            <button
              type="submit"
              className="bg-red-500 text-white rounded-3xl px-6 py-2 m-2 "
            >
              Add Project
            </button>
          </form>
        </div>
        {/* --------------LIST------------ */}
        <div className="w-[100%] sm:w-[50%] bg-red-400 ">
          <p>List</p>
          <div className="hidden md:grid p-1 grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr]">
            <b>Image</b>
            <b>Name</b>
            <b>Description</b>
            {/* <b>About</b> */}
            <b>TA</b>
            <b>AR</b>
            <b>Delete</b>
          </div>
          {list.map((item, index) => (
            <div
              key={index}
              className="grid gap-3 p-2 border text-sm md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] grid-cols-1 items-start"
            >
              <img src={item.image[0]} alt="" className="w-20" />
              <p>{item.name}</p>
              <p>{item.description}</p>
              <p>{item.targetAmount}</p>
              <p>{item.amountRaised}</p>
              <MdCancel
                onClick={() => deleteHander(item._id)}
                className="text-[20px] text-blue-600"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

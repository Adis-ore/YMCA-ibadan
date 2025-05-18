import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { backendUrl } from "../App";
import { MdCancel, MdCloudUpload } from "react-icons/md";
import axios from "axios";

const Program = ({ token }) => {
  // ADD
  const [image1, setImage1] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("image", image1);

      const response = await axios.post(
        backendUrl + "/api/program/add",
        formData,
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setDescription("");
        setName("");
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
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/program/list");

      if (response.data.success) {
        setList(response.data.programs);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Delete
  const deleteHandler = async (id) => {
    try {
      const response = await axios.delete(backendUrl + "/api/program/delete", {
        data: { id },
        headers: { token },
      });
      if (response.data.success) {
        toast.success(response.data.message);
        fetchList();
      } else {
        toast.error(response.data.message);
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
    <div className="gap-1 p-2">
      <h1 className="text-2xl text-center font-bold p-1">Program Page</h1>
      <div className="flex justify-between gap-2 flex-col sm:flex-row">
        {/* ---------------Add -------------- */}
        <div className=" w-[100%] sm:w-[50%] p-1 bg-[#00000010]">
          <p className="text-center text-2xl font-medium">Add</p>
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col w-full items-start gap-3"
          >
            {/* ----------IMAGE---------- */}
            <div>
              <p>Upload Image</p>
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
            {/*--------------NAME------------------- */}
            <div>
              <p>NAME</p>
              <input
                type="text"
                required
                placeholder=""
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            {/* -------------DESCRIPTION  ------------------*/}
            <div>
              <p>Description</p>
              <input
                type="text"
                name=""
                id=""
                required
                placeholder=""
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </div>
            <button
              type="submit"
              className="bg-red-700 px-8 py-2 rounded-3xl  text-white"
            >
              Add Project
            </button>
          </form>
        </div>
        {/* ---------------LIST --------------------- */}
        <div className=" font-medium text-2xl w-[100%] sm:w-[50%]  bg-[#00000070]">
          <p>List</p>
          <div>
            <div className="hidden md:grid grid-cols-[1fr_1fr_1fr_1fr]">
              <b>Image</b>
              <b>Name</b>
              <b>Description</b>
              <b>Delete</b>
            </div>
            {list.map((item, index) => (
              <div
                key={index}
                className="grid gap-3 p-2 border text-sm md:grid-cols-[1fr_1fr_1fr_1fr] grid-cols-1 items-start"
              >
                <img className="w-20 " src={item.image[0]} alt="" />
                <p>{item.name}</p>
                <p>{item.description}</p>
                <MdCancel
                  onClick={() => deleteHandler(item._id)}
                  className="text-red-800 text-[20px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdCancel, MdCloudUpload } from "react-icons/md";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Months = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [name, setName] = useState("");
  const [deeds, setDeeds] = useState("");
  const [heading, setHeading] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("deeds", deeds);
      formData.append("heading", heading);
      formData.append("image", image1);

      const response = await axios.post(
        backendUrl + "/api/month/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setDeeds("");
        setHeading("");
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
  // LIST OF MONTHS
  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/month/list");

      if (response.data.success) {
        setList(response.data.month);
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
      const response = await axios.delete(backendUrl + "/api/month/delete/", {
        data: { id },
        headers: { token },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.messsage);
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
      <p className="text-3xl text-center font-bold">MONTHS</p>
      <div className="flex flex-col sm:flex-row gap-1 p-2">
        {/* -----------ADD----------- */}
        <div className="w-[100%] sm:w-[50%] bg-[#00000010]">
          <p>Add</p>
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col  w-full items-start gap-3 "
          >
            <div>
              {/* -----------IMAGE---------- */}
              <p className="font-semibold text-[20px]">Upload Image</p>
              <div className="w-full ">
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
              {/* ------------HEADINGS------------ */}
              <div className="w-full ">
                <p className="font-semibold text-[20px]">Headings</p>
                <input
                  type="text"
                  onChange={(e) => setHeading(e.target.value)}
                  value={heading}
                  required
                  placeholder="Title of the month"
                />
              </div>
              {/* -----------NAME------------- */}
              <div>
                <p className="font-semibold text-[20px]">NAME</p>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="NAME"
                  required
                />
              </div>
              {/* -----------DEEDS------------- */}
              <div>
                <p className="font-semibold text-[20px]">Deeds</p>
                <input
                  onChange={(e) => setDeeds(e.target.value)}
                  value={deeds}
                  type="text"
                  required
                  placeholder="Deeds"
                />
              </div>
            </div>
            <button type="submit" className="bg-red-400 px-8 py-2 rounded-xl">
              Add month
            </button>
          </form>
        </div>
        {/* -------------LIST---------------- */}
        <div className=" font-medium text-2xl w-[100%] sm:w-[50%]  bg-[#00000070]">
          <p>List</p>
          <div>
            <div className="hidden md:grid grid-cols-[1fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border text-sm ">
              <b>Image</b>
              <b>Headings</b>
              <b>Name</b>
              <b>Deeds</b>
              <b>Delete</b>
            </div>
            {list.map((item, index) => (
              <div
                key={index}
                className="grid md:grid-cols-[1fr_1fr_1fr_1fr_1fr] grid-cols-1 gap-2 p-2 border items-center text-sm"
              >
                <img className="w-20 " src={item.image[0]} alt="" />
                <p>{item.heading}</p>
                <p>{item.name}</p>
                <p>{item.deeds}</p>
                {/* <button className="bg-red-400 px-2 py-1 rounded-xl">Delete</button> */}
                <MdCancel
                  onClick={() => deleteHandler(item._id)}
                  className="text-[20px] text-red-600 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Months;

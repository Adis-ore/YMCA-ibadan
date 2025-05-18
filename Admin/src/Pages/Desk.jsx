import { ImCancelCircle } from "react-icons/im";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { MdCancel, MdCloudUpload } from "react-icons/md";
import { toast } from "react-toastify";

const Desk = ({ token }) => {
  //  TO SET THE IMAGE
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
        backendUrl + "/api/desk/add",
        formData,
        { headers: { token } }
      );
      // console.log(response.data);

      if (response.data.success) {
        toast.success(response.data.message);
        setDescription("");
        setImage1(false);
        setName("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // LISTING THE DESK
  const [desk, setDesk] = useState([]);

  const listDesk = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/desk/list", {
        headers: { token },
      });

      if (response.data.success) {
        setDesk(response.data.desk);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // DELETE THE DESK
  const deleteDesk = async (id) => {
    try {
      const response = await axios.delete(backendUrl + "/api/desk/delete", {
        headers: { token },
        data: { id },
      });
      if (response.data.success) {
        toast.success(response.data.message);
        await listDesk();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    listDesk();
  }, []);

  return (
    <div className="gap-1 p-2">
      <p className="text-2xl font-bold text-center p-1">DESK</p>
      <div className="flex justify-between gap-2 flex-col sm:flex-row">
        {/* --------------- ADD ---------- */}
        <div className="flex flex-col p-2 w-[100%] sm:w-[50%] bg-blue-200">
          <p>ADD</p>
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col w-full items-start gap-3"
          >
            <p>Upload Image</p>
            <div>
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
                  onChange={(e) => setImage1(e.target.files[0])}
                />
              </label>
            </div>
            {/*---------------------- NAME----------------- */}
            <div>
              <p>Add The Desk</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
              />
            </div>
            <div>
              <p>The desk info</p>
              <textarea
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                name=""
                id=""
              />
            </div>
            <button
              type="submit"
              className="text-center   cursor-pointer bg-red-500 px-5 py-2 rounded-2xl p-3 flex justify-around items-center"
            >
              Add Desk
            </button>
          </form>
        </div>
        {/* --------------- LIST -------------- */}
        <div className=" font-medium text-2xl w-[100%] sm:w-[50%] bg-[#00000070]">
          <p>LIST</p>
          <div>
            <div className="hidden md:grid grid-cols-[1fr_1fr_1fr_1fr] items-center py-1 px-2 border  text-sm">
              <b>Image</b>
              <b>Name</b>
              <b>Description</b>
              <b>Action</b>
            </div>
            {desk.map((item, index) => (
              <div
                key={index}
                className="grid md:grid-cols-[1fr_1fr_1fr_1fr] grid-cols-1 gap-2 items-center py-2 px-2 border-b text-sm"
              >
                <img src={item.image[0]} className="w-15" alt="" />
                <p>{item.name}</p>
                <p>{item.description}</p>
                <ImCancelCircle
                  onClick={() => deleteDesk(item._id)}
                  className="text-red-600 cursor-pointe"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desk;

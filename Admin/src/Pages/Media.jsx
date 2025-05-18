import React, { useEffect, useState } from "react";
import { MdCancel, MdCloudUpload } from "react-icons/md";
import { toast } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../App";

const Media = ({ token }) => {
  // TO Add Media
  const [image1, setImage1] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!image1) {
      toast.error("Please upload an image.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image1);

      const response = await axios.post(
        backendUrl + "/api/media/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setDescription("");
        setImage1(false);
        setTitle("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //  THE LIST OF MEDIA
  const [list, setList] = useState([]);
  const fetchList = async () => {
    try {
      const reponse = await axios.get(backendUrl + "/api/media/list", {
        headers: { token },
      });

      if (reponse.data.success) {
        setList(reponse.data.media);
      } else {
        toast.error(reponse.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Delete Media
  const deleteMedia = async (id) => {
    try {
      const response = await axios.delete(backendUrl + "/api/media/delete", {
        data: { id },
        headers: { token },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
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
    <div>
      <p>MEDIA</p>
      <div className="flex flex-col sm:flex-row gap-2">
        {/* ------------ADD---------------- */}
        <div className="w-full sm:w-1/2 bg-orange-500">
          <p>Add</p>
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col w-full items-start gap-3 p-2"
          >
            {/* -----------IMAGE------------ */}
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
                  onChange={(e) => setImage1(e.target.files[0])}
                />
              </label>
            </div>
            {/* ------------TITLE---------- */}
            <div>
              <p>Title</p>
              <input
                required
                placeholder="Title of media"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text"
              />
            </div>
            {/* ---------------------Description --------------- */}
            <div>
              <p>Description</p>
              <textarea
                required
                placeholder="About Media"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                id=""
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer bg-yellow-400 px-8 py-2 rounded-2xl"
            >
              Add Media
            </button>
          </form>
        </div>
        {/* --------------LIST--------------------- */}
        <div className="w-full sm:w-1/2 bg-blue-500">
          <p>LIST</p>
          <div>
            <div className="grid grid-cols-[1fr_2fr_3fr_1fr] gap-2 p-2">
              <b>Image</b>
              <b>Title</b>
              <b>Description</b>
              <b>Delete</b>
            </div>
            {list.map((item) => (
              <div
                key={item._id}
                className="grid md:grid-cols-[1fr_2fr_3fr_1fr] grid-cols-1 gap-2 p-2 border-b text-sm"
              >
                <img
                  src={item.image[0]}
                  alt="media"
                  className="w-20 h-20 object-cover rounded"
                />
                <p>{item.title}</p>
                <p>{item.description}</p>
                <MdCancel
                  onClick={() => deleteMedia(item._id)}
                  className="text-red-500 text-[30px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;

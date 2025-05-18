
import { MdCancel } from "react-icons/md";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Team = ({ token }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value.toUpperCase());
  };

  const [image1, setImage1] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [about, setAbout] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("role", role);
      formData.append("about", about);
      formData.append("contact", contact);
      formData.append("email", email);
      formData.append("image", image1);

      const resposne = await axios.post(
        backendUrl + "/api/team/add",
        formData,
        { headers: { token } }
      );

      if (resposne.data.success) {
        toast.success(resposne.data.message);
        setAbout("");
        setContact("");
        setEmail("");
        setImage1(false);
        setName("");
        setRole("");
      } else {
        toast.error(resposne.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/team/list");

      if (response.data.success) {
        setList(response.data.team);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeTeam = async (id) => {
    try {
      const response = await axios.delete(backendUrl + "/api/team/delete", {
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
    <div className=" gap-1 p-2">
      <p className="text-2xl font-bold text-center p-1">TEAM PAGE</p>
      <div className="flex justify-between gap-2 flex-col sm:flex-row">
        {/* --------------ADD ------------------ */}
        <div className=" w-[100%] sm:w-[50%] bg-[#00000010]"   >
          <p className="text-center text-2xl font-medium"  >Add</p>
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col w-full items-start gap-3"
          >
            <div>
              <p className="mb-2">Upload Image</p>
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
                    required
                    onChange={(e) => setImage1(e.target.files[0])}
                  />
                </label>
              </div>
            </div>
            <div className="w-full">
              <p className="mb-2">NAME OF TEAM </p>
              <input
                onChange={(e) => setName(e.target.value.toUpperCase())}
                style={{ textTransform: "uppercase" }}
                className="w-full max-w-[500px] px-3 py-2 "
                value={name}
                type="text"
                placeholder="Team member name"
                required
              />
            </div>
            <div className="w-full">
              <p className="mb-2">ROLE OF TEAM </p>
              <input
                onChange={(e) => setRole(e.target.value)}
                value={role}
                className="w-full max-w-[500px] px-3 py-2 "
                type="text"
                placeholder="Team member role"
                required
              />
            </div>
            <div className="w-full">
              <p className="mb-2">ABOUT TEAM </p>
              <textarea
                onChange={(e) => setAbout(e.target.value)}
                value={about}
                className="w-full max-w-[500px] px-3 py-2 "
                type="text"
                placeholder="About Team member "
                required
              />
            </div>
            <div className="w-full">
              <p className="mb-2">CONTACT OF TEAM </p>
              <input
                onChange={(e) => setContact(e.target.value)}
                value={contact}
                className="w-full max-w-[500px] px-3 py-2 "
                type="number"
                placeholder="Team member Phone no"
                required
              />
            </div>
            <div className="w-full">
              <p className="mb-2">EMAIL OF TEAM </p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full max-w-[500px] px-3 py-2 "
                type="email"
                placeholder="Team member Email"
                required
              />
            </div>
            <button
              type="submit"
              className="text-center   cursor-pointer bg-red-500 px-5 py-2 rounded-2xl p-3 flex justify-around items-center"
            >
              Add Team
            </button>
          </form>
        </div>

        {/* --------------LIST ------------- */}
        <div className=" font-medium text-2xl w-[100%] sm:w-[50%] bg-[#00000070]">
          <p>LIST</p>
          <div>
            <div className="hidden md:grid grid-cols-[1fr_1fr_1fr_2fr_1fr_1fr_1fr] items-center py-1 px-2 border  text-sm">
              <b>Image</b>
              <b>Name</b>
              <b>Role</b>
              <b>About</b>
              <b>Contact</b>
              <b>Email</b>
              <b>Delete</b>
            </div>
            {list.map((item, index) => (
              <div
                key={index}
                className="grid gap-2 grid-cols-1 md:grid-cols-[1fr_1fr_1fr_2fr_1fr_1fr_1fr] items-start md:items-center p-2 border text-sm"
              >
                <img className="w-15 h-15" src={item.image[0]} alt="" />
                <p>{item.name}</p>
                <p>{item.role}</p>
                <p>{item.about}</p>
                <p className="">{item.contact}</p>
                <p>{item.email}</p>
                <MdCancel onClick={()=> removeTeam(item._id)} className="text-[20px] cursor-pointer text-red-600" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;


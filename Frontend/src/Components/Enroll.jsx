import React, { useState } from "react";

const Enroll = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    unit: "",
    sex: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // or send to your backend
  };


  return (
    <form onSubmit={handleSubmit} className=" flex justify-center items-center flex-col">
      <h1>
        <p>VOLUNTEER</p>
      </h1>
      <div className="bg-stone-50  flex flex-col  gap-4 p-10 rounded-3xl mt-4 justify-center items-start w-[90%] sm:w-[70%] min-h-[80vh] ">
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800 rounded-2xl"
          placeholder="NAME"
          required
          name="name" onChange={handleChange}
        />
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-800 rounded-2xl"
          placeholder="EMAIL"
          required
          name="email" onChange={handleChange}
        />
        <input
          type="number"
          className="w-full px-3 py-2 border border-gray-800 rounded-2xl"
          placeholder="PHONE NUMBER"
          required
          name="phone" onChange={handleChange}
        />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <h1 className="font-bold text-gray-500 text-center sm:text-left">
            Closest YMCA unit near you
          </h1>
          <select
            name="unit"
            className="p-2 rounded border border-gray-300 w-full sm:w-auto"
            required onChange={handleChange}
          >
            <option value="agugu">AGUGU</option>
            <option value="bomac">BOMAC</option>
            <option value="yemetu">YEMETU</option>
            <option value="bodija">BODIJA</option>
          </select>
        </div>

        <div className="flex justify-center items-center gap-4">
          <h1 className="font-bold text-2xl  text-gray-500">SEX</h1>
          <select name="sex" id="" onChange={handleChange}>
            <option value="male">MALE</option>
            <option value="female">FEMALE</option>
          </select>
        </div>
        <div className=" flex mt-40">
          <button type="submit" className="bg-red-400 px-8 py-2 rounded-2xl">
            REGISTER
          </button>
        </div>
      </div>
    </form>
  );
};

export default Enroll;

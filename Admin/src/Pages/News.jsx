import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { MdCancel } from "react-icons/md";

const News = ({ token }) => {
  // NEWS
  const [news, setNews] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      // const formData = new FormData();
      const response = await axios.post(
        backendUrl + "/api/news/add",
        { newsContent: news },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // console.log(response.data);

      if (response.data.success) {
        toast.success(response.data.message);
        setNews("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // LIST NEWS
  const [list, setList] = useState([]);
  const listNew = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/news/list", {
        headers: { token },
      });
      if (response.data.success) {
        setList(response.data.news);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  //  REMOVE NEWS
  const removeNews = async (id) => {
    try {
      const response = await axios.delete(backendUrl + "/api/news/delete", {
        data: { id },
        headers: { token },
      });
      if (response.data.success) {
        toast.success(response.data.message);
        await listNew();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    listNew();
  }, []);

  return (
    <div>
      <p className="text-2xl font-bold text-center p-1">NEWS PAGE</p>
      <div className="flex justify-between gap-2 flex-col sm:flex-row">
        {/*-------------- ADD--------------- */}
        <div className=" w-[100%] sm:w-[50%] bg-[#00000010]">
          <p className="text-center text-bold text-2xl">Add</p>
          <div className="flex justify-center items-center gap-2 p-2">
            <form
              onSubmit={submitHandler}
              className="flex justify-center flex-col gap-3"
            >
              <textarea
                onChange={(e) => setNews(e.target.value)}
                value={news}
                placeholder="Add News"
                required
              />
              <button
                type="submit"
                className="text-center text-white cursor-pointer bg-black px-5 py-2 rounded-2xl p-3 flex justify-around items-center"
              >
                Add News
              </button>
            </form>
          </div>
        </div>
        {/* ---------------- LIST -------------------- */}
        <div className=" w-[100%] sm:w-[50%] bg-blue-400">
          <p className="text-center text-bold text-2xl">List</p>
          <div>
            <div className="hidden sm:grid grid-cols-[9fr_1fr] p-1">
              <b>News</b>
              <b>Delete</b>
            </div>
            {list.map((item, index) => (
              <div
                key={index}
                className="grid gap-2 items-center border-b p-2 sm:grid-cols-[9fr_1fr] grid-cols-1"
              >
                <p>{item.newsContent}</p>
                <button>
                  <MdCancel
                    onClick={() => removeNews(item._id)}
                    className="text-[20px] text-red-600"
                  />
                </button>
                <hr className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Marquee from "react-fast-marquee";
// import { backendUrl } from "../App";
// import { toast } from "react-toastify";
// // import { news } from "../assets/assets";

// const News = () => {
//   const [news, setNews] = useState([]);

//   const fetchNews = async () => {
//     try {
//       const response = await axios.get(backendUrl + "/api/news/list");
//       if (response.data.success) {
//         setNews(response.data.news);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//   fetchNews()
//   }, [])

//   return (
//     <div className="gap-4 p-2">
//       <Marquee
//         speed={50}
//         gradient={false}
//         loop={0}
//         autoFill={true}
//         pauseOnHover={true}
//         className="bg-red-800 cursor-pointer text-white py-2"
//       >
//         {news.map((e) => (
//           <h5 className="p-2">🚨 {e.newsContent} →</h5>
//         ))}
//       </Marquee>
//     </div>
//   );
// };

// export default News;

import axios from "axios";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const News = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/news/list");
      if (response.data.success) {
        setNews(response.data.news);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="w-full py-3 bg-red-800">
      <Marquee
        speed={60}
        gradient={false}
        pauseOnHover={true}
        className="text-white text-sm sm:text-base font-medium"
      >
        {news.length > 0 ? (
          news.map((e, index) => (
            <div key={index} className="px-4 whitespace-nowrap flex items-center gap-2">
              <span className="text-lg">🚨</span>
              {e.newsContent}
              <span className="mx-2">|</span>
            </div>
          ))
        ) : (
          <p className="px-4">📢 Stay tuned for updates...</p>
        )}
      </Marquee>
    </div>
  );
};

export default News;

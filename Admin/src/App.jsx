import { Route, Routes } from "react-router-dom";
import Projects from "./Pages/Projects";
import Navbar from "./Component/Navbar";
import Team from "./Pages/Team";
import Media from "./Pages/Media";
import News from "./Pages/News";
import Home from "./Pages/Home";
import Program from "./Pages/Program";
import Months from "./Pages/Months";
import Desk from "./Pages/Desk";
import { useEffect, useState } from "react";
import Login from "./Pages/Login";
import { ToastContainer, toast } from 'react-toastify';

export  const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") ? localStorage.getItem("token"): "");

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token])

  return (
    <div>
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : 
        <>
          <Navbar setToken={setToken} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects token={token} />} />
            <Route path="/teams" element={<Team token={token} />} />
            <Route path="/media" element={<Media token={token} />} />
            <Route path="/news" element={<News token={token} />} />
            <Route path="/projects" element={<Projects token={token} />} />
            <Route path="/program" element={<Program token={token} />} />
            <Route path="/month" element={<Months token={token} />} />
            <Route path="/desk" element={<Desk token={token} />} />
          </Routes>
        </>
      }
    </div>
  );
};

export default App;

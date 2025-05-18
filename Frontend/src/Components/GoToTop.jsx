import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition duration-300 z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default GoToTop;

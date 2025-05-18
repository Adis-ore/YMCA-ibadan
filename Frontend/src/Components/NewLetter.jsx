import React, { useState } from "react";

const NewLetter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setError("");
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail("");
    }, 1000);
  };

  return (
    <div className="text-center p-4 max-w-lg mx-auto">
      <p className="text-2xl font-medium text-gray-800">
        Join the YMCA Community
      </p>
      <p className="text-gray-400 mt-3">
        Stay connected with the latest updates and programs from YMCA — empowering
        youth and strengthening communities worldwide.
      </p>

      {submitted && (
        <p className="text-green-600 mt-4 font-semibold">
          Thank you for subscribing! We appreciate your support.
        </p>
      )}

      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded"
        noValidate
      >
        <input
          className="w-full sm:flex-1 outline-none py-3 px-2"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={loading}
          className={`bg-black text-white text-2xl px-8 py-4 transition-all duration-300 ${
            loading ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-900"
          }`}
        >
          {loading ? "Submitting..." : "Subscribe"}
        </button>
      </form>

      {error && <p className="text-red-600 mt-2">{error}</p>}

      <p className="mt-8 text-sm text-gray-600 max-w-md mx-auto">
        Visit the official YMCA foundation website for more on how they impact
        lives and create opportunities for all:{" "}
        <a
          href="https://www.ymca.net"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-600 underline"
        >
          ymca.net
        </a>
      </p>
    </div>
  );
};

export default NewLetter;

import React from 'react'

const Sponsorship = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-red-600 mb-8 text-center">
          Sponsorship & Partnership
        </h1>

        <p className="text-lg mb-6 leading-relaxed">
          At <span className="font-semibold">YMCA Ibadan</span>, we believe in the power of collaboration. Our mission to empower youth, promote healthy living, and support communities thrives through the generous support of sponsors and partners.
        </p>

        <h2 className="text-2xl font-semibold text-red-500 mb-4 mt-10">Why Partner with Us?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Make a lasting impact in local communities</li>
          <li>Enhance your brand’s social responsibility</li>
          <li>Reach youth, families, and underserved groups</li>
          <li>Receive public recognition across our platforms</li>
        </ul>

        <h2 className="text-2xl font-semibold text-red-500 mb-4 mt-10">Ways to Collaborate</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Sponsorship of programs and events</li>
          <li>In-kind donations (equipment, services, facilities)</li>
          <li>Corporate volunteering and team building</li>
          <li>Media and awareness partnerships</li>
        </ul>

        <div className="mt-10 p-6 border-l-4 border-red-600 bg-white shadow rounded-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Interested in Partnering with Us?</h3>
          <p className="text-gray-700 mb-3">
            Email us at: <a href="mailto:ymcaibadan@yahoo.com" className="text-red-600 underline">ymcaibadan@yahoo.com</a>
          </p>
          <p className="text-gray-700">
            Or visit us at: <br />
            YMCA Ibadan, No 7 Oluyoro Street, Off Awolowo Avenue, Old Bodija, Ibadan, Oyo State, Nigeria.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sponsorship



import React from 'react';
import { assets } from '../assets/assets'; // Adjust path if different

const historyData = [
  {
    title: "History about YMCA of Ibadan",
    text: "History about YMCA of Ibadan revealed that the coming together of young men (Young Men’s Christian Association) started far back as early fifties when young men socialized regularly with members of Young Women Christian Association of Ibadan at their Association Centre at Oke-Bola.",
    image: assets.wall, // your local image
  },
  {
    title: "The coming together of young men ",
    text: "The coming together of young men was made possible through the effort of Late Chief Timothy L. Oyesina. Programmes for their meetings were organized and coordinated by the officials of the Social Welfare Department led by Late Dr. Bankole Wright. One of the common programmes at that time was dancing at the YWCA Centre at Oke-Bola.",
    image: assets.wallpaper,
  },
  {
    // title: "1891: Basketball is Born",
    text: "In 1957, Late Chief T. L. Oyesina went to Western Germany, now Federal Republic of Germany to attend the YMCA World/Conference at Kassel, Germany. Late Chief T. L. Oyesina during the business meeting requested German YMCAs to come to Nigeria to help establish YMCA in Ibadan, and it was granted.",
    image: assets.wallreact,
  },
  {
    // title: "1900s: YMCA's Global Growth",
    text: "Mr. Egon Slopianka the Essen YMCA Secretary who responded on behalf of German YMCAs was the first Fraternal Secretary. Minutes book of the Monthly and Annual General Meetings of the Association from February 9, 1964 to November 21, 1976 was initiated by Brother now Chief L. A. Ayorinde, JP but the cover book was purchased and donated by Mr. Egon Slopianka the Fraternal Secretary on February 9, 1964 to November 21, 1976.",
    image: assets.speedtouch,
  },
  {
    // title: "Today: A Global Movement",
    text: "YMCA Ibadan started on a humble beginning. Late Chief T. L. Oyesina finally founded YMCA of Ibadan in 1963 through the coming together of some church YMCA units. They are St. James’s Cathedral Oke-Bola, St. Peter’s Church now Cathedral Aremo, Christ Church Mapo, St. Anne’s Church Molete, St. Stephen’s Church Inalende, Ekotedo Methodist Church, Union Baptist Church Ekotedo, Christ Apostolic Church Oniyanrin and few Individual members. Conspicuous among the founding fathers were Late Chief T. L. Oyesina, the Founder and the first National President, Prince Adewole Adesida of blessed memory, the first and the longest serving President from 1963 to February 1975, Late Mr. I. O. Asolo the first Vice President, Late Mr. Oniyide first Honorary Secretary, others are Mr. now Chief L. A. Ayorinde, Late S. O. Bolaji, Mr. now Late Chief S. M. Afolabi, Late S. O. Oseni, Late O. Olugbodi, Chief O. O. Ogungbemi, Mr. Egon Slopianka, Fraternal Secretary, Mr. Fred O. Ajiboye, second Honorary Secretary later became professional Secretary for YMCA Ibadan.",
    image: assets.wallpaper,
  }
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">History of the YMCA</h1>
      {historyData.map((item, index) => (
        <div key={index} className={`flex flex-col md:flex-row items-center gap-8 mb-20 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
            <p className="text-gray-600 leading-relaxed">{item.text}</p>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;

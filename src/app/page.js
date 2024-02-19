"use client";
import React, { useState } from "react";

const IndexPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);

  const toggleBtn = () => {
    setIsActive(!isActive);
    setIsLightOn(!isLightOn);
  };

  return (
    <div className="hero bg-gray-900 min-h-screen text-white relative">
      <div className="navbar">
        <nav className="flex items-center justify-between px-8 py-4">
          <img
            src="https://i.postimg.cc/VLDqnVRV/menu.png"
            alt="Menu"
            className="menu-img w-6 mr-8 cursor-pointer"
          />
          <img
            src="https://i.postimg.cc/7ZhgVntY/logo.png"
            alt="Logo"
            className="logo w-40 cursor-pointer"
          />
          <ul className="flex">
            <li>
              <a href="" className="mr-4">
                Latest
              </a>
            </li>
            <li>
              <a href="" className="mr-4">
                Modern
              </a>
            </li>
            <li>
              <a href="" className="mr-4">
                Contemporary
              </a>
            </li>
            <li>
              <a href="">Affordable</a>
            </li>
          </ul>
          <ClientButton onClick={toggleBtn} isActive={isActive} />
        </nav>
        <div className="lamp-container absolute top-0 left-1/4 w-52">
          <img
            src="https://i.postimg.cc/4NJvKgzc/lamp.png"
            alt="Lamp"
            className="lamp w-full"
          />
          <img
            src="https://i.postimg.cc/W1y0fqxm/light.png"
            alt="Light"
            className={`light absolute top-full left-1/2 transform -translate-x-1/2 w-96 ${
              isLightOn ? "opacity-100" : "opacity-0"
            } transition-opacity duration-500`}
          />
        </div>
        <div className="text-container max-w-screen-lg mt-24 ml-1/2">
          <h1 className="text-6xl font-light mb-8">Latest in lighting</h1>
          <p className="mb-8">
            This is the first lamp from our company. We're making a huge
            collection of modern lamps in all categories from home use to office
            use.
          </p>
          <a
            href=""
            className="bg-green-500 text-white px-8 py-4 inline-block rounded-full text-lg"
          >
            Check All Collections
          </a>
          <div className="control mt-24 flex items-center justify-end">
            <p className="mr-4">04</p>
            <div className="line w-64 h-2 bg-white relative">
              <span className="absolute left-0 top-0 bg-green-500 h-full w-1/2"></span>
            </div>
            <p>05</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClientButton = ({ onClick, isActive }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      id="btn"
      className={`bg-gray-300 h-8 w-16 rounded-full outline-none relative ${
        isActive ? "active" : ""
      }`}
    >
      <span
        className={`block bg-gray-600 h-6 w-6 rounded-full absolute top-1/2 transform -translate-y-1/2 left-2 transition duration-500 ${
          isActive ? "ml-8" : ""
        }`}
      ></span>
    </button>
  );
};

export default IndexPage;

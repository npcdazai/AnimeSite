"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { RiMenuUnfold4Fill } from "react-icons/ri";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <div
        style={{ backgroundColor: "rgb(45 43 68 / 89%)" }}
        className="shadow-md shadow-black z-10 top-0 fixed w-full p-4 h-28 flex items-center"
      >
        <div className="flex items-center space-x-4">
          <button
            className="text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <RiMenuUnfoldFill />
          </button>
        </div>
        <div className="flex items-center space-x-6 ml-2">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={150} height={30} />
          </Link>
          <input
            type="text"
            placeholder="Search anime..."
            className="p-2 h-10 md:h-16 w-40 md:w-60 rounded-md bg-white text-black"
          />
          <button className="bg-black text-white p-2 w-20 md:w-24 rounded-lg">
            Filter
          </button>
        </div>
      </div>
      <div
        style={{ backgroundColor: "rgb(45 43 68 / 89%)" }}
        className={`fixed top-0 left-0 w-64 h-full z-20 transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 flex flex-col space-y-6">
          <div
            onClick={() => setSidebarOpen(false)}
            className="flex items-center space-x-4"
          >
            <svg
              className="w-6 h-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <Nav />
          <div className="flex space-x-2">
            <span className="bg-pink-500 text-white px-2 py-1 rounded-md">
              EN
            </span>
            <span className="bg-gray-500 text-white px-2 py-1 rounded-md">
              JP
            </span>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          style={{
            backgroundColorr: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(100rem)",
          }}
          className=" fixed inset-0 opacity-50 z-10"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Header;

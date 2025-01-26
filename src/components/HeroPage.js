import React from "react";
import Navbar from "@/components/Navbar";
import HeroImage from "../../public/data/static/images/hero.jpg";

export default function HeroPage() {
  return (
    <>
      <div className=" bg-white text-black p-6">
        <div className="flex flex-wrap h-full justify-between">
          <div className="left_box w-full sm:w-1/2 bg-white flex flex-col justify-center items-center p-8 min-h-screen">
            <h1 className="left_main_heading text-6xl sm:text-7xl font-bold text-gray-900 mb-6 text-center">
              Coding Redefined
            </h1>

            <h2 className="left_sub_heading text-3xl sm:text-4xl text-gray-700 text-center mb-4">
              Welcome To Our Coding Club
            </h2>

            <h3 className="left_second_sub_heading_2 text-2xl sm:text-3xl text-gray-600 text-center">
              - Where Code is About Understanding
            </h3>
          </div>

          <div className="right_box w-full sm:w-1/2 bg-white text-white flex flex-col justify-center items-center p-8">
            <img src="/data/static/images/hero.jpg" alt="Joker" />
          </div>
        </div>
      </div>
    </>
  );
}

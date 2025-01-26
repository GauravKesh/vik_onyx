import React from "react";

export default function ContactPage() {
  const advantages = [
    { id: 1, text: "Learn New Skills" },
    { id: 2, text: "Build Projects" },
    { id: 3, text: "Team Collaboration" },
    { id: 4, text: "Solve Challenges" },
    { id: 5, text: "Grow Your Portfolio" },
    { id: 6, text: "Expand Network" },
    { id: 7, text: "Sharpen Problem-Solving" },
    { id: 8, text: "Join Hackathons" },
  ];

  return (
    <div className="flex flex-col md:flex-row p-4 gap-4 bg-white">
      <div className="flex flex-col gap-4 w-full md:w-1/2 p-4 bg-white justify-center items-center">
        <h1 className="text-xl md:text-2xl font-semibold text-center text-gray-600">
          Why Wait? Join Us Now
        </h1>
        <div className="flex flex-wrap justify-center   items-center  ">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className="bg-gray-300 text-gray-600 p-3 rounded-md w-full sm:w-1/2 m-2"
            >
              <h2 className="text-sm font-medium">{advantage.text}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/2 bg-white text-gray-500 p-4 rounded-md">
        <h2 className="text-lg font-medium mb-3">Contact Us</h2>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs">Name</label>
            <input
              type="text"
              placeholder="Rahul"
              className="p-2 border border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs">Surname</label>
            <input
              type="text"
              placeholder="Kumar"
              className="p-2 border border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs">Email</label>
            <input
              type="email"
              placeholder="joker@k.com"
              className="p-2 border border-gray-400 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs">Message</label>
            <textarea
              placeholder="Write your message"
              className="p-2 border border-gray-400 rounded-md"
              rows="3"
            ></textarea>
          </div>
          <button
            type="submit"
            className="p-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

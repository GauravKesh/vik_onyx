import React from "react";

export default function LatestWork() {
    const latestWorks = [
      {
        id: 1,
        title: "AI-Powered Chatbot",
        description:
          "Developed a conversational AI bot to assist students with their coding assignments and queries.",
      },
      {
        id: 2,
        title: "CodeFest 2024 Website",
        description:
          "Created and designed the official website for CodeFest 2024, the club's annual hackathon event.",
      },
      {
        id: 3,
        title: "GitHub Contribution Tracker",
        description:
          "Built a tool to track GitHub contributions and visualized the progress of club members' open-source contributions.",
      },
      {
        id: 4,
        title: "Student Collaboration Platform",
        description:
          "Developed a platform to help students collaborate on coding projects, share resources, and manage tasks efficiently.",
      },
      {
        id: 5,
        title: "Algorithm Visualizer",
        description:
          "Created an interactive web application that visualizes sorting and searching algorithms in real-time for educational purposes.",
      },
    ];

  return (
    <>
      <div className="latest-work h-auto bg-white">
        <div className=" flex flex-col justify-center items-start p-8">
          <div className="w-full mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              Our Latest Works
            </h1>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700">
              Latest Work
            </h2>
            <p className="text-gray-600 mt-2 text-base sm:text-lg md:text-xl">
              Here's a glimpse of some of the exciting projects and work we've
              been working on. From coding challenges to real-world
              applications, our team continues to push the boundaries of
              technology.
            </p>
          </div>

          <div className="flex flex-wrap m-2 ">
            {latestWorks.map((item) => (
              <div
                key={item.id}
                className="ele bg-white m-2  p-6 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/3 xl:w-1/5"
              >
                <h3 className="text-xl font-semibold text-gray-700">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

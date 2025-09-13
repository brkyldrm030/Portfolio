import React from "react";

const Projects = () => {
  return (
    <div
      id="Webseiten"
      className="min-h-screen w-full 
    flex flex-col items-center 
    justify-center gap-20 p-10 md:p-1 xl:px-32 mt-10"
    >
      <h1 className="text-center text-5xl font-semibold text-[#1A273A]">
        Webseiten
      </h1>

      <div className="grid grid-cols-1 lg:grid-2 xl:grid-cols-3 gap-5 ml-5">
        <div
          className="text-center space-y-6 border-2 hover:scale-105 transition-all duration-200
             cursor-pointer px-8 py-10 border-[#1A273A] rounded-lg hover:bg-[#C24D2C]/30"
        >
          <h1 className="text-3xl font-semibold">Astronaut</h1>
          <a
            href="https://brkyldrm030.github.io/Astronaut/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="mt-4 px-6 py-2 bg-[#C24D2C] text-white rounded-lg hover:bg-[#a33e23] transition">
              Klick mich!
            </button>
          </a>
        </div>

        <div
          className="text-center space-y-6 border-2 hover:scale-105 transition-all duration-200
             cursor-pointer px-8 py-10 border-[#1A273A] rounded-lg hover:bg-[#C24D2C]/30"
        >
          <h1 className="text-3xl font-semibold">Designer</h1>
          <a
            href="https://brkyldrm030.github.io/Aysulix-Design/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="mt-4 px-6 py-2 bg-[#C24D2C] text-white rounded-lg hover:bg-[#a33e23] transition">
              Klick mich!
            </button>
          </a>
        </div>

        <div
          className="text-center space-y-6 border-2 hover:scale-105 transition-all duration-200
             cursor-pointer px-8 py-10 border-[#1A273A] rounded-lg hover:bg-[#C24D2C]/30"
        >
          <h1 className="text-3xl font-semibold">Coming soon</h1>
          <a href="" target="_blank" rel="noreferrer">
            <button className="mt-4 px-6 py-2 bg-[#C24D2C] text-white rounded-lg hover:bg-[#a33e23] transition">
              Klick mich!
            </button>
          </a>
        </div>
        <div
          className="text-center space-y-6 border-2 hover:scale-105 transition-all duration-200
             cursor-pointer px-8 py-10 border-[#1A273A] rounded-lg hover:bg-[#C24D2C]/30"
        >
          <h1 className="text-3xl font-semibold">Coming soon</h1>
          <a href="" target="_blank" rel="noreferrer">
            <button className="mt-4 px-6 py-2 bg-[#C24D2C] text-white rounded-lg hover:bg-[#a33e23] transition">
              Klick mich!
            </button>
          </a>
        </div>
        <div
          className="text-center space-y-6 border-2 hover:scale-105 transition-all duration-200
             cursor-pointer px-8 py-10 border-[#1A273A] rounded-lg hover:bg-[#C24D2C]/30"
        >
          <h1 className="text-3xl font-semibold">Coming soon</h1>
          <a href="" target="_blank" rel="noreferrer">
            <button className="mt-4 px-6 py-2 bg-[#C24D2C] text-white rounded-lg hover:bg-[#a33e23] transition">
              Klick mich!
            </button>
          </a>
        </div>
        <div
          className="text-center space-y-6 border-2 hover:scale-105 transition-all duration-200
             cursor-pointer px-8 py-10 border-[#1A273A] rounded-lg hover:bg-[#C24D2C]/30"
        >
          <h1 className="text-3xl font-semibold">Coming soon</h1>
          <a href="" target="_blank" rel="noreferrer">
            <button className="mt-4 px-6 py-2 bg-[#C24D2C] text-white rounded-lg hover:bg-[#a33e23] transition">
              Klick mich!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

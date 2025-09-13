import React from "react";
import Desktop from "../assets/Desktop.png";

const Home = () => {
  return (
    <div
      id="Home"
      className="flex flex-col md:flex-row md:h-screen mt-16 md:m-2"
    >
      {/* Linke Seite */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-stone-400 rounded-xl">
        <div className="max-w-md">
          <h1 className="text-3xl md:text-5xl font-semibold  mb-4 sm:mt-2 text-[#1A273A]">
            Hallo, ich bin Burak.
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Aus Leidenschaft baue ich moderne Webseiten wirf einen Blick auf
            meine Projekte und klick dich durch.
          </p>
        </div>
      </div>

      {/* Rechte Seite */}
      <div className="w-full md:w-1/2 m-2">
        <img
          src={Desktop}
          alt="Desktop"
          className="w-full h-64 sm:h-80 md:h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default Home;

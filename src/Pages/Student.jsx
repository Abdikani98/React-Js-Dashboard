import React from "react";

function Student() {
   return (
    <div className="flex gap-8  justify-center  bg-gray-100 min-h-screen fixed left-[23%] w-[80%] items-center">
      {/* Card 1 */}
      <div className="bg-yellow-500 w-60 h-40 rounded-2xl shadow-lg flex justify-center items-center transform hover:scale-105 transition-all">
        <h1 className="text-3xl text-white font-semibold">Javascript</h1>
      </div>

      <div className="bg-blue-500 w-60 h-40 rounded-2xl shadow-lg flex justify-center items-center transform hover:scale-105 transition-all">
        <h1 className="text-3xl text-white font-semibold">React-Js</h1>
      </div>

      <div className="bg-green-500 w-60 h-40 rounded-2xl shadow-lg flex justify-center items-center transform hover:scale-105 transition-all">
        <h1 className="text-3xl text-white font-semibold">Note-Js</h1>
      </div>
    </div>
  );
}

export default Student;

import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 to-blue-500 flex flex-col justify-center items-center relative overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-1/2 flex items-center justify-center">
        <div className="w-24 h-24 bg-red-500 rounded-full animate-bounce"></div>
      </div>

      <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-center">
        <div className="w-24 h-24 bg-green-500 rounded-full animate-bounce"></div>
      </div>

      <h1 className="text-5xl font-bold mb-10 text-white">Imtixon ishi</h1>

      <div className="flex space-x-8">
        <div className="relative w-64 h-64 bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
          <div className="absolute inset-0 bg-green-500 opacity-30 animate-pulse"></div>
          <a
            href="https://github.com/mukh4mmadov/6-oy-imtixon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="h-full flex flex-col items-center justify-center relative p-4">
              <h2 className="text-2xl font-semibold text-gray-800">GitHub</h2>
            </div>
          </a>
        </div>

        <div className="relative w-64 h-64 bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
          <div className="absolute inset-0 bg-blue-500 opacity-30 animate-pulse"></div>
          <a
            href="https://6-oy-imtixon-five.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="h-full flex flex-col items-center justify-center relative p-4">
              <h2 className="text-2xl font-semibold text-gray-800">Vercel</h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

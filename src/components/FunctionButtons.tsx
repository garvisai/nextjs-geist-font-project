"use client";

import React from 'react';

const FunctionButtons = () => {
  return (
    <div className="flex justify-center space-x-4 mb-4">
      <button className="bg-[#40414F] text-white px-4 py-2 rounded-lg hover:bg-[#4A4B55] transition-colors">
        Web Search
      </button>
      <button className="bg-[#40414F] text-white px-4 py-2 rounded-lg hover:bg-[#4A4B55] transition-colors">
        Deep Research
      </button>
      <button className="bg-[#40414F] text-white px-4 py-2 rounded-lg hover:bg-[#4A4B55] transition-colors">
        Code Analysis
      </button>
    </div>
  );
};

export default FunctionButtons;

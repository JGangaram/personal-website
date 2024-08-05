'use client';

import React from 'react';

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">This page is under construction.</h1>
        <p className="mt-4 text-lg">Please check back later.</p>
      </div>
      <div className="mt-8">
        <a href="https://linkedin.com/in/jeremy-gangaram" className="mx-4 text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/JGangaram" className="mx-4 text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:jeremy@gangaram.com" className="mx-4 text-blue-400 hover:underline">Email</a>
      </div>
    </div>
  );
};

export default UnderConstruction;

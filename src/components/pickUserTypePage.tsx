import React from 'react';
import background from "../assets/bg.jpg";

const PickUserTypePage: React.FC = () => {
  return (
    <div className="relative h-screen bg-center bg-cover" style={{ backgroundImage: `url("${background}")` }}>
      <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-filter backdrop-blur-sm">
        <div className="px-12 py-6 mb-8 text-6xl font-extrabold text-white bg-black rounded-lg">ARE YOU</div>
        <div className="flex w-2/3 p-24 space-x-6 text-center rounded-lg">
          <div className="flex-1">
            <div className="owner-type" >
              <a href="/owner-PickUserType-page" className="inline-block w-full h-full p-24 text-3xl font-extrabold text-white transition-transform bg-black rounded-md shadow-md hover:scale-105">Renting Your Place?</a>
            </div>
          </div>
          <div className="flex-1">
            <div className="customer-type">
              <a href="/customer-home-page" className="inline-block w-full h-full p-24 text-3xl font-extrabold text-white transition-transform bg-black rounded-md shadow-md hover:scale-105">Looking For a Place?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PickUserTypePage;

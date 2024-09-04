import React from "react";

const Announcement = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1>Announcements</h1>
        <span className="text-xs text-gray-300">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-skyLight1 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            illum dolores voluptates in perferendis sint!
          </p>
        </div>
        <div className="bg-purpleLight1 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            illum dolores voluptates in perferendis sint!
          </p>
        </div>
        <div className="bg-YellowLight1 rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor sit amet.</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            illum dolores voluptates in perferendis sint!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;

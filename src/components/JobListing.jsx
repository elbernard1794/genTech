import React from "react";
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";

const JobListing = ({ job }) => {
  const [showFullDescription, setFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }
  return (
    <div className="bg-white rounded-lg shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-500">{job.type}</div>
          <h3 className="text-3xl font-bold">{job.title}</h3>
        </div>
        <p className="text-2x mb-5">{description}</p>
        <button
          onClick={() => setFullDescription((prevState) => !prevState)}
          className="text-indigo-500 mb-5 hover:text-indigo-60"
        >
          {showFullDescription ? "less" : "More"}
        </button>
        <h3 className="text-2l text-indigo-300 mb-5">{job.salary} /Year</h3>
        <div className="border border-gray-100 mb-5"></div>
        <div className="flex flex-col lg:flex-row justify-around mb-3">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-2" />
            {job.location}
          </div>
          <a
            href={`/job/${job.id}`}
            className="bg-indigo-500 rounded-lg h-[36px] text-white py-2 p-3 text-sm hover:bg-indigo-600 text-center"
          >
            Read More
          </a>
        </div>
      </div> 
    </div>
  );
};

export default JobListing;

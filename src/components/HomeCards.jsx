import React from "react";
import Card from "./Cards"

const Developers = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
          <h1 className="text-2xl font-bold">For Developers</h1>
            <p className="mt-2 mb-4">Browse our React jobs and start your career today</p>
            <a href="/jobs.html" className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
            Browse Jobs
            </a>
          </Card>
          <Card bg="bg-indigo-100">
          <h1 className="text-2xl font-bold">For Employers</h1>
            <p className="mt-2 mb-4">List your jobs to find the perfect developer for the role</p>
            <a href="/job.html" className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-gray-700">
            Add Jobs
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Developers;

import React from "react";
import jobs from "../jobs.json";
import JobListing from "./JobListing";

const JobListings = () => {
    const recentJob = jobs.slice(0,3)
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container xl container-lg m-auto">
                <h1 className="text-3xl text-indigo-500 mb-4 text-center font-bold">
                    Browse Jobs
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {recentJob.map((job) => (
                        <JobListing key ={job.id} job={job}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JobListings;

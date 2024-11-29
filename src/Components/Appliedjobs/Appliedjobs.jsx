import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { LuCircleDollarSign } from "react-icons/lu";

const Appliedjobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayjobs] = useState([]);


    const handleFilterJobs = filter =>{
        if(filter === 'all'){
            setDisplayjobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote");
            setDisplayjobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite");
            setDisplayjobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobsIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobsIds.include(job.id))
            const jobsApplied = [];
            for (const id of storedJobsIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayjobs(jobsApplied);
        }
    }, [jobs])
    return (
        <div>
            <h1 className="text-2xl font-extrabold text-center my-2">Applied Jobs</h1>
            <div className="text-right">
                <details className="dropdown">
                    <summary className="btn m-1">Filter By <RiArrowDropDownLine className="text-2xl" /></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => handleFilterJobs('all')}><a>All</a></li>
                        <li onClick={() => handleFilterJobs('remote')}><a>Remote</a></li>
                        <li onClick={() => handleFilterJobs('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <div className="space-y-4 my-2">
                {
                    displayJobs.map(job =>
                        <div key={job.id} className="flex gap-5 border rounded p-4 items-center">
                            <div className="w-48">
                                <img src={job.logo} alt="" />
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <div className="space-y-2">
                                    <h2 className="font-bold">{job.job_title}</h2>
                                    <p>{job.company_name}</p>
                                    <div className="flex gap-2">
                                        <p className="border p-2 rounded-md border-violet-600 font-bold text-violet-500">{job.remote_or_onsite}</p>
                                        <p className="border p-2 rounded-md border-violet-600 font-bold text-violet-500">{job.job_type}</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <p className="flex items-center"><CiLocationOn /> {job.location}</p>
                                        <p className="flex items-center"><LuCircleDollarSign /> {job.salary}</p>
                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-primary w-full">View Details</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Appliedjobs;
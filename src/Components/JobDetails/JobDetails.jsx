import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)

    const hanbleApplyJob = () =>{
        saveJobApplication(idInt);
        toast('You have applied successfully');
    }

    return (
        <div className="my-4">
            <h1 className="text-2xl font-extrabold text-center my-2">Job Details</h1>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="md:col-span-3 space-y-2">
                    <p><span className="font-bold">Job Description :</span> {job.job_description}</p>
                    <p><span className="font-bold">Job Responsibility :</span> {job.job_responsibility}</p>
                    <p><span className="font-bold">Educational Requirements :</span> <br />
                        {job.educational_requirements}
                    </p>
                    <p><span className="font-bold">Experiences :</span> <br />
                        {job.experiences}
                    </p>
                </div>
                <div>
                    <div className="border space-y-3 p-3 mb-2 bg-[#7E90FE26] rounded-lg">
                        <h2 className="font-bold">Job Details</h2>
                        <div className="space-y-2 border-t border-t-[#7E90FE] pt-2">
                            <p><span className="font-bold">Salary : </span>{job.salary} (per month)</p>
                            <p><span className="font-bold">Job Title : </span>{job.job_title}</p>
                        </div>
                        <h2 className="font-bold">Contact Information</h2>
                        <div className="space-y-2 border-t border-t-[#7E90FE] pt-2">
                            <p><span className="font-bold">Phone : </span>{job.contact_information.phone}</p>
                            <p><span className="font-bold">Email : </span>{job.contact_information.email}</p>
                            <p><span className="font-bold">Address : </span>{job.contact_information.address}</p>
                        </div>
                    </div>
                    <button onClick={hanbleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;
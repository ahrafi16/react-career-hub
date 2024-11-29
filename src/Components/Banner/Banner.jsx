

const Banner = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="space-y-5">
                <h1 className="md:text-7xl font-extrabold">One Step <br /> Closer To Your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn text-white bg-[#7E90FE]">Get Started</button>
            </div>
            <div>
                <img src="../../../images/user.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;
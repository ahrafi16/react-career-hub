
const CategoryList = () => {
    return (
        <div className="my-5">
            <h1 className="text-5xl text-center font-bold">Job Category List</h1>
            <p className="text-center mt-2">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-4 gap-4 my-3">
                <div className="p-5 bg-violet-100 rounded-lg">
                    <img src="../../../icons/accounts.png" alt="" />
                    <h2 className="mt-2 font-bold">Account & Finance</h2>
                    <p>300 Jobs Available</p>
                </div>
                <div className="p-5 bg-violet-100 rounded-lg">
                    <img src="../../../icons/creative.png" alt="" />
                    <h2 className="mt-2 font-bold">Creative Design</h2>
                    <p>100+ Jobs Available</p>
                </div>
                <div className="p-5 bg-violet-100 rounded-lg">
                    <img src="../../../icons/marketing.png" alt="" />
                    <h2 className="mt-2 font-bold">Marketing & Sales</h2>
                    <p>150 Jobs Available</p>
                </div>
                <div className="p-5 bg-violet-100 rounded-lg">
                    <img src="../../../icons/chip.png" alt="" />
                    <h2 className="mt-2 font-bold">Engineering Job</h2>
                    <p>224 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;
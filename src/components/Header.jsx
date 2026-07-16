function Header() {
    return (
        <div className="bg-slate-800 text-white p-5 flex justify-between items-center">
            <h1 className="text-4xl ml-3 font-bold">
                Radar GUI
            </h1>

            <div className="flex justify-center items-center gap-6 mt-6">

                <button className="w-28 h-20 rounded-lg bg-gray-900 text-white font-semibold  hover:bg-gray-700">
                    CMS
                </button>

                <button className="w-25 h-20 rounded-lg bg-white border text-black font-semibold  hover:bg-gray-700">
                    PPI
                </button>

                <button className="w-25 h-20 rounded-lg bg-gray-400 text-black font-semibold">
                    RCMS-1 <br /> SLAVE
                </button>

                <button className="w-28 h-20 rounded-lg bg-gray-900 text-white font-semibold">
                    RCMS-2 <br /> MASTER </button>


                 <button className="w-28 h-20 rounded-lg bg-gray-400 text-black font-semibold">
                    LCMS-1 <br /> SLAVE </button>


                 <button className="w-28 h-20 rounded-lg bg-white border text-black font-semibold">
                    LCMS-2 <br /> NOT CONNECTED </button>

            </div>
            <h1>SITE NAME</h1>

            <div className="text-right">
                <div>{new Date().toLocaleTimeString()}</div>
                <div>
                    {new Date().toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </div>
            </div>
        </div>
    );
}

export default Header;
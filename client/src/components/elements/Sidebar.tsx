import {Link} from "react-router-dom";

export const Sidebar = () => {
    return (
        <div className="hidden md:flex bg-neutral-700 flex-col items-center p-6 w-[20%] shadow-xl rounded h-full text-white">
            <Link to="/"><p className="text-xl uppercase font-semibold">Tickety</p></Link>
        </div>
    )
};
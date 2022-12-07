import {Outlet} from "react-router";
import {Sidebar} from "./elements/Sidebar";
import {Navbar} from "./elements/Navbar";

export const Layout = () => {

    return (
        <div className={"flex w-full h-screen"}>
            <Sidebar/>
            <div className="flex flex-col w-full">
                <Navbar/>
                <div className="p-8 pt-2 px-12">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
};
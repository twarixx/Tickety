import {Outlet} from "react-router";

export const Layout = () => {
    return (
        <div className="p-4">
            <Outlet/>
        </div>
    )
};
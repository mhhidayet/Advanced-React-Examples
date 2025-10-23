import { Outlet } from "react-router";
import Navbar from "../companents/Navbar";

export default function MainLayout() {
    return (
        <div className="container">
            <Navbar />
            <Outlet />
        </div>
    );
}
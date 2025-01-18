import React from "react";
import {Link} from "react-router";
import "./Navigation.css";

export function Navigation() {
    return (
        <>
            <header className="shadow-lg">
            <nav className="flex justify-between items-center bg-[#2d6a4f] text-white p-2.5 px-5 fixed w-full">
                <div className="flex items-center">
                   <Link to=''>
                        <img
                            src="/public/assets/images/best_logo.jpeg"
                            className="w-10 h-10 mr-2.5"
                        />
                    </Link>
                    <span className="text-lg font-bold">Green Shadow</span>
                </div>
                <ul className="flex list-none transition-all duration-300 ease-in-out" >
                    <Link to='/fields' className="custom-link">Fields</Link>
                    <Link to='/crops' className="custom-link">Crops</Link>
                    <Link to='/staff' className="custom-link">Staff</Link>
                    <Link to='/vehicle' className="custom-link">Vehicles</Link>
                    <Link to='/equipment' className="custom-link">Equipments</Link>
                    <Link to='/log' className="custom-link">Logs</Link>
                    <Link to='/user' className="custom-link">User</Link>
                    <Link to='/logout' className="custom-link">Log Out</Link>
                </ul>
            </nav>
            </header>
        </>
        // <>
        //     <header className="bg-blue-600 shadow-lg">
        //         <nav className="px-4 py-3">
        //             <ul className="flex text-white space-x-4">
        //                 <Link to='/' className="custom-link">Dashboard</Link>
        //                 <Link to='/add' className="custom-link">Add</Link>
        //                 <Link to='/delete' className="custom-link">Delete</Link>
        //                 <Link to='/update' className="custom-link">Update</Link>
        //             </ul>
        //         </nav>
        //     </header>
        // </>
    )
}
import React from 'react'
import {Link} from 'react-router-dom'
export const Navbar = () => {
   
  return (
    <>
        <nav className="bg-[#a7c6d8] text-amber-50 p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold"></h1>
                {/* <img src="/logo1.png" className="w-2x4 h-30" /> */}
                <ul className= "flex gap-7">
                    <li>
                        <Link to="/dashboard" className="text-2xl">Dashboard</Link>
                    </li>
                    <li>    
                        <Link to="/user" className="text-2xl">Add User</Link>
                    </li>
                    <li>
                        <Link to="/mechanic" className="text-2xl">Add Mechanic</Link>
                    </li>
                    <li>
                        <Link to="/service" className="text-2xl">Add Service</Link>
                    </li>
                    <li>
                        <Link to="/booking" className="text-2xl">Book Service</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

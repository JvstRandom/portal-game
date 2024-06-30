import React from 'react'
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
        <nav>
            <div className='flex flex-row justify-between px-3 mt-3 items-center'>
                <Link to="/" className='font-penjelasan text-2xl'>
                    Sistem Informasi Game
                </Link>
                <Link to="/Login" className="btn btn-outline btn-warning">
                    Login
                </Link>
            </div>
        </nav>

        <Outlet />
    </>
  )
}

export default Layout
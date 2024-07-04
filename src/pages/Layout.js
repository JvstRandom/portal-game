import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../utils';

function Layout({ session }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/'); 
  };

  return (
    <>
      <nav>
        <div className='flex flex-row justify-between px-3 mt-3 items-center'>
          <Link to="/" className='font-penjelasan text-2xl hover:text-warning'>
            Sistem Informasi Game
          </Link>
          {session ? (
            <button className="btn btn-outline btn-error" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn btn-outline btn-warning">
              Login
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;

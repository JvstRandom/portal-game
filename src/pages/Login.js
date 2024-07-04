import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../utils';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      // Check if the logged-in user is an admin
      const { data: adminData } = await supabase
        .from('admins')
        .select('*')
        .eq('email', email);

      if (!adminData) {
        setError('Access restricted to admins only.');
        await supabase.auth.signOut(); // Sign out the non-admin user
        return;
      }

      navigate('/Dashboard');
    } catch (error) {
      console.error('Sign in error:', error.message);
      setError('Sign in failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center mt-20'>
      <div className='border-2 border-primary rounded-2xl px-10 py-12 shadow-2xl'>
        <h1 className='text-4xl font-judul hover:font-mono'>Login Admin</h1>

        <label className="input input-bordered input-accent flex items-center gap-2 mt-12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        
        <label className="input input-bordered input-accent flex items-center gap-2 mt-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
            <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <button className="btn btn-outline btn-secondary mt-8 w-full" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;

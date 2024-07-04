// ProtectedRoute.js
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../utils';

const ProtectedRoute = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      const user = supabase.auth.getSession();

      if (user) {
        const { data: adminData, error } = await supabase
          .from('admins')
          .select('*')
          .eq('email', user.email);

        if (adminData) {
          setIsAdmin(true);
        }
      }
    };

    checkAdmin();
  }, []);

  return isAdmin ? children : <Navigate to="/Dashboard" />;
};

export default ProtectedRoute;

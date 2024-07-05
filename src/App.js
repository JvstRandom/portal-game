import React, {useState, useEffect} from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Layout from './pages/Layout';
import AddGame from './pages/AddGame';
import AdminDashboard from './pages/AdminDashboard';
import AddAdmin from './pages/AddAdmin';
import EditGame from './pages/EditGame';
import { supabase } from './utils';
import ProtectedRoute from './components/ProtectedRoutes';

export default function App() {

  const [session, setSession] = useState(null);

  useEffect(() => {
    const session = supabase.auth.getSession();
    setSession(session);

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout session={session}/>}>
            <Route index element={<Home/>} />
            <Route path='Login' element={<Login/>} />
            <Route
              path="dashboard"
              element={
                <ProtectedRoute session={session}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="addgame"
              element={
                <ProtectedRoute session={session}>
                  <AddGame />
                </ProtectedRoute>
              }
            />
            <Route
              path="addadmin"
              element={
                <ProtectedRoute session={session}>
                  <AddAdmin />
                </ProtectedRoute>
              }
            />
            <Route
              path="editgame/:id"
              element={
                <ProtectedRoute session={session}>
                  <EditGame />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


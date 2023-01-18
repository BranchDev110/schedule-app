import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Login from './pages/Login';
import ProtectedRoute from './utils/ProtectedRoute';
import Dashboard from './pages/Dashboard';

import './App.scss';
import { DataContext } from './context/DataContext';
import { ISchedule } from './utils/types';

function App() {
  const [token, setToken] = useState<string>('');
  const [appointments, setAppointments] = useState<ISchedule[]>([]);
  return (
    <AuthContext.Provider value={{token, setToken}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
              <ProtectedRoute >
                <DataContext.Provider value={{appointments, setAppointments}}>
                  <Dashboard />
                </DataContext.Provider>
              </ProtectedRoute>
            } 
          />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>  
    </AuthContext.Provider>
  );
}

export default App;

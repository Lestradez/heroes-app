import React, { useContext } from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  
  return (
    
      <Routes>
          <Route exact path='/login' element={ 
            <PublicRoute>
              <LoginScreen /> 
            </PublicRoute>
          } />
          <Route path='*' element= {
            <PrivateRoute >
              <DashboardRoutes />  
            </PrivateRoute>
            }>
          </Route>      
          
      </Routes>
    
  )
}

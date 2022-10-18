import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'

function PrivateRouter({children}) {
  const isLogin = useAuth();

  return isLogin? children : <Navigate to={"/"} />
}

export default PrivateRouter
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function PublicRouter({ children }) {
  const islogin = useAuth();

  return !islogin ? children : <Navigate to={"/cheat"} />;
}

export default PublicRouter;

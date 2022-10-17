import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function PublicRouter({ children }) {
  const islogin = useAuth();

  console.log(islogin);
  return !islogin ? children : <Navigate to={"/"} />;
}

export default PublicRouter;

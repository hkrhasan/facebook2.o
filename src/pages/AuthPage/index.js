import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { selectUser } from "../../store/reducers/user.reducer";

const AuthPage = ({ children }) => {
  const navigate = useNavigate();
  const { user, isLoading } = useSelector(selectUser);
  let location = useLocation();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      if (location.pathname === "/login") {
        navigate("/");
      }
    }
  }, [user]);
  return <div>{children}</div>;
};

export default AuthPage;

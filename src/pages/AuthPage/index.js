import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../store/reducers/user.reducer";

const AuthPage = ({ children }) => {
  const navigate = useNavigate();
  const { user, isLoading } = useSelector(selectUser);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return <div>{children}</div>;
};

export default AuthPage;

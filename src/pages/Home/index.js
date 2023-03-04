import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { user } = useAuth();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [user]);

  console.log({ user });

  return <div>{JSON.stringify(user)}</div>;
}

export default HomePage;

import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components";


function HomePage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return <div className="h-screen w-full bg-[#f0f2f5]">
    <Header />
  </div>;
}

export default HomePage;
